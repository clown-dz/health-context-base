import { Badge } from "@/components/ui/badge";

type StatusVariant = "success" | "warning" | "destructive" | "info" | "muted";

interface StatusBadgeProps {
  status: string;
  variant?: StatusVariant;
}

const variantClasses: Record<StatusVariant, string> = {
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  info: "bg-info text-info-foreground",
  muted: "bg-muted text-muted-foreground",
};

export function StatusBadge({ status, variant = "muted" }: StatusBadgeProps) {
  return (
    <Badge className={`${variantClasses[variant]} text-xs font-medium capitalize`}>
      {status.replace(/_/g, " ")}
    </Badge>
  );
}

export function getAppointmentStatusVariant(status: string): StatusVariant {
  switch (status) {
    case "completed": return "success";
    case "scheduled": return "info";
    case "missed": return "destructive";
    case "to_schedule": return "warning";
    default: return "muted";
  }
}

export function getLabStatusVariant(status: string): StatusVariant {
  switch (status) {
    case "reviewed": return "success";
    case "results_received": return "info";
    case "collected": return "warning";
    case "requested": return "muted";
    default: return "muted";
  }
}
