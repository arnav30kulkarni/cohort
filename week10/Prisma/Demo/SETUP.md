# Prisma Demo - User & Todo Management

A TypeScript project demonstrating Prisma ORM usage with PostgreSQL for managing users and todos.

## Project Structure

```
Demo/
├── prisma/
│   ├── schema.prisma      # Database schema definitions
│   └── migrations/        # Database migrations
├── src/
│   ├── server.ts         # Main application with user/todo operations
│   └── generated/prisma/ # Auto-generated Prisma client (DO NOT EDIT)
├── dist/                 # Compiled JavaScript output
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── .gitignore
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/todoapp"
```

### 3. Run Prisma Migrations
```bash
npx prisma migrate dev --name init
```

### 4. Generate Prisma Client
```bash
npx prisma generate
```

## Available Functions

### `createUser()`
Creates a new user in the database.
```typescript
await createUser("user@example.com", "password123", "John", "Doe");
```

### `updateuser()`
Updates an existing user's information.
```typescript
await updateuser("user@example.com", { firstname: "Jane", lastname: "Smith" });
```

### `getUser()`
Retrieves a user by email.
```typescript
const user = await getUser("user@example.com");
```

## Database Models

### User Model
- `id` (Int): Primary key, auto-incremented
- `email` (String): Unique email address
- `firstname` (String, optional): User's first name
- `lastname` (String, optional): User's last name
- `password` (String): Hashed password

### Todo Model
- `id` (Int): Primary key, auto-incremented
- `title` (String): Todo title
- `completed` (Boolean): Completion status (default: false)
- `description` (String, optional): Todo description
- `userId` (Int): Foreign key referencing user

## Build & Run

### Compile TypeScript
```bash
tsc -b
```

### Run the Application
```bash
node dist/server.js
```

## Useful Prisma Commands

- **View database in Studio**: `npx prisma studio`
- **Create migration**: `npx prisma migrate dev --name <migration_name>`
- **Reset database**: `npx prisma migrate reset`
- **Generate client**: `npx prisma generate`

## Technologies Used

- **TypeScript**: Type-safe JavaScript
- **Prisma**: ORM for database management
- **PostgreSQL**: Relational database
- **Node.js**: Runtime environment

## Development Notes

- The Prisma client is auto-generated in `src/generated/prisma/` and should not be edited manually
- Always run `npx prisma generate` after schema changes
- Use `.env` for database credentials (never commit this file)
- Remember to call `prisma.$disconnect()` when done with database operations

## License

ISC
