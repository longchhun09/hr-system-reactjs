export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  hire_date: string;
  status: 'Active' | 'On Leave' | 'Probation';
  manager: number | null;
  salary: number;
} 