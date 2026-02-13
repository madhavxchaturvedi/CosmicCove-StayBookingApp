#!/bin/bash
# Start script with Node.js TLS compatibility flags for MongoDB Atlas
NODE_OPTIONS="--tls-min-v1.0 --openssl-legacy-provider" node index.js
