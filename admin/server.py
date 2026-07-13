#!/usr/bin/env python3
"""Panel de administración de «90 Minutos de Álvaro».

Uso:  python3 admin/server.py   (o doble clic en Administrar.command)

- Sirve la web en     http://localhost:8090/
- Sirve el panel en   http://localhost:8090/admin
- Guarda el contenido en data/content.json y data/content.js
- El botón «Publicar» hace git add/commit/push del repositorio
"""
import http.server
import json
import subprocess
import webbrowser
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
PUERTO = 8090


def leer_contenido():
    with open(REPO / "data" / "content.json", encoding="utf-8") as f:
        return json.load(f)


def guardar_contenido(data):
    with open(REPO / "data" / "content.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    with open(REPO / "data" / "content.js", "w", encoding="utf-8") as f:
        f.write("window.CONTENIDO = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")


def git(*args):
    r = subprocess.run(["git", "-C", str(REPO), *args], capture_output=True, text=True)
    return r.returncode, (r.stdout + r.stderr).strip()


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(REPO), **kwargs)

    def _json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path in ("/admin", "/admin/"):
            self.path = "/admin/admin.html"
        elif self.path == "/api/content":
            return self._json(200, leer_contenido())
        return super().do_GET()

    def do_POST(self):
        largo = int(self.headers.get("Content-Length", 0))
        cuerpo = self.rfile.read(largo).decode("utf-8") if largo else "{}"

        if self.path == "/api/save":
            try:
                data = json.loads(cuerpo)
                for clave in ("portada", "notas", "temas", "sobreMi", "pie"):
                    if clave not in data:
                        return self._json(400, {"ok": False, "error": f"Falta la sección '{clave}'"})
                guardar_contenido(data)
                return self._json(200, {"ok": True, "mensaje": "Contenido guardado"})
            except Exception as e:
                return self._json(500, {"ok": False, "error": str(e)})

        if self.path == "/api/publish":
            code, salida = git("add", "data/content.json", "data/content.js")
            code, estado = git("status", "--porcelain", "data/")
            if not estado:
                return self._json(200, {"ok": True, "mensaje": "No hay cambios que publicar"})
            code, salida = git("commit", "-m", "Actualizar contenido desde el panel de administración")
            if code != 0:
                return self._json(500, {"ok": False, "error": salida})
            code, salida = git("push")
            if code != 0:
                return self._json(500, {"ok": False, "error": salida})
            return self._json(200, {"ok": True, "mensaje": "Publicado en GitHub ✅"})

        return self._json(404, {"ok": False, "error": "Ruta desconocida"})

    def log_message(self, fmt, *args):
        pass  # silencio en la terminal


if __name__ == "__main__":
    server = http.server.ThreadingHTTPServer(("127.0.0.1", PUERTO), Handler)
    url = f"http://localhost:{PUERTO}/admin"
    print(f"Panel de administración: {url}")
    print(f"Vista previa de la web:  http://localhost:{PUERTO}/")
    print("Pulsa Ctrl+C para salir.")
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nHasta luego 👋")
