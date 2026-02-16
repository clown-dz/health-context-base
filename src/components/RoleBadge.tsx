import { Badge } from "@/components/ui/badge";
import type { UserRole } from "@/types/employee";

interface RoleBadgeProps {
  role: UserRole;
}

const roleConfig: Record<UserRole, { label: string; className: string }> = {
  doctor: { label: "Doctor", className: "bg-role-doctor text-primary-foreground" },
  hr: { label: "HR", className: "bg-role-hr text-primary-foreground" },
  manager: { label: "Manager", className: "bg-role-manager text-warning-foreground" },
};

export function RoleBadge({ role }: RoleBadgeProps) {
  const config = roleConfig[role];
  return (
    <Badge className={`${config.className} text-xs font-medium`}>
      {config.label}
    </Badge>
  );
}

interface AccessIndicatorProps {
  roles: UserRole[];
  label?: string;
}

export function AccessIndicator({ roles, label }: AccessIndicatorProps) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {label && <span>{label}:</span>}
      {roles.map((role) => (
        <RoleBadge key={role} role={role} />
      ))}
    </div>
  );
}
