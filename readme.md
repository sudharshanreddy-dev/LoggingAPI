# `AI Safety Incident Log API`

This project provides a backend service for logging and managing AI safety incidents. The service allows users to log incidents with details such as title, description, severity, and timestamp, and supports basic CRUD operations.

---

## `Features`

- Log new incident
- Retrieve all incidents
- Retrieve a particular incident
- Delete a particular incident

---

## `Tech Stack`

- Node.js
- Express.js (Web Framework)
- TypeScript
- Prisma (ORM for PostgreSQL)
- PostgreSQL (Database)
- Zod (Schema validation)
- CORS (Cross-Origin Resource Sharing)

---

# `Setup Instructions`

1. **Clone the repository**

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Environment Configuration**

- Create a `.env` file by copying the `.env.example` which is provided.
- Edit the `.env` file to set up your environment variables. Example:
    ```bash
    DATABASE_URL=postgresql://username:password@localhost:5432/incidents
    ```
- Replace `username` and `password` with your actual PostgreSQL credentials.

4. **Set up the Database**

- Ensure that your PostgreSQL database is running. Then, run:
    ```bash
    npx prisma migrate dev
    ```
- This will set up your database schema as defined in the Prisma schema.
- To inspect the database visually:
    ```bash
    npx prisma studio
    ```

5. **Build the Project**

- Before starting the server, you need to compile the TypeScript files:
    ```bash
    npm run build
    ```
- This will create a `dist/` directory with the compiled JavaScript code.

6. **Seed the Database (Optional)**

- To pre-populate the database with some sample incidents:
    ```bash
    npm run seed
    ```

7. **Start the Server**

- After building the project, start the server:
    ```bash
    npm start
    ```
- The server will be running at:  
  [http://localhost:5000](http://localhost:5000)

---

# 📖 API Endpoints

---

## 1. `GET /incidents`

**Description:**  
Retrieve all incidents.

**Response:**  
A JSON array containing all incidents.

**Example Response:**

```json
[
  {
    "id": "1",
    "title": "AI Model Fails in Critical Task",
    "description": "The AI model failed to recognize critical patterns in the input data, causing a potential safety issue.",
    "severity": "High",
    "reported_at": "2025-04-02T18:00:00Z"
  }
]
```

---

## 2. `POST /incidents`

**Description:**  
Log a new incident.

**Request Body:**

```json
{
  "title": "New Incident Title",
  "description": "Detailed description here.",
  "severity": "Medium"
}
```

**Response:**  
The newly created incident, including its `id` and `reported_at`.

**Example Response:**

```json
{
  "id": "14nfbnjkfdbn340",
  "title": "New Incident Title",
  "description": "Detailed description here.",
  "severity": "Medium",
  "reported_at": "2025-04-02T18:00:00Z"
}
```

---

## 3. `GET /incidents/{id}`

**Description:**  
Retrieve a specific incident by its `id`.

**Path Parameter:**
- `id` (UUID of the incident)

**Response:**  
A JSON object representing the incident.

**Example Response:**

```json
{
  "id": "14nfbnjkfdbn340",
  "title": "AI Model Fails in Critical Task",
  "description": "The AI model failed to recognize critical patterns in the input data, causing a potential safety issue.",
  "severity": "High",
  "reported_at": "2025-04-02T18:00:00Z"
}
```

---

## 4. `DELETE /incidents/{id}`

**Description:**  
Delete the incident with the specified `id`.

**Path Parameter:**
- `id` (UUID of the incident)

**Response:**  
A confirmation message with the deleted incident details.

**Example Response:**

```json
{
  "message": "Incident deleted successfully",
  "data": {
    "id": "1",
    "title": "AI Model Fails in Critical Task",
    "description": "The AI model failed to recognize critical patterns in the input data, causing a potential safety issue.",
    "severity": "High",
    "reported_at": "2025-04-02T18:00:00Z"
  }
}
```

---

# ❗ Error Handling

- **400 Bad Request**: Invalid input or missing required fields.
- **404 Not Found**: Incident not found.
- **500 Internal Server Error**: Unexpected error on the server.

---

# 🛠️ Notes

- **Database URL**:  
  The `DATABASE_URL` environment variable is required for connecting to PostgreSQL.

- **Seeding**:  
  The `npm run seed` command will populate the database with a few sample incidents for testing purposes.
