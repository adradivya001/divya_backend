import { useState } from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Search } from 'lucide-react';

export function PatientsOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // High-fidelity mock census matching Screenshot 3
  const patientsData = [
    {
      id: 'JAN-2024-0041',
      name: 'Priya Krishnan',
      initials: 'PK',
      avatarBg: 'linear-gradient(135deg,#38A169,#68D391)',
      journey: 'Pregnant',
      journeyBadge: '🤰 Pregnant',
      journeyClass: 'pregnant',
      progressText: 'Week 24 / 40',
      progressPercent: 60,
      riskText: 'Low',
      riskClass: 'green',
      conditions: [{ text: 'PCOS', tagClass: 'pcos' }],
      lastContact: 'Today, 9:14 AM',
      hasAlert: false
    },
    {
      id: 'JAN-2024-0058',
      name: 'Priya Ranganathan',
      initials: 'PR',
      avatarBg: 'linear-gradient(135deg,#E53E3E,#FC8181)',
      journey: 'IVF Active',
      journeyBadge: '💉 IVF Active',
      journeyClass: 'ivf',
      progressText: 'Stimulation Day 8',
      progressPercent: 0, // Text only
      riskText: 'Critical',
      riskClass: 'red',
      conditions: [{ text: 'Low AMH', tagClass: 'amh' }],
      lastContact: '2 min ago ⚠',
      hasAlert: true
    },
    {
      id: 'JAN-2024-0033',
      name: 'Meena Subramanian',
      initials: 'MS',
      avatarBg: 'linear-gradient(135deg,#6B46C1,#9F7AEA)',
      journey: 'Trying',
      journeyBadge: '🌱 Trying to Conceive',
      journeyClass: 'trying',
      progressText: 'Cycle monitoring',
      progressPercent: 0, // Text only
      riskText: 'Watch',
      riskClass: 'yellow',
      conditions: [
        { text: 'PCOS', tagClass: 'pcos' },
        { text: 'Endo', tagClass: 'endo' }
      ],
      lastContact: 'Yesterday, 3:22 PM',
      hasAlert: false
    },
    {
      id: 'JAN-2024-0027',
      name: 'Lakshmi Tirumala',
      initials: 'LT',
      avatarBg: 'linear-gradient(135deg,#2B6CB0,#63B3ED)',
      journey: 'Post',
      journeyBadge: '📋 Post-Treatment',
      journeyClass: 'post',
      progressText: 'Follow-up Phase',
      progressPercent: 0, // Text only
      riskText: 'Low',
      riskClass: 'green',
      conditions: [{ text: 'Male Factor', tagClass: 'normal' }],
      lastContact: '22 May, 11:05 AM',
      hasAlert: false
    }
  ];

  const filteredPatients = patientsData.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter === 'IVF Active') return matchesSearch && p.journey === 'IVF Active';
    if (activeFilter === 'Pregnant') return matchesSearch && p.journey === 'Pregnant';
    if (activeFilter === 'High Risk') return matchesSearch && p.riskText === 'Critical';
    if (activeFilter === 'PCOS') return matchesSearch && p.conditions.some(c => c.text === 'PCOS');
    return matchesSearch;
  });

  return (
    <DashboardLayout activeMenu="patients">
      <div className="p-6 max-w-[1600px] mx-auto fade-in">
        
        {/* Page Header */}
        <div className="page-header mb-6">
          <div>
            <div className="section-title">Medical Census</div>
            <div className="section-sub">All enrolled patients — Fertility journey tracker</div>
          </div>
          <div className="page-actions">
            <button className="btn btn-secondary btn-sm">Export CSV</button>
            <button className="btn btn-primary btn-sm">+ Enroll Patient</button>
          </div>
        </div>

        {/* Card containing directory table */}
        <div className="card">
          <div className="card-header flex flex-col md:flex-row gap-4 flex-wrap items-center">
            <div className="search-bar flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                placeholder="Search patients, ID, condition…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-chips">
              {['All', 'IVF Active', 'Pregnant', 'High Risk', 'PCOS'].map((chip) => (
                <div 
                  key={chip} 
                  className={`filter-chip ${activeFilter === chip ? 'active' : ''}`}
                  onClick={() => setActiveFilter(chip)}
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Journey</th>
                  <th>Progress</th>
                  <th>Risk</th>
                  <th>Conditions</th>
                  <th>Last Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div className="patient-cell">
                        <div className="patient-av font-bold text-xs" style={{ background: p.avatarBg }}>
                          {p.initials}
                        </div>
                        <div>
                          <div className="patient-name">{p.name}</div>
                          <div className="patient-id">{p.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`journey-badge ${p.journeyClass}`}>
                        {p.journeyBadge}
                      </span>
                    </td>
                    <td>
                      {p.progressPercent > 0 ? (
                        <div>
                          <div className="progress-text text-xs text-[var(--text-2)] mb-1">{p.progressText}</div>
                          <div className="progress-bar max-w-[120px]">
                            <div className="progress-fill" style={{ width: `${p.progressPercent}%` }}></div>
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs text-[var(--text-2)] font-medium">{p.progressText}</span>
                      )}
                    </td>
                    <td>
                      <span className={`risk-chip ${p.riskClass}`}>
                        ● {p.riskText}
                      </span>
                    </td>
                    <td>
                      <div className="medical-tags">
                        {p.conditions.map((c, i) => (
                          <span key={i} className={`med-tag ${c.tagClass}`}>
                            {c.text}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className={`font-medium ${p.hasAlert ? 'text-[var(--danger)] font-bold animate-pulse' : 'text-[var(--text-3)]'}`}>
                      {p.lastContact}
                    </td>
                    <td>
                      <div className="flex gap-1.5">
                        <button className="btn btn-secondary btn-xs">View</button>
                        {p.journey === 'Pregnant' && <button className="btn btn-secondary btn-xs">Chat</button>}
                        {p.hasAlert && <button className="btn btn-danger btn-xs">Urgent</button>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Pagination info */}
          <div className="px-5 py-4 border-t border-[var(--border)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-3)] font-medium">
              Showing {filteredPatients.length} of 284 patients
            </span>
            <div className="flex gap-1.5">
              <button className="btn btn-secondary btn-xs">← Prev</button>
              <button className="btn btn-primary btn-xs">Next →</button>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
