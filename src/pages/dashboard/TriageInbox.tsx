import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export function TriageInbox() {
  return (
    <DashboardLayout activeMenu="triage">
      <div className="p-6 max-w-[1600px] mx-auto fade-in">
        
        {/* Page Header */}
        <div className="page-header mb-6">
          <div>
            <div className="section-title">Triage Inbox</div>
            <div className="section-sub">Live patient thread management — Kanban view</div>
          </div>
          <div className="page-actions">
            <div className="filter-chips">
              <div className="filter-chip active">All</div>
              <div className="filter-chip">My Assigned</div>
              <div className="filter-chip">Unassigned</div>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="kanban-board">
          
          {/* STANDARD */}
          <div className="kanban-col">
            <div className="kanban-col-header">
              <div className="kanban-status-dot green"></div>
              <span className="kanban-col-title">Standard</span>
              <span className="kanban-count green font-bold">7</span>
            </div>
            
            <div className="kanban-cards custom-scrollbar">
              
              {/* Card 1 */}
              <div className="thread-card">
                <div className="thread-card-top">
                  <div className="thread-avatar text-xs font-bold" style={{ background: 'linear-gradient(135deg,#38A169,#68D391)' }}>AL</div>
                  <span className="thread-name">Anjali Lakshmi</span>
                  <span className="thread-time text-[10.5px]">8m ago</span>
                </div>
                <div className="thread-snippet text-xs text-[var(--text-3)] mb-3 leading-relaxed">
                  Asking about IVF cycle day 3 medication dosage and morning injection timing.
                </div>
                <div className="thread-footer flex items-center gap-1.5 mt-2">
                  <span className="thread-tag ivf">IVF Active</span>
                  <span className="thread-tag normal">Day 5</span>
                  <div className="ai-locked-badge ml-auto">🤖 AI</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="thread-card">
                <div className="thread-card-top">
                  <div className="thread-avatar text-xs font-bold" style={{ background: 'linear-gradient(135deg,#6B46C1,#9F7AEA)' }}>SM</div>
                  <span className="thread-name">Sunita Menon</span>
                  <span className="thread-time text-[10.5px]">15m ago</span>
                </div>
                <div className="thread-snippet text-xs text-[var(--text-3)] mb-3 leading-relaxed">
                  Routine follow-up after embryo transfer, reporting mild cramping which is expected.
                </div>
                <div className="thread-footer flex items-center gap-1.5 mt-2">
                  <span className="thread-tag pcos">PCOS</span>
                  <span className="thread-tag preg">2WW</span>
                  <div className="ai-locked-badge ml-auto">🤖 AI</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="thread-card">
                <div className="thread-card-top">
                  <div className="thread-avatar text-xs font-bold" style={{ background: 'linear-gradient(135deg,#2B6CB0,#63B3ED)' }}>RT</div>
                  <span className="thread-name">Radha Thakur</span>
                  <span className="thread-time text-[10.5px]">32m ago</span>
                </div>
                <div className="thread-snippet text-xs text-[var(--text-3)] mb-3 leading-relaxed">
                  Appointment rescheduling request for Monday consultation — no urgent issues.
                </div>
                <div className="thread-footer flex items-center gap-1.5 mt-2">
                  <span className="thread-tag normal">Consultation</span>
                  <div className="ai-locked-badge ml-auto">🤖 AI</div>
                </div>
              </div>

            </div>
          </div>

          {/* ESCALATED */}
          <div className="kanban-col escalated">
            <div className="kanban-col-header">
              <div className="kanban-status-dot yellow"></div>
              <span className="kanban-col-title">Escalated</span>
              <span className="kanban-count yellow font-bold">4</span>
            </div>
            
            <div className="kanban-cards custom-scrollbar">
              
              {/* Card 1 */}
              <div className="thread-card">
                <div className="thread-card-top">
                  <div className="thread-avatar text-xs font-bold" style={{ background: 'linear-gradient(135deg,#F5A623,#ED8936)' }}>MS</div>
                  <span className="thread-name">Meena Sharma</span>
                  <span className="thread-time text-[10.5px]">5m ago</span>
                </div>
                <div className="thread-snippet text-xs text-[var(--text-3)] mb-3 leading-relaxed">
                  Patient reports elevated anxiety and nausea post egg retrieval. Doctor review needed for anti-nausea prescription.
                </div>
                <div className="thread-footer flex items-center gap-1.5 mt-2">
                  <span className="thread-tag amh">Low AMH</span>
                  <span className="thread-tag ivf">IVF</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="thread-card">
                <div className="thread-card-top">
                  <div className="thread-avatar text-xs font-bold" style={{ background: 'linear-gradient(135deg,#DD6B20,#ED8936)' }}>LN</div>
                  <span className="thread-name">Lavanya Nair</span>
                  <span className="thread-time text-[10.5px]">18m ago</span>
                </div>
                <div className="thread-snippet text-xs text-[var(--text-3)] mb-3 leading-relaxed">
                  Irregular spotting reported on Day 8 of cycle. AI flagged for clinical review — hormone levels discussion required.
                </div>
                <div className="thread-footer flex items-center gap-1.5 mt-2">
                  <span className="thread-tag endo">Endometriosis</span>
                </div>
              </div>

            </div>
          </div>

          {/* CRITICAL */}
          <div className="kanban-col critical">
            <div className="kanban-col-header">
              <div className="kanban-status-dot red animate-pulse"></div>
              <span className="kanban-col-title" style={{ color: 'var(--danger)' }}>Critical</span>
              <span className="kanban-count red font-bold">3</span>
            </div>
            
            <div className="kanban-cards custom-scrollbar">
              
              {/* Card 1 */}
              <div className="thread-card critical-card">
                <div className="thread-card-top">
                  <div className="thread-avatar text-xs font-bold" style={{ background: 'linear-gradient(135deg,var(--danger),#FC8181)' }}>PR</div>
                  <span className="thread-name">Priya Ranganathan</span>
                  <span className="thread-time text-[10.5px]" style={{ color: 'var(--danger)', fontWeight: 700 }}>2m ago</span>
                </div>
                <div className="thread-snippet text-xs text-[var(--text-3)] mb-3 leading-relaxed">
                  ⚠️ AI detected severe abdominal pain language. Patient reports pain level 8/10 with nausea and fever — possible OHSS.
                </div>
                <div className="thread-footer flex items-center gap-1.5 mt-2">
                  <span className="thread-tag pain">Severe Pain</span>
                  <span className="thread-tag ivf">OHSS Risk</span>
                  <button className="btn btn-danger btn-xs ml-auto">Assign Doctor</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="thread-card critical-card">
                <div className="thread-card-top">
                  <div className="thread-avatar text-xs font-bold" style={{ background: 'linear-gradient(135deg,#9B2C2C,#E53E3E)' }}>KV</div>
                  <span className="thread-name">Kavitha Venkat</span>
                  <span className="thread-time text-[10.5px]" style={{ color: 'var(--danger)', fontWeight: 700 }}>7m ago</span>
                </div>
                <div className="thread-snippet text-xs text-[var(--text-3)] mb-3 leading-relaxed">
                  Emotional crisis — patient expressing hopelessness about repeated IVF failures. Psychological support escalation needed.
                </div>
                <div className="thread-footer flex items-center gap-1.5 mt-2">
                  <span className="thread-tag pain">Crisis</span>
                  <button className="btn btn-danger btn-xs ml-auto">Assign Nurse</button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
