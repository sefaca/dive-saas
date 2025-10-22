import { Link, useLocation } from "react-router-dom";
import { Building2, Calendar, GraduationCap, LogOut, SquareTerminal, Trophy, UserCheck, Users, Zap, Bell, CreditCard, BookOpen, ClipboardCheck, MapPin, Phone, Settings, Waves, Ship } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import UserMenu from "@/components/UserMenu";
import { useAuth } from "@/contexts/AuthContext";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";
import { useTranslation } from "react-i18next";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";
import { useClub } from "@/hooks/useClub";
const AppSidebar = () => {
  const authContext = useAuth();
  const { data: waitlistCount = 0 } = useWaitlistCount();
  const { t } = useTranslation();
  const { leagues: leaguesEnabled, matches: matchesEnabled } = useFeatureFlags();
  const location = useLocation();

  // Provide safe defaults if auth context is not available
  const {
    isAdmin = false,
    isTrainer = false,
    isPlayer = false,
    isGuardian = false,
    profile
  } = authContext || {};

  // Fetch club data for players
  const { data: club } = useClub(profile?.club_id);

  // Si es trainer, mostrar panel personalizado con clases programadas
  if (isTrainer) {
    return <Sidebar variant="inset" className="w-64">
        <SidebarHeader className="flex items-center justify-center py-3">
          <Link to="/" className="flex items-center justify-center gap-2">
            <Waves className="h-10 w-10 text-ocean-tropical" />
            <span className="text-2xl font-bold text-sidebar-foreground">
              Dive<span className="text-ocean-tropical">SaaS</span>
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/dashboard"}>
                <Link to="/dashboard">
                  <GraduationCap />
                  <span>{t('sidebar.dashboard')}</span>
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/dashboard/students"}>
                <Link to="/dashboard/students">
                  <Users />
                  <span>Students</span>
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/dashboard/scheduled-classes"}>
                <Link to="/dashboard/scheduled-classes">
                  <Calendar />
                  <span>Scheduled Dive Sessions</span>
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/dashboard/today-attendance"}>
                <Link to="/dashboard/today-attendance">
                  <ClipboardCheck />
                  <span>Today's Attendance</span>
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-0">
          {/* Información del Club */}
          {club && (
            <div className="border-t border-sidebar-border p-3">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-sm">{club.name}</span>
              </div>
            </div>
          )}
          <UserMenu />
        </SidebarFooter>
      </Sidebar>;
  }

  // Si es jugador o guardian, mostrar panel personalizado sin profesores
  if (isPlayer || isGuardian) {
    const playerNavItems = [
      {
        title: t('sidebar.dashboard'),
        url: "/dashboard",
        icon: SquareTerminal,
        isActive: true
      },
      {
        title: "My Bookings",
        url: "/dashboard/my-classes",
        icon: BookOpen
      },
      ...(isGuardian ? [{
        title: "My Children",
        url: "/dashboard/my-children",
        icon: Users
      }] : []),
      ...(leaguesEnabled ? [{
        title: t('sidebar.leagues'),
        url: "/dashboard/leagues",
        icon: Trophy
      }] : [])
    ];
    return <Sidebar variant="inset" className="w-64">
        <SidebarHeader className="flex items-center justify-center py-3">
          <Link to="/" className="flex items-center justify-center gap-2">
            <Waves className="h-10 w-10 text-ocean-tropical" />
            <span className="text-2xl font-bold text-sidebar-foreground">
              Dive<span className="text-ocean-tropical">SaaS</span>
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {playerNavItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-0">
          {/* Información del Club */}
          {club && (
            <div className="border-t border-sidebar-border p-3">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-sm">{club.name}</span>
              </div>
            </div>
          )}
          <UserMenu />
        </SidebarFooter>
      </Sidebar>;
  }

  // Panel para administradores con feature flags
  const data = {
    navMain: [
      {
        title: t('sidebar.dashboard'),
        url: "/dashboard",
        icon: SquareTerminal,
        isActive: true
      },
      ...(leaguesEnabled ? [{
        title: t('sidebar.leagues'),
        url: "/dashboard/leagues",
        icon: Trophy
      }] : []),
      ...(matchesEnabled ? [{
        title: t('sidebar.matches'),
        url: "/dashboard/matches",
        icon: Zap
      }] : []),
      {
        title: "Dive Sessions",
        url: "/dashboard/scheduled-classes",
        icon: Ship
      },
      {
        title: "Today's Attendance",
        url: "/dashboard/today-attendance",
        icon: ClipboardCheck
      },
      {
        title: "Payment Control",
        url: "/dashboard/payment-control",
        icon: CreditCard
      },
      {
        title: "Divers",
        url: "/dashboard/players",
        icon: Users
      },
      {
        title: "Instructors",
        url: "/dashboard/trainers",
        icon: UserCheck
      },
      {
        title: "Dive Centers",
        url: "/dashboard/clubs",
        icon: Building2
      }
    ]
  };
  return <Sidebar variant="inset" className="w-64">
      <SidebarHeader className="flex items-center justify-center py-3">
        <Link to="/" className="flex items-center justify-center gap-2">
          <Waves className="h-10 w-10 text-ocean-tropical" />
          <span className="text-2xl font-bold text-sidebar-foreground">
            Dive<span className="text-ocean-tropical">SaaS</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map(item => <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                  <Link to={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>)}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <UserMenu />
      </SidebarFooter>
    </Sidebar>;
};
export default AppSidebar;
