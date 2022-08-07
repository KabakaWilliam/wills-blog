---
title: "SSH commands"
metaTitle: "SSH into a remote computer"
metaDesc: "Recoil simplifies  a lot of state management in react. Here's how to design an atom"
socialImage: images/22-09-2021.jpg
date: "2022-05-31"
tags:
  - React
---

# Get Docker Images

```bash
$ docker images
```

Output:

```
REPOSITORY                        TAG       IMAGE ID       CREATED        SIZE
docker-init-build                 latest    7d10bd1504d2   3 hours ago    384MB
mongo                             latest    1d3f6d5230f6   11 hours ago   696MB
qcri-dashboard-image-production   latest    3227c62be5a9   44 hours ago   119MB
qcri-dashboard-image-dev          latest    35e222a30364   46 hours ago   443MB
qcri-dashboard-image              latest    35e222a30364   46 hours ago   443MB
```

# Get Containers

## Get Currently active containers

```bash
$ docker ps
```

Output:

```
CONTAINER ID   IMAGE               COMMAND                  CREATED       STATUS       PORTS                      NAMES
a858b409c835   docker-init-build   "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:3000->3000/tcp     appFrontEnd
3c99585f5f6b   mongo:latest        "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:27017->27017/tcp   mongodb

```

## Get all containers

The important difference here is the `-a` flag

```bash
$ docker ps -a
```

Output:

```bash
CONTAINER ID   IMAGE                             COMMAND                  CREATED        STATUS                    PORTS                      NAMES
a858b409c835   docker-init-build                 "docker-entrypoint.s…"   2 hours ago    Up 2 hours                0.0.0.0:3000->3000/tcp     appFrontEnd
3c99585f5f6b   mongo:latest                      "docker-entrypoint.s…"   2 hours ago    Up 2 hours                0.0.0.0:27017->27017/tcp   mongodb
87e47c5d4ea8   qcri-dashboard-image-production   "docker-entrypoint.s…"   44 hours ago   Exited (0) 41 hours ago                              dashboard_app_1
```

## Start Containers from Docker-Compose

```bash
$ docker-compose up --build --force-recreate
```

Force-recrteate forces all containers to be built again

## Enter Mongo Shell in Docker Container

Use the container ID

```bash
$ docker exec -it CONTAINER_ID /bin/sh
```

OR

```bash
$ docker exec -it CONTAINER_NAME /bin/sh
```
