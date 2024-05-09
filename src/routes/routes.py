from flask import request

def setup_routes(app):
    @app.route('/gemini', methods=["GET", "POST"])
    def handle_gemini():
        if request.method == "GET":
            return {
                "result": "Success"
            }
