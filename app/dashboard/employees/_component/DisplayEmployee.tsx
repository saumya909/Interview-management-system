// app/users/page.tsx (or app/users/page.js if you're using JavaScript)
import prisma from '@/lib/db';

// Initialize Prisma Client
//const prisma = new PrismaClient();

// This is a Server Component that fetches data on the server-side
async function EmployeeList() {
  // Fetch users from the SQLite database using Prisma
  const employees = await prisma.employees.findMany();
  console.log(employees);
  // Return JSX to render the users
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {employees.map((employees) => (
          <li key={employees.id}>{employees.name} ({employees.tech_stack})</li>
        ))}
      </ul>
    </div>
  );
}

// Export as default to be used in the page
export default EmployeeList;