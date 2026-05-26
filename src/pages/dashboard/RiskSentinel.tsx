import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export function RiskSentinel() {
  const riskFeed = [
    {
      id: 'JAN-0058',
      name: 'Priya Ranganathan',
      reason: 'AI detected severe pain language: "unbearable abdominal cramping, fever of 101°F, and unable to walk." Possible Ovarian Hyperstimulation Syndrome (OHSS). Doctor escalation triggered.',
      time: '3 minutes ago',
      level: 'critical',
      status: 'Escalated',
      statusClass: 'escalated',
      badge: '🔴',
      actionText: 'Resolve'
    },
    {
      id: 'JAN-0091',
      name: 'Kavitha Venkat',
      reason: 'Emotional crisis pattern detected. Patient expressed hopelessness, tearfulness, and withdrawal. Third IVF failure in 18 months. Psychological escalation protocol initiated.',
      time: '7 minutes ago',
      level: 'critical',
      status: 'Pending Review',
      statusClass: 'pending',
      badge: '🔴',
      actionText: 'Assign Support'
    },
    {
      id: 'JAN-0064',
      name: 'Meena Sharma',
      reason: 'Post-retrieval nausea and dizziness reported. AI flagged as possible mild OHSS. Nurse review recommended for symptom assessment.',
      time: '22 minutes ago',
      level: 'escalated',
      status: 'Pending',
      statusClass: 'pending',
      badge: '🟡',
      actionText: 'View Thread'
    },
    {
      id: 'JAN-0079',
      name: 'Anjali Lakshmi',
      reason: 'Routine query about injection timing. No clinical risk indicators. AI responded with standard protocol information. Patient confirmed understanding.',
      time: '45 minutes ago',
      level: 'normal',
      status: 'Resolved',
      statusClass: 'resolved',
      badge: '🟢'
    }
  ];

  return (
    <DashboardLayout activeMenu="risk">
      <div className="p-6 max-w-[1600px] mx-auto fade-in">
        
        {/* Page Header */}
        <div className="page-header mb-6">
          <div>
            <div className="section-title">Risk Sentinel</div>
            <div className="section-sub">Real-time AI risk monitoring feed</div>
          </div>
          <div className="page-actions">
            <div className="filter-chips">
              <div className="filter-chip active">All</div>
              <div className="filter-chip">Critical</div>
              <div className="filter-chip">Pending</div>
              <div className="filter-chip">Resolved</div>
            </div>
          </div>
        </div>

        {/* Count Summaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="card" style={{ background: 'var(--danger-bg)', borderColor: 'rgba(229,62,62,.2)' }}>
            <div className="card-body flex items-center gap-4 py-4 px-5">
              <div className="text-3xl">🚨</div>
              <div>
                <div className="font-bold text-2xl" style={{ fontFamily: 'Sora', color: 'var(--danger)' }}>
                  2<span className="kpi-pulse inline-block ml-2 w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                </div>
                <div className="text-xs text-[var(--text-2)] font-medium">Critical Flags — Immediate Action Required</div>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: 'var(--warning-bg)', borderColor: 'rgba(245,166,35,.2)' }}>
            <div className="card-body flex items-center gap-4 py-4 px-5">
              <div className="text-3xl">⚠️</div>
              <div>
                <div className="font-bold text-2xl" style={{ fontFamily: 'Sora', color: '#9A6B00' }}>4</div>
                <div className="text-xs text-[var(--text-2)] font-medium">Escalated Flags — Review Pending</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feed List */}
        <div className="risk-feed flex flex-col gap-3">
          {riskFeed.map((r, i) => (
            <div 
              key={i} 
              className={`risk-entry flex items-start gap-4 p-4 border rounded-lg bg-white ${
                r.level === 'critical' ? 'critical-risk' : r.level === 'escalated' ? 'escalated-risk' : 'normal-risk'
              }`}
            >
              <div className="risk-badge text-lg flex-shrink-0 mt-0.5">{r.badge}</div>
              <div className="risk-content flex-1">
                <div className="risk-patient font-bold text-xs text-[var(--text-1)] mb-1">
                  {r.name} <span className="text-[10px] font-normal text-[var(--text-3)]">· {r.id}</span>
                </div>
                <div className="risk-reason text-xs text-[var(--text-2)] mb-3 leading-relaxed">{r.reason}</div>
                <div className="risk-meta flex items-center gap-3">
                  <span className="risk-time text-[10px] text-[var(--text-4)]">{r.time}</span>
                  <span className={`risk-status-pill text-[9.5px] font-bold px-2 py-0.5 rounded ${r.statusClass}`}>
                    {r.status}
                  </span>
                  {r.actionText && (
                    <button className={`btn btn-xs ml-auto ${r.actionText === 'Assign Support' ? 'btn-danger' : 'btn-secondary'}`}>
                      {r.actionText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}
