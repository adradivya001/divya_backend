import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export function ClinicalSchedule() {
  // Calendar days array for May 2026
  // Starts on Sunday Apr 26th, Apr has 30 days
  const calendarDays = [
    { day: 26, isCurrentMonth: false, hasEvents: false },
    { day: 27, isCurrentMonth: false, hasEvents: false },
    { day: 28, isCurrentMonth: false, hasEvents: false },
    { day: 29, isCurrentMonth: false, hasEvents: false },
    { day: 30, isCurrentMonth: false, hasEvents: false },
    { day: 1, isCurrentMonth: true, hasEvents: false },
    { day: 2, isCurrentMonth: true, hasEvents: false },
    
    { day: 3, isCurrentMonth: true, hasEvents: true, eventCount: 1 },
    { day: 4, isCurrentMonth: true, hasEvents: false },
    { day: 5, isCurrentMonth: true, hasEvents: false },
    { day: 6, isCurrentMonth: true, hasEvents: false },
    { day: 7, isCurrentMonth: true, hasEvents: true, eventCount: 3 },
    { day: 8, isCurrentMonth: true, hasEvents: false },
    { day: 9, isCurrentMonth: true, hasEvents: true, eventCount: 2 },
    
    { day: 10, isCurrentMonth: true, hasEvents: false },
    { day: 11, isCurrentMonth: true, hasEvents: false },
    { day: 12, isCurrentMonth: true, hasEvents: false },
    { day: 13, isCurrentMonth: true, hasEvents: false },
    { day: 14, isCurrentMonth: true, hasEvents: true, eventCount: 4 },
    { day: 15, isCurrentMonth: true, hasEvents: false },
    { day: 16, isCurrentMonth: true, hasEvents: true, eventCount: 2 },
    
    { day: 17, isCurrentMonth: true, hasEvents: false },
    { day: 18, isCurrentMonth: true, hasEvents: false },
    { day: 19, isCurrentMonth: true, hasEvents: true, eventCount: 3 },
    { day: 20, isCurrentMonth: true, hasEvents: true, eventCount: 2 },
    { day: 21, isCurrentMonth: true, hasEvents: true, eventCount: 5 },
    { day: 22, isCurrentMonth: true, hasEvents: true, eventCount: 4, isToday: true },
    { day: 23, isCurrentMonth: true, hasEvents: false },
    
    { day: 24, isCurrentMonth: true, hasEvents: false },
    { day: 25, isCurrentMonth: true, hasEvents: false },
    { day: 26, isCurrentMonth: true, hasEvents: true, eventCount: 2 },
    { day: 27, isCurrentMonth: true, hasEvents: false },
    { day: 28, isCurrentMonth: true, hasEvents: false },
    { day: 29, isCurrentMonth: true, hasEvents: false },
    { day: 30, isCurrentMonth: true, hasEvents: false },
    { day: 31, isCurrentMonth: true, hasEvents: false },
  ];

  return (
    <DashboardLayout activeMenu="schedule">
      <div className="p-6 max-w-[1600px] mx-auto fade-in">
        
        {/* Page Header */}
        <div className="page-header mb-6">
          <div>
            <div className="section-title">Clinical Schedule</div>
            <div className="section-sub">Appointment calendar — May 2026</div>
          </div>
          <div className="page-actions">
            <button className="btn btn-primary btn-sm">+ Book Appointment</button>
          </div>
        </div>

        {/* 2 Column Calendar Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Left: Monthly Calendar */}
          <div className="card xl:col-span-2">
            <div className="card-header flex items-center justify-between">
              <div className="card-title">May 2026</div>
              <div className="flex gap-1.5">
                <button className="btn btn-secondary btn-xs">← Prev</button>
                <button className="btn btn-secondary btn-xs">Today</button>
                <button className="btn btn-secondary btn-xs">Next →</button>
              </div>
            </div>
            <div className="card-body">
              {/* Day Headers */}
              <div className="cal-grid mb-1 border-b border-[var(--border)] pb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                  <div key={d} className="cal-header">{d}</div>
                ))}
              </div>

              {/* Day Cells Grid */}
              <div className="cal-grid">
                {calendarDays.map((c, i) => (
                  <div 
                    key={i} 
                    className={`cal-day ${!c.isCurrentMonth ? 'other-month' : ''} ${c.isToday ? 'today' : ''} ${c.hasEvents ? 'has-events' : ''}`}
                  >
                    <span className="relative z-10">{c.day}</span>
                    {c.hasEvents && c.eventCount && (
                      <span className="cal-event-count absolute top-1.5 right-1.5 text-[8px] bg-[#E8F8FB] text-[#0A4D68] px-1 rounded font-bold">
                        {c.eventCount}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Today's Appointments */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Today's Appointments</div>
              <div className="card-subtitle">Friday, 22 May 2026</div>
            </div>
            <div className="card-body flex flex-col gap-3" style={{ padding: '14px' }}>
              
              {/* Card 1 */}
              <div className="appt-card flex items-center gap-3">
                <div className="appt-time-block min-w-[52px] text-center">
                  <div className="appt-time font-bold text-sm text-[var(--primary)]">9:00</div>
                  <div className="appt-period text-[9px] text-[var(--text-4)] uppercase">AM</div>
                </div>
                <div className="appt-divider w-[1px] h-10 bg-[var(--border)]"></div>
                <div className="appt-info flex-1">
                  <div className="appt-patient font-bold text-xs text-[var(--text-1)]">Priya Krishnan</div>
                  <div className="appt-doctor text-[11px] text-[var(--text-3)]">Dr. Arjun Patel</div>
                  <div className="appt-type text-[10px] text-[var(--text-4)]">Follicular Scan</div>
                </div>
                <span className="appt-status completed">Completed</span>
              </div>

              {/* Card 2 */}
              <div className="appt-card flex items-center gap-3">
                <div className="appt-time-block min-w-[52px] text-center">
                  <div className="appt-time font-bold text-sm text-[var(--primary)]">11:30</div>
                  <div className="appt-period text-[9px] text-[var(--text-4)] uppercase">AM</div>
                </div>
                <div className="appt-divider w-[1px] h-10 bg-[var(--border)]"></div>
                <div className="appt-info flex-1">
                  <div className="appt-patient font-bold text-xs text-[var(--text-1)]">Meena Subramanian</div>
                  <div className="appt-doctor text-[11px] text-[var(--text-3)]">Dr. Kavya Reddy</div>
                  <div className="appt-type text-[10px] text-[var(--text-4)]">Initial Consultation</div>
                </div>
                <span className="appt-status scheduled">Scheduled</span>
              </div>

              {/* Card 3 */}
              <div className="appt-card flex items-center gap-3">
                <div className="appt-time-block min-w-[52px] text-center">
                  <div className="appt-time font-bold text-sm text-[var(--primary)]">2:00</div>
                  <div className="appt-period text-[9px] text-[var(--text-4)] uppercase">PM</div>
                </div>
                <div className="appt-divider w-[1px] h-10 bg-[var(--border)]"></div>
                <div className="appt-info flex-1">
                  <div className="appt-patient font-bold text-xs text-[var(--text-1)]">Lakshmi Tirumala</div>
                  <div className="appt-doctor text-[11px] text-[var(--text-3)]">Dr. Arjun Patel</div>
                  <div className="appt-type text-[10px] text-[var(--text-4)]">Post-Transfer Follow-up</div>
                </div>
                <span className="appt-status scheduled">Scheduled</span>
              </div>

              {/* Card 4 */}
              <div className="appt-card flex items-center gap-3">
                <div className="appt-time-block min-w-[52px] text-center">
                  <div className="appt-time font-bold text-sm text-[var(--primary)]">4:30</div>
                  <div className="appt-period text-[9px] text-[var(--text-4)] uppercase">PM</div>
                </div>
                <div className="appt-divider w-[1px] h-10 bg-[var(--border)]"></div>
                <div className="appt-info flex-1">
                  <div className="appt-patient font-bold text-xs text-[var(--text-1)]">Anjali Krishnamurthy</div>
                  <div className="appt-doctor text-[11px] text-[var(--text-3)]">Dr. Deepika Srinivasan</div>
                  <div className="appt-type text-[10px] text-[var(--text-4)]">Hormone Panel Review</div>
                </div>
                <span className="appt-status cancelled">Cancelled</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
