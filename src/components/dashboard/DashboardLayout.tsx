import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../lib/utils';
import { 
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  ShieldAlert,
  Target,
  MessageSquare,
  Menu
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NotificationPopover } from './NotificationPopover';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeMenu?: string;
  rightPanel?: React.ReactNode;
}

export function DashboardLayout({ children, activeMenu = 'dashboard', rightPanel }: DashboardLayoutProps) {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const getMenuItems = () => {
    return [
      { id: 'dashboard', label: 'Clinical Overview', icon: LayoutDashboard, path: '/dashboard/cro', section: 'Overview', badge: 'Live', badgeColor: 'green' },
      { id: 'triage', label: 'Triage Inbox', icon: ShieldAlert, path: '/dashboard/cro/triage', section: 'Overview', badge: '3' },
      
      { id: 'patients', label: 'Medical Census', icon: Users, path: '/dashboard/cro/patients', section: 'Medical Records' },
      { id: 'schedule', label: 'Schedule', icon: Calendar, path: '/dashboard/cro/schedule', section: 'Medical Records' },
      { id: 'documents', label: 'Documents', icon: FileText, path: '/dashboard/cro/documents', section: 'Medical Records' },
      
      { id: 'risk', label: 'Risk Sentinel', icon: ShieldAlert, path: '/dashboard/cro/risk', section: 'Clinical Ops', badge: '2' },
      { id: 'leads', label: 'Leads Desk', icon: Target, path: '/dashboard/cro/leads', section: 'Clinical Ops' },
      
      { id: 'queue', label: 'Support Queue', icon: MessageSquare, path: '/dashboard/cro/inbox', section: 'Sakhi AI', badge: '5', badgeColor: 'yellow' },
    ];
  };

  const menuItems = getMenuItems();
  const sections = ['Overview', 'Medical Records', 'Clinical Ops', 'Sakhi AI'];

  // Map active menu id to path/title
  const activeItem = menuItems.find(item => item.id === activeMenu) || menuItems[0];

  const SidebarContent = () => (
    <div className="flex flex-col h-full w-full">
      {/* Sidebar Header Logo */}
      <div className="sidebar-logo">
        <div 
          className="logo-mark cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <div className="logo-icon text-white">DFO</div>
          <div className="logo-text">
            <div className="app-name">DFO Platform</div>
            <div className="clinic-name">Janmasethu IVF</div>
          </div>
        </div>
      </div>

      {/* Role Connection Status Badge */}
      <div className="sidebar-role-badge">
        <div className="role-dot" />
        <span className="role-badge-text uppercase">
          CRO — {profile?.full_name || 'Dr. Priya Sharma'}
        </span>
      </div>

      {/* Navigation Items */}
      <nav className="sidebar-nav custom-scrollbar-dark">
        {sections.map((sectionName) => (
          <div key={sectionName} className="mb-4">
            <div className="nav-section-label">{sectionName}</div>
            {menuItems.filter(item => item.section === sectionName).map((item) => (
              <button
                key={item.id}
                onClick={() => item.path !== '#' && navigate(item.path)}
                className={cn(
                  "nav-item",
                  activeMenu === item.id && "active"
                )}
              >
                <div className="nav-icon">
                  <item.icon className="w-[18px] h-[18px] text-white/70" />
                </div>
                <span className="nav-label">{item.label}</span>
                {item.badge && (
                  <span className={cn(
                    "nav-badge",
                    item.badgeColor === 'green' && "green",
                    item.badgeColor === 'yellow' && "yellow"
                  )}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Sidebar Footer User Info */}
      <div className="sidebar-footer">
        <div className="sidebar-user" onClick={() => signOut()}>
          <div className="user-avatar text-white">
            {profile?.full_name?.substring(0, 2).toUpperCase() || 'PS'}
          </div>
          <div className="user-info">
            <div className="user-name">{profile?.full_name || 'Dr. Priya Sharma'}</div>
            <div className="user-role">CRO · Admin</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-[#F0F4F8] flex overflow-hidden font-sans selection:bg-[#E8F8FB]">
      {/* 1. DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-shrink-0 z-40 relative sidebar">
        <SidebarContent />
      </aside>

      {/* 2. MOBILE SIDEBAR OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.aside 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 left-0 w-[256px] overflow-hidden shadow-2xl sidebar"
            >
              <SidebarContent />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* 3. MAIN AREA */}
      <div className="main-area">
        {/* TOPBAR */}
        <header className="topbar">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors mr-2 border border-slate-200"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Breadcrumb style navigation */}
          <div className="topbar-breadcrumb">
            <span className="breadcrumb-module">{activeItem.label}</span>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-page tracking-wider text-xs font-semibold">
              CRO Hub Dashboard
            </span>
          </div>

          {/* Topbar Actions */}
          <div className="topbar-actions">
            {/* Live Sync Badge */}
            <div className="sync-indicator">
              <span className="sync-dot"></span>
              <span>Live sync</span>
            </div>

            <NotificationPopover />

            {/* Avatar Pill */}
            <div className="topbar-avatar" onClick={() => signOut()}>
              {profile?.full_name?.substring(0, 2).toUpperCase() || 'PS'}
            </div>
          </div>
        </header>

        {/* CONTENT CANVAS */}
        <div className="flex-1 flex overflow-hidden">
          <main className="content custom-scrollbar bg-[#F0F4F8] p-0">
            {children}
          </main>
          
          {rightPanel && (
            <aside className="hidden xl:flex w-80 flex-shrink-0 bg-white border-l border-[#E2E8F0] flex-col overflow-y-auto custom-scrollbar">
              {rightPanel}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
