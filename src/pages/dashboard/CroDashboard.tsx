import { useState } from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

export function CroDashboard() {
  const [activeTicket, setActiveTicket] = useState('Priya Ranganathan');

  const tickets = [
    {
      name: 'Priya Ranganathan',
      initials: 'PR',
      avatarBg: 'linear-gradient(135deg,var(--danger),#FC8181)',
      time: '2m',
      preview: "Severe pain, can't walk. Please help…",
      status: 'Human Required',
      statusClass: 'human'
    },
    {
      name: 'Meena Sharma',
      initials: 'MS',
      avatarBg: 'linear-gradient(135deg,#F5A623,#ED8936)',
      time: '18m',
      preview: 'Feeling very nauseous since retrieval…',
      status: 'In Review',
      statusClass: 'review'
    },
    {
      name: 'Anjali Lakshmi',
      initials: 'AL',
      avatarBg: 'linear-gradient(135deg,#38A169,#68D391)',
      time: '35m',
      preview: 'When should I take the injection?',
      status: 'AI Handling',
      statusClass: 'ai'
    },
    {
      name: 'Sunita Menon',
      initials: 'SM',
      avatarBg: 'linear-gradient(135deg,#6B46C1,#9F7AEA)',
      time: '1h',
      preview: 'Just checking in after transfer…',
      status: 'AI Handling',
      statusClass: 'ai'
    },
    {
      name: 'Lakshmi Tirumala',
      initials: 'LT',
      avatarBg: 'linear-gradient(135deg,#2B6CB0,#63B3ED)',
      time: '2h',
      preview: 'Can I reschedule Monday appointment?',
      status: 'AI Handling',
      statusClass: 'ai'
    }
  ];

  return (
    <DashboardLayout activeMenu="queue">
      <div className="flex flex-col h-[calc(100vh-64px)] bg-white fade-in">
        
        {/* Support Queue Title bar */}
        <div className="py-4 px-6 border-b border-[var(--border)] shrink-0 flex items-center justify-between">
          <div>
            <div className="section-title">Clinician Support Queue</div>
            <div className="section-sub mb-0">Sakhi AI chatbot tickets — Real-time management</div>
          </div>
        </div>

        {/* 3-Panel Console wrapper */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Panel 1: Active Tickets List */}
          <div className="w-[280px] border-r border-[var(--border)] flex flex-col shrink-0">
            <div className="sq-panel-header shrink-0 flex items-center justify-between py-3.5 px-4 bg-[var(--surface-2)] border-b border-[var(--border)]">
              <div>
                <div className="sq-panel-title">Active Tickets</div>
                <div className="sq-panel-sub text-[11px] text-[var(--text-3)] mt-0.5">5 open · 2 unread</div>
              </div>
              <span className="nav-badge">5</span>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {tickets.map((t, idx) => (
                <div 
                  key={idx} 
                  className={`ticket-item p-3 border-b border-[var(--border)] cursor-pointer hover:bg-[var(--surface-2)] transition-all ${activeTicket === t.name ? 'active bg-[var(--primary-xlight)] border-l-4 border-l-[var(--primary-light)]' : ''}`}
                  onClick={() => setActiveTicket(t.name)}
                >
                  <div className="ticket-top flex items-center gap-2 mb-1.5">
                    <div className="thread-avatar w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: t.avatarBg }}>
                      {t.initials}
                    </div>
                    <span className="ticket-name font-semibold text-xs text-[var(--text-1)] flex-1 truncate">{t.name}</span>
                    <span className="ticket-time text-[10px] text-[var(--text-4)]">{t.time}</span>
                  </div>
                  <div className="ticket-preview text-[11px] text-[var(--text-3)] truncate mb-2 leading-relaxed">{t.preview}</div>
                  <span className={`ticket-status ${t.statusClass}`}>
                    {t.status === 'Human Required' ? '🔴 Human Required' : t.status === 'AI Handling' ? '🤖 AI Handling' : t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2: Interactive Chat Window */}
          <div className="flex-1 flex flex-col min-w-0 bg-[var(--bg)] border-r border-[var(--border)]">
            {/* Chat header */}
            <div className="chat-panel-header shrink-0 flex items-center justify-between py-3.5 px-4 bg-white border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="thread-avatar w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: 'linear-gradient(135deg,var(--danger),#FC8181)' }}>PR</div>
                <div>
                  <div className="font-bold text-sm text-[var(--text-1)]">{activeTicket}</div>
                  <div className="text-[11px] text-[var(--text-3)] mt-0.5">JAN-2024-0058 · IVF Stimulation Day 8</div>
                </div>
              </div>
              <button className="btn btn-danger btn-sm">Escalate Critical</button>
            </div>

            {/* AI Paused Banner */}
            <div className="ai-paused-banner py-2 px-4 bg-[var(--warning-bg)] border-b border-[rgba(245,166,35,0.15)] flex items-center gap-2 text-xs font-semibold text-[#9A6B00]">
              <span>⚡</span>
              <span>AI responses paused — Clinician in control</span>
              <span className="ml-auto font-normal text-[10.5px]">Nurse Divya · Took control 2min ago</span>
            </div>

            {/* Chat message bubbles list */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-4">
              
              {/* Bot / Patient query */}
              <div className="chat-msg patient max-w-[80%] self-end">
                <div className="chat-bubble patient bg-[var(--primary)] text-white p-3 rounded-2xl rounded-br-sm text-xs leading-relaxed">
                  Hi, I have severe pain in my lower stomach since my egg retrieval. It hurts to walk.
                </div>
                <div className="chat-msg-meta text-[10px] text-right text-[var(--text-4)] mt-1.5">Priya Ranganathan · 15m ago</div>
              </div>

              {/* Bot response */}
              <div className="chat-msg ai max-w-[80%] self-start">
                <div className="chat-bubble ai bg-white text-[var(--text-2)] p-3 border border-[var(--border)] rounded-2xl rounded-bl-sm text-xs leading-relaxed">
                  Dear Priya, mild cramping is common after retrieval. Please rest and take paracetamol if prescribed. If pain is severe or worsening, please let us know immediately.
                </div>
                <div className="chat-msg-meta text-[10px] text-[var(--text-4)] mt-1.5">Sakhi AI · 14m ago</div>
              </div>

              {/* Patient follow-up */}
              <div className="chat-msg patient max-w-[80%] self-end">
                <div className="chat-bubble patient bg-[var(--primary)] text-white p-3 rounded-2xl rounded-br-sm text-xs leading-relaxed">
                  No, it's not mild. It's extremely severe, like an 8/10. I also feel feverish and nauseous. I really can't walk.
                </div>
                <div className="chat-msg-meta text-[10px] text-right text-[var(--text-4)] mt-1.5">Priya Ranganathan · 10m ago</div>
              </div>

              {/* Clinician response */}
              <div className="chat-msg clinician max-w-[80%] self-start">
                <div className="chat-bubble clinician bg-[var(--primary-xlight)] text-[var(--primary)] p-3 border border-sky-200 rounded-2xl rounded-bl-sm text-xs leading-relaxed">
                  Hi Priya, I am Nurse Divya taking over from Sakhi. Please lie down immediately. Severe pain, fever, and nausea can indicate OHSS. I am escalating this to Dr. Arjun right now.
                </div>
                <div className="chat-msg-meta text-[10px] text-[var(--text-4)] mt-1.5">Nurse Divya · 2m ago</div>
              </div>

            </div>

            {/* Quick replies */}
            <div className="quick-replies shrink-0 bg-white border-t border-[var(--border)] p-3">
              <div className="qr-label text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wide">Quick Actions</div>
              <div className="qr-chips flex gap-2 overflow-x-auto pb-1.5">
                <span className="qr-chip">Check OHSS Checklist</span>
                <span className="qr-chip">Escalate to Doctor</span>
                <span className="qr-chip">Ask pain location</span>
                <span className="qr-chip">Call Patient</span>
              </div>
            </div>

            {/* Chat input box */}
            <div className="chat-input-area shrink-0 bg-white border-t border-[var(--border)] p-3 flex gap-3 items-center">
              <textarea 
                className="chat-input flex-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl py-2 px-4 text-xs resize-none outline-none focus:border-[var(--primary-light)] h-9" 
                placeholder="Type your clinician response here..."
              />
              <button className="send-btn w-9 h-9 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--primary-mid)] transition-colors">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>

          </div>

          {/* Panel 3: Patient Context Intelligence Panel */}
          <div className="w-[300px] shrink-0 bg-white overflow-y-auto custom-scrollbar hidden 2xl:flex flex-col">
            
            {/* Header info */}
            <div className="p-4 border-b border-[var(--border)] text-center">
              <div className="thread-avatar w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-2" style={{ background: 'linear-gradient(135deg,var(--danger),#FC8181)' }}>PR</div>
              <div className="font-bold text-sm text-[var(--text-1)]">{activeTicket}</div>
              <div className="text-[10px] text-[var(--text-4)] mt-1">JAN-2024-0058</div>
            </div>

            {/* Section 1: Triage Intel */}
            <div className="intel-section p-4 border-b border-[var(--border)]">
              <div className="intel-section-title text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Triage Intel</div>
              <div className="flex flex-col gap-2">
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">Priority</span>
                  <span className="intel-val font-bold text-red-600">High Triage</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">SLA Status</span>
                  <span className="intel-val font-bold text-amber-600">Breach Warning (5m)</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">Sentiment</span>
                  <span className="intel-val font-semibold">Highly Anxious</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">Journey</span>
                  <span className="intel-val font-semibold">IVF Stimulation</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1">
                  <span className="intel-key text-slate-400 font-medium">Age</span>
                  <span className="intel-val font-semibold">32 Years Old</span>
                </div>
              </div>
            </div>

            {/* Section 2: Clinical Indicators */}
            <div className="intel-section p-4">
              <div className="intel-section-title text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Clinical Indicators</div>
              <div className="flex flex-col gap-2">
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">Diagnosis</span>
                  <span className="intel-val font-semibold">Low AMH (0.8 ng/mL)</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">Protocol</span>
                  <span className="intel-val font-semibold">Antagonist Protocol</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">Last Scan</span>
                  <span className="intel-val font-semibold">10 Follicles (14-16mm)</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1 border-b border-dashed border-[var(--border)]">
                  <span className="intel-key text-slate-400 font-medium">Medication</span>
                  <span className="intel-val font-semibold">Gonal-F 225, Cetrotide</span>
                </div>
                <div className="intel-row flex justify-between text-xs py-1">
                  <span className="intel-key text-slate-400 font-medium">Trigger Plan</span>
                  <span className="intel-val font-semibold text-[var(--primary-light)]">Decapeptyl Trigger</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
