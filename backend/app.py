import sys
sys.path.append('/Users/alex/Documents/GitHub/tobesan/backend')
from config import Config
from flask import Flask
from backend.models import db, User
from backend.routes import register_routes
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from extensions import db, migrate
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

db.init_app(app)
migrate.init_app(app, db)

# app = Flask(__name__)
# app.config.from_object(Config)
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)

# db.init_app(app)

# register_routes(app)

if __name__ == '__main__':
    app.run(debug=True)
