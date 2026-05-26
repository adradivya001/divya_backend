import { useState } from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export function LeadsOverview() {
  const [activeFilter, setActiveFilter] = useState('All');

  const leadsData = [
    {
      name: 'Sruthi Anand',
      location: 'Chennai, TN',
      source: 'WhatsApp',
      sourceColor: '#25D366',
      problem: 'PCOS, irregular cycles',
      status: 'Contacted',
      statusClass: 'yellow',
      date: '21 May',
      hasConvert: true,
      hasNotes: true
    },
    {
      name: 'Ramya Gopal',
      location: 'Hyderabad, TS',
      source: 'Referral',
      sourceColor: 'var(--primary-light)',
      problem: 'Secondary infertility, 2 years',
      status: 'Consult Booked',
      statusClass: 'green',
      date: '20 May',
      hasConvert: true,
      hasNotes: false
    },
    {
      name: 'Divya Murthy',
      location: 'Bangalore, KA',
      source: 'Website',
      sourceColor: 'var(--text-4)',
      problem: 'IVF query, failed cycles elsewhere',
      status: 'New',
      statusClass: 'blue',
      date: '22 May',
      hasConvert: false,
      hasNotes: false
    }
  ];

  return (
    <DashboardLayout activeMenu="leads">
      <div className="p-6 max-w-[1600px] mx-auto fade-in">
        
        {/* Page Header */}
        <div className="page-header mb-6">
          <div>
            <div className="section-title">Acquisition Desk</div>
            <div className="section-sub">Clinic lead pipeline — CRM view</div>
          </div>
          <div className="page-actions">
            <button className="btn btn-primary btn-sm">+ Add Lead</button>
          </div>
        </div>

        {/* Conversion Funnel Card */}
        <div className="card mb-6">
          <div className="card-header">
            <div className="card-title">Conversion Funnel</div>
            <div className="card-subtitle">This month · 47 total leads</div>
          </div>
          <div className="card-body">
            <div className="flex gap-4 items-end justify-between mb-4 flex-wrap text-center">
              <div className="flex-1 min-w-[70px]">
                <div className="font-bold text-lg text-[var(--primary)]" style={{ fontFamily: 'Sora' }}>47</div>
                <div className="text-[10px] text-[var(--text-3)] font-semibold uppercase">New</div>
              </div>
              <div className="text-slate-300 pb-1 font-bold">→</div>
              <div className="flex-1 min-w-[70px]">
                <div className="font-bold text-lg text-[var(--primary-mid)]" style={{ fontFamily: 'Sora' }}>32</div>
                <div className="text-[10px] text-[var(--text-3)] font-semibold uppercase">Contacted</div>
              </div>
              <div className="text-slate-300 pb-1 font-bold">→</div>
              <div className="flex-1 min-w-[70px]">
                <div className="font-bold text-lg text-[var(--warning)]" style={{ fontFamily: 'Sora' }}>18</div>
                <div className="text-[10px] text-[var(--text-3)] font-semibold uppercase">Consult Booked</div>
              </div>
              <div className="text-slate-300 pb-1 font-bold">→</div>
              <div className="flex-1 min-w-[70px]">
                <div className="font-bold text-lg text-[var(--success)]" style={{ fontFamily: 'Sora' }}>11</div>
                <div className="text-[10px] text-[var(--text-3)] font-semibold uppercase">Converted</div>
              </div>
              <div className="text-slate-300 pb-1 font-bold">→</div>
              <div className="flex-1 min-w-[70px]">
                <div className="font-bold text-lg text-[var(--text-4)]" style={{ fontFamily: 'Sora' }}>5</div>
                <div className="text-[10px] text-[var(--text-3)] font-semibold uppercase">Lost</div>
              </div>
            </div>
            
            <div className="funnel-bar flex h-2 rounded overflow-hidden mt-3">
              <div className="funnel-seg bg-[var(--primary)]" style={{ flex: 47 }}></div>
              <div className="funnel-seg bg-[var(--primary-mid)]" style={{ flex: 32 }}></div>
              <div className="funnel-seg bg-[var(--warning)]" style={{ flex: 18 }}></div>
              <div className="funnel-seg bg-[var(--success)]" style={{ flex: 11 }}></div>
              <div className="funnel-seg bg-[var(--surface-3)]" style={{ flex: 5 }}></div>
            </div>
          </div>
        </div>

        {/* Lead Table Card */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Lead Name</th>
                  <th>Location</th>
                  <th>Source</th>
                  <th>Problem</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leadsData.map((l, i) => (
                  <tr key={i}>
                    <td className="font-semibold text-xs text-[var(--text-1)]">{l.name}</td>
                    <td className="text-xs text-[var(--text-2)]">{l.location}</td>
                    <td>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-2)]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.sourceColor }} />
                        {l.source}
                      </span>
                    </td>
                    <td className="text-xs text-[var(--text-3)]">{l.problem}</td>
                    <td>
                      <span className={`risk-chip ${l.statusClass} text-[10px] py-0.5 px-2 rounded-full font-bold`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="text-xs text-[var(--text-4)]">{l.date}</td>
                    <td>
                      <div className="flex gap-1.5">
                        {l.hasConvert ? (
                          <button className="btn btn-primary btn-xs">Convert</button>
                        ) : (
                          <button className="btn btn-secondary btn-xs">Contact</button>
                        )}
                        {l.hasNotes && <button className="btn btn-secondary btn-xs">Notes</button>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
