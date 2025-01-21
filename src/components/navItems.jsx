import { LayoutDashboard, LifeBuoy, UserPlus, Database } from "lucide-react";

const navItems = [
  { text: "Dashboard", icon: <LayoutDashboard />, active: true, alert: false },
  { text: "User create", icon: <UserPlus />, active: false, alert: false },
  { text: "Device create", icon: <Database />, active: false, alert: false },
  { text: "Tank list", icon: <Database />, active: false, alert: false },
  { text: "Help", icon: <LifeBuoy />, active: false, alert: false },
];

export default navItems;
