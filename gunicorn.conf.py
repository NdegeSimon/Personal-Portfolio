import os

# Server socket
bind = '0.0.0.0:' + os.environ.get('PORT', '5000')

# Worker processes
workers = 3
worker_class = 'sync'
worker_connections = 1000
timeout = 30
keepalive = 2

# Logging
accesslog = '-'  # Log to stdout
errorlog = '-'   # Log to stderr
loglevel = 'info'
