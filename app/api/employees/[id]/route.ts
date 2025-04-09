import { NextResponse } from 'next/server';
import data from '@/app/api/employees/data.json';

// GET /api/employees/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const employee = data.find(emp => emp.id === parseInt(params.id));
  
  if (!employee) {
    return NextResponse.json(
      { error: 'Employee not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(employee);
}

// PUT /api/employees/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updatedEmployee = await request.json();
    const index = data.findIndex(emp => emp.id === parseInt(params.id));
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404 }
      );
    }
    
    // Validate required fields
    if (!updatedEmployee.name || !updatedEmployee.position || !updatedEmployee.department || 
        !updatedEmployee.hire_date || !updatedEmployee.status || !updatedEmployee.salary) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would update the database
    // For mock purposes, we'll just return the updated employee
    return NextResponse.json(updatedEmployee);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

// DELETE /api/employees/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = data.findIndex(emp => emp.id === parseInt(params.id));
  
  if (index === -1) {
    return NextResponse.json(
      { error: 'Employee not found' },
      { status: 404 }
    );
  }
  
  // In a real implementation, you would delete from the database
  // For mock purposes, we'll just return success
  return new NextResponse(null, { status: 204 });
} 