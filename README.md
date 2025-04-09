# HR System with Next.js and Prisma

This is a Human Resources management system built with Next.js, React, and Prisma ORM.

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL
- npm or yarn

## Database Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```env
DATABASE_URL="postgresql://hr-db:cbmedia12345@localhost:5432/hr_system?schema=public"
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

### 3. Initialize the Database

```bash
# Create and apply database migrations
npx prisma migrate dev

# Seed the database with initial data
npx prisma db seed
```

## Working with Prisma

### Database Schema

The system uses two main models:

1. **Employee**
   - Basic info: name, position, hire date, status, salary
   - Relations: department, manager, subordinates
   - Timestamps: createdAt, updatedAt

2. **Department**
   - Basic info: name, description
   - Relations: employees
   - Timestamps: createdAt, updatedAt

### Common Prisma Commands

```bash
# Generate Prisma Client
npx prisma generate

# Create a new migration
npx prisma migrate dev --name <migration_name>

# Reset the database (warning: deletes all data)
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```

### API Documentation

The API documentation is available through Swagger UI at:
```
http://localhost:3000/api-docs
```

This interactive documentation provides:
- Detailed API endpoint descriptions
- Request/response schemas
- Example requests
- Try-it-out functionality

### API Endpoints

The system provides the following API endpoints:

- `GET /api/employees` - Get all employees with their relations
- `POST /api/employees` - Create a new employee

For detailed API documentation, please visit the Swagger UI at `/api-docs`.

### Example Queries

```typescript
// Get all employees with their relations
const employees = await prisma.employee.findMany({
  include: {
    manager: true,
    subordinates: true,
    department: true,
  },
});

// Create a new employee
const newEmployee = await prisma.employee.create({
  data: {
    name: "John Doe",
    position: "Developer",
    departmentId: 1,
    hire_date: new Date(),
    status: "Active",
    salary: 50000,
  },
  include: {
    manager: true,
    department: true,
  },
});
```

## Development

1. Start the development server:
```bash
npm run dev
```

2. The application will be available at:
   - Main application: `http://localhost:3000`
   - API Documentation: `http://localhost:3000/api-docs`

## Database Management

### Using Prisma Studio

To view and manage your database through a GUI:

```bash
npx prisma studio
```

This will open a web interface at `http://localhost:5555` where you can:
- View all tables and their data
- Create, update, and delete records
- View relationships between tables

### Adding New Data

You can add new data in two ways:

1. Through the application's UI
2. By modifying the seed file (`prisma/seed.ts`) and running:
```bash
npx prisma db seed
```

## Troubleshooting

If you encounter any issues:

1. Check if PostgreSQL is running
2. Verify your database credentials in `.env`
3. Try resetting the database:
```bash
npx prisma migrate reset
```

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Swagger Documentation](https://swagger.io/docs/) 