import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { getDashboardMetrics, type DashboardMetrics } from '../../lib/dashboardService';
import { motion } from 'framer-motion';

export function ClinicalOverview() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getDashboardMetrics();
        setMetrics(data);
      } catch (err) {
        console.error("Dashboard data load failed:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout activeMenu="dashboard">
        <div className="flex-1 flex items-center justify-center h-[calc(100vh-200px)]">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
             className="w-10 h-10 border-4 border-[#0A4D68] border-t-transparent rounded-full"
           />
        </div>
      </DashboardLayout>
    );
  }

  // Use dynamic metric values if present, else use high-fidelity mock defaults matching the screenshots
  const totalPatients = metrics?.totalPatients ?? 284;
  const criticalRiskCount = metrics?.criticalRiskCount ?? 8;
  const slaCompliance = metrics?.slaComplianceRate ?? 94;

  return (
    <DashboardLayout activeMenu="dashboard">
      <div className="p-6 max-w-[1600px] mx-auto fade-in">
        
        {/* Page Header */}
        <div className="page-header mb-6">
          <div>
            <div className="section-title">Clinical Overview</div>
            <div className="section-sub">Real-time metrics — Today, Friday 22 May 2026</div>
          </div>
          <div className="page-actions">
            <button className="btn btn-secondary btn-sm">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" className="mr-1.5 inline-block"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export Report
            </button>
            <button className="btn btn-primary btn-sm">+ Add Patient</button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="kpi-grid mb-6">
          {/* Total Patient Census */}
          <div className="kpi-card teal">
            <div className="kpi-header">
              <div className="kpi-icon teal">
                <svg width="20" height="20" fill="none" stroke="var(--primary)" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span className="kpi-trend up">↑ 12%</span>
            </div>
            <div className="kpi-value">{totalPatients}</div>
            <div className="kpi-label text-xs mt-1">Total Patient Census</div>
            <div className="kpi-sub mt-2">↑ 34 new this week</div>
          </div>

          {/* Critical Risk Patients */}
          <div className="kpi-card red">
            <div className="kpi-header">
              <div className="kpi-icon red">
                <svg width="20" height="20" fill="none" stroke="var(--danger)" stroke-width="1.8" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <span className="kpi-trend down">↑ 2 new</span>
            </div>
            <div className="kpi-value" style={{ color: 'var(--danger)' }}>
              {criticalRiskCount}
              <span className="kpi-pulse"></span>
            </div>
            <div className="kpi-label text-xs mt-1">Critical Risk Patients</div>
            <div className="kpi-sub mt-2">Requires immediate attention</div>
          </div>

          {/* 7-Day Patient Inflow */}
          <div className="kpi-card amber">
            <div className="kpi-header">
              <div className="kpi-icon amber">
                <svg width="20" height="20" fill="none" stroke="var(--warning)" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <span className="kpi-trend up">↑ 8%</span>
            </div>
            <div className="kpi-value">127</div>
            <div className="kpi-label text-xs mt-1">7-Day Patient Inflow</div>
            <div className="sparkline-bar mt-2">
              <div className="spark-bar-item" style={{ height: '40%' }}></div>
              <div className="spark-bar-item" style={{ height: '60%' }}></div>
              <div className="spark-bar-item" style={{ height: '35%' }}></div>
              <div className="spark-bar-item" style={{ height: '75%' }}></div>
              <div className="spark-bar-item" style={{ height: '55%' }}></div>
              <div className="spark-bar-item" style={{ height: '85%' }}></div>
              <div className="spark-bar-item today" style={{ height: '100%' }}></div>
            </div>
          </div>

          {/* SLA Compliance Rate */}
          <div className="kpi-card green">
            <div className="kpi-header">
              <div className="kpi-icon green">
                <svg width="20" height="20" fill="none" stroke="var(--success)" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span className="kpi-trend up">+3.2%</span>
            </div>
            <div className="kpi-value" style={{ color: 'var(--success)' }}>{slaCompliance}%</div>
            <div className="kpi-label text-xs mt-1">SLA Compliance Rate</div>
            <div className="kpi-sub mt-2">Target: 95% · Current period</div>
          </div>
        </div>

        {/* CHARTS ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Risk Distribution Donut */}
          <div className="card lg:col-span-2">
            <div className="card-header flex items-center justify-between">
              <div>
                <div className="card-title">Risk Distribution</div>
                <div className="card-subtitle">Active patient triage status</div>
              </div>
              <button className="btn btn-secondary btn-xs">View All</button>
            </div>
            <div className="card-body">
              <div className="donut-wrapper flex items-center gap-6">
                <svg className="donut-svg" width="130" height="130" viewBox="0 0 130 130">
                  <circle cx="65" cy="65" r="50" fill="none" stroke="#FED7D7" stroke-width="18"/>
                  <circle cx="65" cy="65" r="50" fill="none" stroke="#38A169" stroke-width="18"
                    strokeDasharray="197 117" strokeDashoffset="79" strokeLinecap="round"/>
                  <circle cx="65" cy="65" r="50" fill="none" stroke="#F5A623" stroke-width="18"
                    strokeDasharray="84 230" strokeDashoffset="-118" strokeLinecap="round"/>
                  <circle cx="65" cy="65" r="50" fill="none" stroke="#E53E3E" stroke-width="18"
                    strokeDasharray="32 282" strokeDashoffset="-202" strokeLinecap="round"/>
                  <text x="65" y="61" textAnchor="middle" fontFamily="Sora" fontSize="20" fontWeight="700" fill="var(--text-1)">78</text>
                  <text x="65" y="77" textAnchor="middle" fontFamily="DM Sans" fontSize="10" fill="var(--text-3)">Active</text>
                </svg>
                <div className="donut-legend flex flex-col gap-2">
                  <div className="legend-item flex items-center gap-2">
                    <div className="legend-dot w-2.5 h-2.5 rounded-full" style={{ background: 'var(--danger)' }}></div>
                    <span className="legend-label text-xs font-medium text-[var(--text-2)]">Critical</span>
                    <span className="legend-count text-xs font-bold" style={{ color: 'var(--danger)' }}>8</span>
                  </div>
                  <div className="legend-item flex items-center gap-2">
                    <div className="legend-dot w-2.5 h-2.5 rounded-full" style={{ background: 'var(--warning)' }}></div>
                    <span className="legend-label text-xs font-medium text-[var(--text-2)]">Escalated</span>
                    <span className="legend-count text-xs font-bold" style={{ color: '#9A6B00' }}>21</span>
                  </div>
                  <div className="legend-item flex items-center gap-2">
                    <div className="legend-dot w-2.5 h-2.5 rounded-full" style={{ background: 'var(--success)' }}></div>
                    <span className="legend-label text-xs font-medium text-[var(--text-2)]">Standard</span>
                    <span className="legend-count text-xs font-bold" style={{ color: 'var(--success)' }}>49</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <div className="text-xs text-[var(--text-3)] font-semibold mb-3">7-Day Inflow Trend</div>
                <div className="bar-chart-mini flex items-end gap-3 h-[60px]">
                  <div className="bar-item flex-1 bg-[var(--primary-xlight)] hover:opacity-85 transition-opacity rounded-t h-[45%] relative"><span className="bar-label text-[9px] text-[var(--text-4)] absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Mon</span></div>
                  <div className="bar-item flex-1 bg-[var(--primary-xlight)] hover:opacity-85 transition-opacity rounded-t h-[60%] relative"><span className="bar-label text-[9px] text-[var(--text-4)] absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Tue</span></div>
                  <div className="bar-item flex-1 bg-[var(--primary-xlight)] hover:opacity-85 transition-opacity rounded-t h-[40%] relative"><span className="bar-label text-[9px] text-[var(--text-4)] absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Wed</span></div>
                  <div className="bar-item flex-1 bg-[var(--primary-xlight)] hover:opacity-85 transition-opacity rounded-t h-[80%] relative"><span className="bar-label text-[9px] text-[var(--text-4)] absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Thu</span></div>
                  <div className="bar-item flex-1 bg-[var(--primary-xlight)] hover:opacity-85 transition-opacity rounded-t h-[55%] relative"><span className="bar-label text-[9px] text-[var(--text-4)] absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Fri</span></div>
                  <div className="bar-item flex-1 bg-[var(--primary-light)] hover:opacity-85 transition-opacity rounded-t h-[90%] relative"><span className="bar-label text-[9px] text-[var(--text-4)] absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Sat</span></div>
                  <div className="bar-item flex-1 bg-[var(--primary)] hover:opacity-85 transition-opacity rounded-t h-[100%] relative"><span className="bar-label text-[9px] text-[var(--text-4)] absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Today</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Recent Activity</div>
                <div className="card-subtitle">System-wide events</div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="activity-feed px-4 py-2 flex flex-col">
                <div className="activity-item py-3 flex gap-3 items-start border-b border-[var(--border)]">
                  <div className="activity-dot w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--danger)' }}></div>
                  <div className="activity-content flex-1">
                    <div className="activity-text text-xs text-[var(--text-2)]"><span className="activity-user font-semibold text-[var(--text-1)]">Sakhi AI</span> escalated Patient <strong>Priya R.</strong> to Critical</div>
                    <div className="activity-time text-[10px] text-[var(--text-4)] mt-1">3 min ago</div>
                  </div>
                </div>
                <div className="activity-item py-3 flex gap-3 items-start border-b border-[var(--border)]">
                  <div className="activity-dot w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--primary-light)' }}></div>
                  <div className="activity-content flex-1">
                    <div className="activity-text text-xs text-[var(--text-2)]"><span className="activity-user font-semibold text-[var(--text-1)]">Nurse Divya</span> accepted Thread #2891</div>
                    <div className="activity-time text-[10px] text-[var(--text-4)] mt-1">11 min ago</div>
                  </div>
                </div>
                <div className="activity-item py-3 flex gap-3 items-start border-b border-[var(--border)]">
                  <div className="activity-dot w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--success)' }}></div>
                  <div className="activity-content flex-1">
                    <div className="activity-text text-xs text-[var(--text-2)]"><span className="activity-user font-semibold text-[var(--text-1)]">Dr. Arjun</span> completed consultation for Meena S.</div>
                    <div className="activity-time text-[10px] text-[var(--text-4)] mt-1">28 min ago</div>
                  </div>
                </div>
                <div className="activity-item py-3 flex gap-3 items-start border-b border-[var(--border)]">
                  <div className="activity-dot w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--warning)' }}></div>
                  <div className="activity-content flex-1">
                    <div className="activity-text text-xs text-[var(--text-2)]">SLA threshold reached — Patient <strong>Lakshmi T.</strong> (Yellow)</div>
                    <div className="activity-time text-[10px] text-[var(--text-4)] mt-1">42 min ago</div>
                  </div>
                </div>
                <div className="activity-item py-3 flex gap-3 items-start border-b border-[var(--border)]">
                  <div className="activity-dot w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--primary-light)' }}></div>
                  <div className="activity-content flex-1">
                    <div className="activity-text text-xs text-[var(--text-2)]"><span className="activity-user font-semibold text-[var(--text-1)]">System</span> processed 3 new chatbot tickets</div>
                    <div className="activity-time text-[10px] text-[var(--text-4)] mt-1">1h 5min ago</div>
                  </div>
                </div>
                <div className="activity-item py-3 flex gap-3 items-start">
                  <div className="activity-dot w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--success)' }}></div>
                  <div className="activity-content flex-1">
                    <div className="activity-text text-xs text-[var(--text-2)]"><span className="activity-user font-semibold text-[var(--text-1)]">Dr. Kavya</span> resolved Thread #2887 — Anjali K.</div>
                    <div className="activity-time text-[10px] text-[var(--text-4)] mt-1">1h 32min ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </DashboardLayout>
  );
}
