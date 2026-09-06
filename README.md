# Digital Business Card

A backend application for a digital business card built with NestJS, GraphQL, Prisma and PostgreSQL.

The application provides information about a developer's profile, including skills, work experience and projects.

## Tech Stack

* **Node.js**
* **TypeScript**
* **NestJS**
* **GraphQL**
* **Apollo Server**
* **Prisma**
* **PostgreSQL**
* **Docker / Docker Compose**

## Features

* Developer profile
* Skills
* Work experience
* Projects
* GraphQL API
* PostgreSQL database
* Prisma migrations
* Automatic initial data initialization

## Getting Started

### Run with Docker

```bash
docker compose up --build
```

Docker Compose will start the application, apply database migrations and initialize the database with initial profile data.

## GraphQL API

Once the application is running, open Apollo Sandbox:

```text
http://localhost:3000/graphql
```

Example query:

```graphql
query {
  profile {
    name
    description
    github
    skills {
      name
    }
    experience {
      company
      position
    }
    projects {
      name
      url
    }
  }
}
```

## Architecture

```text
Apollo Sandbox
      ↓
GraphQL Resolver
      ↓
Service
      ↓
Prisma
      ↓
PostgreSQL
```
