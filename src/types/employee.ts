export type UserRole = "doctor" | "hr" | "manager";

export interface Employee {
  id: string;
  payroll_number: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  sex: "male" | "female";
  phone?: string;
  address?: string;
  city?: string;
  emergency_contact_name?: string;
  emergency_contact_relationship?: string;
  emergency_contact_phone?: string;
  company: string;
  site?: string;
  department: string;
  job_title: string;
  hire_date: string;
  contract_type?: string;
  medical_frequency: 6 | 12;
  status: "active" | "inactive";
}

export type DocVisibility = "doctor_only" | "hr_viewable";
export type DocType = "fitness_certificate" | "sick_leave" | "return_to_work" | "lab_result" | "imaging" | "external_report" | "other";

export interface EmployeeDocument {
  id: string;
  doc_type: DocType;
  title: string;
  file_name: string;
  date: string;
  related_visit_id?: string;
  visibility_level: DocVisibility;
  uploaded_by: string;
  uploaded_at: string;
}

export type AppointmentType = "periodic" | "new_recruit" | "post_change" | "manual";
export type AppointmentStatus = "to_schedule" | "scheduled" | "completed" | "missed";
export type AttendanceStatus = "present" | "absent";
export type CompletionStatus = "on_time" | "late";

export interface Appointment {
  id: string;
  type: AppointmentType;
  scheduled_at?: string;
  status: AppointmentStatus;
  attendance?: AttendanceStatus;
  due_date: string;
  completion_status?: CompletionStatus;
  campaign_id?: string;
  campaign_name?: string;
}

export type LabOrderStatus = "requested" | "collected" | "results_received" | "reviewed";

export interface LabOrder {
  id: string;
  order_date: string;
  tests_requested: string[];
  priority: "routine" | "urgent";
  notes?: string;
  status: LabOrderStatus;
  linked_visit_id?: string;
  result?: {
    file_name?: string;
    received_date: string;
    interpretation?: string;
  };
}

export interface Prescription {
  id: string;
  medication_name: string;
  dose: string;
  duration: string;
  instructions?: string;
  prescribed_date: string;
  linked_visit_id?: string;
}

export interface VitalRecord {
  id: string;
  measured_at: string;
  measured_by: string;
  linked_visit_id?: string;
  values: {
    bp_systolic?: number;
    bp_diastolic?: number;
    heart_rate?: number;
    weight?: number;
    height?: number;
    bmi?: number;
    temperature?: number;
    spo2?: number;
    glucose?: number;
  };
}
