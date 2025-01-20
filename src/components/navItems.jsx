import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
  } from "lucide-react";
  
  const navItems = [
    { text: "Dashboard", icon: <LayoutDashboard />, active: true, alert: false },
    { text: "Orders", icon: <Receipt />, active: false, alert: false },
    { text: "Products", icon: <Boxes />, active: false, alert: false },
    { text: "Packages", icon: <Package />, active: false, alert: false },
    { text: "Customers", icon: <UserCircle />, active: false, alert: false },
    { text: "Analytics", icon: <BarChart3 />, active: false, alert: false },
    { text: "Support", icon: <LifeBuoy />, active: false, alert: false },
    { text: "Settings", icon: <Settings />, active: false, alert: false },
  ];
  
  export default navItems;
  