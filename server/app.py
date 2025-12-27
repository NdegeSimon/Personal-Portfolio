from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

# ======================
# Extensions
# ======================
db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)

    # Load env variables
    load_dotenv()

    # ======================
    # Configuration
    # ======================
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-key")
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
        "DATABASE_URL", "sqlite:///app.db"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # ======================
    # Init extensions
    # ======================
    db.init_app(app)
    migrate.init_app(app, db)

    # ======================
    # CORS (simple & enough)
    # ======================
    CORS(app)

    # ======================
    # Routes
    # ======================
    @app.route("/api/health", methods=["GET"])
    def health():
        return jsonify({
            "status": "ok",
            "message": "Backend running"
        })

    # ======================
    # Register API routes
    # ======================
    from routes.api import api_bp
    app.register_blueprint(api_bp, url_prefix="/api")

    # ======================
    # Errors
    # ======================
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Not found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Server error"}), 500

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
