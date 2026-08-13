# Actionable Docker

## About Containers

A **container** is a lightweight, standalone, executable package that includes everything needed to run an application: code, runtime, system tools, system libraries, and settings. It packages up your code and dependencies so the application runs consistently across any computing environment.

## What is Docker

Docker enables you to treat containers as extremely lightweight, modular units that you can easily create, deploy, copy, and move between environments—this flexibility is perfect for cloud-based applications.

Docker uses the Linux kernel features (such as Cgroups and namespaces) to isolate processes so they can run independently within their containers. It provides an image-based deployment model and automates the deployment of applications within these container environments.

## Advantages of Docker

### Modularity

Docker's containerization approach allows you to update or repair individual application components without taking down the entire application, enabling more flexible maintenance and updates.

### Layers and Image Version Control

Each Docker image consists of layers that are combined to create a single image. A new layer is created every time a command (such as `RUN` or `COPY`) is executed. 

Docker reuses layers to build new containers, which speeds up the building process. This layer-based approach also provides built-in version control: each change creates a new snapshot, giving you full control and a complete changelog of your container images.

### Rollback

Since every image has layers and a version history, you can easily roll back to a previous version if needed.

### Rapid Deployment

Traditionally, provisioning new hardware took days and required significant overhead. With Docker, deployment is reduced to seconds.

By creating a container for each process, you can quickly share those processes with new applications. Since an operating system doesn't need to boot to add or move a container, deployment times are substantially faster.

## How Docker Works

### Docker Architecture

Docker uses a client-server architecture consisting of three main components:

- **Docker Client**: The command-line interface (CLI) or API that users interact with to run commands like `docker build`, `docker run`, and `docker push`.
- **Docker Daemon**: A background service that manages Docker objects (images, containers, networks, and volumes). It listens for API requests and processes them.
- **Docker Registry**: A repository that stores Docker images. Docker Hub is the default public registry, but you can also use private registries.

### Docker Images and Containers

A **Docker image** is a read-only template that contains everything needed to run an application. It's built from a series of layers, each representing a set of file changes.

A **Docker container** is a running instance of a Docker image. When you run an image, Docker creates a container—a lightweight, isolated environment where your application executes. Multiple containers can run from the same image, each with its own isolated filesystem, network, and process space.

### The Containerization Process

1. **Write a Dockerfile**: Create a Dockerfile that specifies the base image, dependencies, and commands needed to set up your application.
2. **Build an Image**: Use `docker build` to create an image from your Dockerfile. Docker processes each instruction and creates layers.
3. **Run a Container**: Use `docker run` to create and start a container from your image. The Docker daemon allocates resources and isolates the container.
4. **Container Execution**: Your application runs within the container with isolated access to CPU, memory, storage, and network resources.

### Isolation and Resource Management

Docker containers are isolated using Linux kernel features:

- **Namespaces**: Provide process isolation (PID), network isolation (network namespace), filesystem isolation (mount namespace), and more.
- **Cgroups (Control Groups)**: Limit and monitor resource usage such as CPU, memory, and I/O for each container.

This ensures that containers don't interfere with each other and resource usage is controlled and predictable.

### Docker vs. Virtual Machines

Unlike virtual machines (VMs) that require a full operating system, Docker containers share the host OS kernel, making them:
- **Lighter weight**: Smaller image sizes and lower memory footprint
- **Faster**: No boot-up time required
- **More efficient**: Better resource utilization and higher container density

## Common Docker Commands

Here are essential Docker commands you should know: 

### docker run

Starts a new container from an image. Common options:
- `-p`: Maps ports (host:container)
- `-d`: Runs in detached mode (background)
- `-e`: Sets environment variables

**Example - MongoDB:**
```bash
# Run MongoDB with port mapping (can connect via MongoDB Compass)
docker run -p 27017:27017 mongo
```

**Example - MongoDB in background:**
```bash
# The -d flag runs the process in the background
docker run -d -p 27017:27017 mongo
```

### docker ps

Displays all currently running containers on your machine.

```bash
docker ps
```

### docker kill

Terminates a running container.

```bash
docker kill <container-id>
```

### Running PostgreSQL

Start a PostgreSQL container with environment variables:

```bash
# The -e flag passes environment variables
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

**Connection String:**
```
postgresql://postgres:mysecretpassword@localhost:5432/postgres
```