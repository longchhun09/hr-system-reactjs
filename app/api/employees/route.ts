import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET /api/employees
export async function GET() {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        manager: true,
        subordinates: true,
        department: true,
      },
    });
    return NextResponse.json(employees);
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    return NextResponse.json(
      { error: 'Failed to fetch employees' },
      { status: 500 }
    );
  }
}

// POST /api/employees
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const employee = await prisma.employee.create({
      data: {
        name: body.name,
        position: body.position,
        departmentId: body.departmentId,
        hire_date: new Date(body.hire_date),
        status: body.status,
        managerId: body.managerId,
        salary: parseFloat(body.salary),
      },
      include: {
        manager: true,
        department: true,
      },
    });
    return NextResponse.json(employee);
  } catch (error) {
    console.error('Failed to create employee:', error);
    return NextResponse.json(
      { error: 'Failed to create employee' },
      { status: 500 }
    );
  }
} 