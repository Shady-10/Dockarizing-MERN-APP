## Overview:

This project provides a Dockerized setup for a MERN (MongoDB, Express.js, React, Node.js) stack application. It consists of separate Docker images for the client (React app) and the API (Node.js server), along with a MongoDB database container. Docker Compose is used to orchestrate the containers and simplify the development environment setup.

## Prerequisites:

- Docker and docker compose installed on your machine
- Basic understanding of Docker and Docker Compose

## Steps:

1. **Clone The Repo:**

   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Update The Api Paths:**

   Ensure to update the API paths in client/src/api before running the application locally.

3. **Build The Docker Images:**

   ```sh
   docker-compose build
   ```

4. **Start the Docker Containers:**

   ```sh
   docker-compose up -d
   ```

5. **Access The App:**

   Client (React app): Open http://localhost:3000 in your browser.
   API (Node.js server): Access the API endpoints at http://localhost:5000.

6. **Clean Up:**

   ```sh
   docker-compose down
   ```
