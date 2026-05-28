export enum AppointmentStatus {
  Pending = 'pending',
  InProgress = 'in_progress',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

export interface Appointment {
  id: string;
  vehicleId: string;
  serviceId: string;
  scheduledAt: string;
  status: AppointmentStatus;
  notes?: string;
  totalPrice: number;
  estimatedDurationMinutes: number;
  createdAt: string;
}
