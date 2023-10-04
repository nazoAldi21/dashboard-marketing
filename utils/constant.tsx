import { StaticImageData } from "next/image";
import home from "../assets/images/home.png";
import logout from "../assets/images/logout.png";
import notifications from "../assets/images/notifications.png";
import reports from "../assets/images/reports.png";
import settings from "../assets/images/settings.png";

interface SidebarLink {
  title: string;
  url: string;
  icon: string | StaticImageData;
}

export const TitleDashboard = "Marketing Dashboard";

export const sidebarLinks: SidebarLink[] = [
  {
    title: "Home",
    url: "/",
    icon: home,
  },
  {
    title: "Report",
    url: "/report",
    icon: reports,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: notifications,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: settings,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: logout,
  },
];
