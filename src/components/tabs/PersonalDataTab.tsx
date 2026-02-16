import { Card, CardContent } from "@/components/ui/card";
import { AccessIndicator } from "@/components/RoleBadge";
import { mockEmployee } from "@/data/mockData";
import { User, Phone, MapPin, Building, Briefcase, Calendar, AlertTriangle, Heart } from "lucide-react";

function calculateAge(dob: string): number {
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value?: string | number }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 py-2">
      <Icon className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

export default function PersonalDataTab() {
  const emp = mockEmployee;
  const age = calculateAge(emp.date_of_birth);

  return (
    <div className="space-y-6">
      <AccessIndicator roles={["hr", "doctor", "manager"]} label="Visible to" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Identity */}
        <Card>
          <CardContent className="pt-6 space-y-1">
            <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <User className="h-4 w-4" /> Identity
            </h3>
            <InfoRow icon={User} label="Employee ID" value={emp.payroll_number} />
            <InfoRow icon={User} label="Full Name" value={`${emp.first_name} ${emp.last_name}`} />
            <InfoRow icon={Calendar} label="Date of Birth" value={`${emp.date_of_birth} (${age} yrs)`} />
            <InfoRow icon={User} label="Sex" value={emp.sex} />
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardContent className="pt-6 space-y-1">
            <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <Phone className="h-4 w-4" /> Contact
            </h3>
            <InfoRow icon={Phone} label="Phone" value={emp.phone} />
            <InfoRow icon={MapPin} label="Address" value={emp.address} />
            <InfoRow icon={MapPin} label="City" value={emp.city} />
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardContent className="pt-6 space-y-1">
            <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Emergency Contact
            </h3>
            <InfoRow icon={User} label="Name" value={emp.emergency_contact_name} />
            <InfoRow icon={User} label="Relationship" value={emp.emergency_contact_relationship} />
            <InfoRow icon={Phone} label="Phone" value={emp.emergency_contact_phone} />
          </CardContent>
        </Card>

        {/* Work Info */}
        <Card>
          <CardContent className="pt-6 space-y-1">
            <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Work Information
            </h3>
            <InfoRow icon={Building} label="Company / Site" value={`${emp.company}${emp.site ? ` – ${emp.site}` : ""}`} />
            <InfoRow icon={Briefcase} label="Department" value={emp.department} />
            <InfoRow icon={Briefcase} label="Job Title" value={emp.job_title} />
            <InfoRow icon={Calendar} label="Hire Date" value={emp.hire_date} />
            <InfoRow icon={Briefcase} label="Contract Type" value={emp.contract_type} />
            <InfoRow icon={Heart} label="Medical Frequency" value={`Every ${emp.medical_frequency} months`} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
