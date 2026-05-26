import { useState } from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export function DocumentsVault() {
  const [activeTab, setActiveTab] = useState('All Documents');

  const documents = [
    {
      name: 'Follicular Scan Report',
      patient: 'Priya Krishnan · JAN-0041',
      type: 'Ultrasound',
      date: '22 May 2026',
      icon: '📄',
      iconClass: 'pdf',
      badgeClass: ''
    },
    {
      name: 'AMH & FSH Panel',
      patient: 'Meena Subramanian · JAN-0033',
      type: 'Bloodwork',
      date: '20 May 2026',
      icon: '🩸',
      iconClass: 'img',
      badgeClass: ''
    },
    {
      name: 'Semen Analysis Report',
      patient: 'Tirumala (Spouse) · JAN-0027',
      type: 'Semen Analysis',
      date: '18 May 2026',
      icon: '📋',
      iconClass: 'pdf',
      badgeClass: ''
    },
    {
      name: 'Endometrial Biopsy',
      patient: 'Lavanya Nair · JAN-0062',
      type: 'Biopsy',
      date: '15 May 2026',
      icon: '🔬',
      iconClass: 'img',
      badgeStyle: { background: 'var(--danger-bg)', color: 'var(--danger)', borderColor: 'rgba(229,62,62,.3)' }
    },
    {
      name: 'IVF Protocol Prescription',
      patient: 'Anjali Lakshmi · JAN-0079',
      type: 'Prescription',
      date: '22 May 2026',
      icon: '💊',
      iconClass: 'pdf',
      badgeStyle: { background: 'var(--primary-xlight)', color: 'var(--primary)', borderColor: 'rgba(5,191,219,.3)' }
    }
  ];

  const filteredDocs = documents.filter(doc => {
    if (activeTab === 'All Documents') return true;
    return doc.type === activeTab;
  });

  return (
    <DashboardLayout activeMenu="documents">
      <div className="p-6 max-w-[1600px] mx-auto fade-in">
        
        {/* Page Header */}
        <div className="page-header mb-6">
          <div>
            <div className="section-title">Medical Records</div>
            <div className="section-sub">Secure document vault — Patient files & reports</div>
          </div>
          <div className="page-actions">
            <button className="btn btn-secondary btn-sm">Upload Files</button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="page-tabs mb-6 flex flex-wrap gap-2 border-b border-[var(--border)] pb-1">
          {['All Documents', 'Ultrasound', 'Bloodwork', 'Hormone Panel', 'Semen Analysis', 'Prescriptions'].map((tab) => (
            <div 
              key={tab} 
              className={`page-tab cursor-pointer text-xs font-semibold pb-3 px-4 transition-all ${activeTab === tab ? 'active font-bold text-[#0a4d68] border-b-2 border-[#0a4d68]' : 'text-slate-400 hover:text-slate-700'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Grid List of Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDocs.map((doc, idx) => (
            <div key={idx} className="doc-card">
              <div className={`doc-icon ${doc.iconClass} mb-3 w-10 h-10 rounded-lg flex items-center justify-center text-lg`}>
                {doc.icon}
              </div>
              <div className="doc-name font-bold text-xs text-[var(--text-1)] mb-1">{doc.name}</div>
              <div className="doc-patient text-[11px] text-[var(--text-3)] mb-4">{doc.patient}</div>
              <div className="doc-meta flex items-center justify-between border-t border-[var(--border)] pt-3">
                {doc.badgeStyle ? (
                  <span className="doc-type-badge text-[10px] font-semibold px-2 py-0.5 rounded border" style={doc.badgeStyle}>
                    {doc.type}
                  </span>
                ) : (
                  <span className="doc-type-badge text-[10px] font-semibold px-2 py-0.5 rounded border bg-[var(--surface-2)] text-[var(--text-3)] border-[var(--border)]">
                    {doc.type}
                  </span>
                )}
                <span className="doc-date text-[10.5px] text-[var(--text-4)]">{doc.date}</span>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="btn btn-secondary btn-xs flex-1 justify-center">View</button>
                <button className="btn btn-secondary btn-xs flex-1 justify-center">Download</button>
              </div>
            </div>
          ))}

          {/* Upload Document dashed card */}
          {activeTab === 'All Documents' && (
            <div 
              className="doc-card border-2 border-dashed border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--primary-light)] transition-all cursor-pointer flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="text-3xl mb-3">📤</div>
              <div className="text-xs font-bold text-[var(--text-2)] mb-1">Upload Document</div>
              <div className="text-[10px] text-[var(--text-4)]">PDF, DOCX, JPEG, PNG</div>
            </div>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
}
