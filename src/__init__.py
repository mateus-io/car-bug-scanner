from flask_cors import CORS
from flask import Flask

def create_app():
    app = Flask(__name__)
    CORS(app)

    from . import routes

    routes.setup_routes(app)

    return app
