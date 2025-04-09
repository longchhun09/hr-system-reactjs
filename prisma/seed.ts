import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create departments
  const departments = await Promise.all([
    prisma.department.create({
      data: {
        name: 'Engineering',
        description: 'Software development and technical operations',
      },
    }),
    prisma.department.create({
      data: {
        name: 'HR',
        description: 'Human Resources management',
      },
    }),
    prisma.department.create({
      data: {
        name: 'Sales',
        description: 'Sales and business development',
      },
    }),
  ]);

  // Create employees
  const [cto] = await Promise.all([
    prisma.employee.create({
      data: {
        name: 'John Smith',
        position: 'CTO',
        departmentId: departments[0].id,
        hire_date: new Date('2020-01-01'),
        status: 'Active',
        salary: 150000,
      },
    }),
  ]);

  await Promise.all([
    prisma.employee.create({
      data: {
        name: 'Alice Johnson',
        position: 'Senior Engineer',
        departmentId: departments[0].id,
        hire_date: new Date('2021-03-15'),
        status: 'Active',
        managerId: cto.id,
        salary: 120000,
      },
    }),
    prisma.employee.create({
      data: {
        name: 'Bob Wilson',
        position: 'HR Manager',
        departmentId: departments[1].id,
        hire_date: new Date('2021-02-01'),
        status: 'Active',
        salary: 90000,
      },
    }),
    prisma.employee.create({
      data: {
        name: 'Carol Martinez',
        position: 'Sales Director',
        departmentId: departments[2].id,
        hire_date: new Date('2021-01-15'),
        status: 'Active',
        salary: 110000,
      },
    }),
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 