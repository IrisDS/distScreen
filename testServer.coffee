http = require 'http'
server = http.create (req, res) -> res.end 'sup bitch?\n'
server.listen 31337
