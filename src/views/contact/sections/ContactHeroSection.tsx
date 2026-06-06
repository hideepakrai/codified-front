'use client';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Mail, MessageSquare, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { useMemo } from 'react';
import type { ReactNode } from 'react';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

const t = (value: any, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function ContactHeroSection() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(
    () => currentPages?.content?.find((s: any) => s?.adminTitle === 'Contact Hero'),
    [currentPages]
  );

  const handle = (path: string) => (value: string) =>
    saveField(dispatch, currentPages, section?.id || '', path, value);

  const p = section?.props || {};

  const contacts: { icon: ReactNode; label: string; val: string; labelPath: string; valPath: string }[] =
    Array.isArray(section?.content) && section.content.length
      ? section.content.map((item: any, idx: number) => ({
          icon: idx === 0 ? <Mail size={20} /> : idx === 1 ? <MessageSquare size={20} /> : <Globe size={20} />,
          label: t(item?.props?.label, ''),
          val: t(item?.props?.value, ''),
          labelPath: `content.${idx}.props.label.en`,
          valPath: `content.${idx}.props.value.en`,
        }))
      : [
          { icon: <Mail size={20} />, label: 'Email', val: 'info@codifiedweb.com', labelPath: '', valPath: '' },
          { icon: <MessageSquare size={20} />, label: 'Phone', val: '+91 99 820 001 05', labelPath: '', valPath: '' },
          { icon: <Globe size={20} />, label: 'Address', val: 'Jagatpura, Jaipur. Near SKIT College.', labelPath: '', valPath: '' },
        ];

  return (
    <section className="section" id="contact-hero" data-mood="signal">
      <div className="inner">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT COLUMN */}
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <EditableText
                value={t(p.label, 'SIGNAL_01 / ESTABLISH_LINK')}
                isEditable={isEditable}
                onSave={handle('props.label.en')}
                tag="span"
                className="label"
              />
              <div className="pulse" style={{ width: '8px', height: '8px', background: 'var(--cyan)', borderRadius: '50%' }} />
            </div>

            <h1 className="display" style={{ fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.9 }}>
              <EditableText
                value={t(p.heading, 'Connect with the <span class="grad-text">Core Team.</span>')}
                isEditable={isEditable}
                onSave={handle('props.heading.en')}
                tag="span"
                dangerouslySetInnerHTML
              />
            </h1>

            <EditableText
              value={t(p.description, 'Skip the sales cycle. Speak directly with our lead architects about system design, AI integration, or complex full-stack scaling.')}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              tag="p"
              className="lede"
              style={{ marginTop: '32px', marginBottom: '56px', maxWidth: '500px' } as React.CSSProperties}
            />

            <div className="grid gap-8">
              {contacts.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px', border: '1px solid var(--line-strong)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.02)', color: 'var(--cyan)',
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      <EditableText
                        value={item.label}
                        isEditable={isEditable && !!item.labelPath}
                        onSave={item.labelPath ? handle(item.labelPath) : () => {}}
                        tag="span"
                      />
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 500 }}>
                      <EditableText
                        value={item.val}
                        isEditable={isEditable && !!item.valPath}
                        onSave={item.valPath ? handle(item.valPath) : () => {}}
                        tag="span"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '64px', padding: '32px', border: '1px solid var(--line-strong)',
              borderRadius: '24px', background: 'rgba(29, 195, 243, 0.03)', backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <ShieldCheck size={18} className="text-cyan-400" />
                <EditableText
                  value={t(p.secureTitle, 'Secure Communication')}
                  isEditable={isEditable}
                  onSave={handle('props.secureTitle.en')}
                  tag="span"
                  style={{ fontWeight: 600, fontSize: '14px' } as React.CSSProperties}
                />
              </div>
              <EditableText
                value={t(p.secureDesc, 'All technical discussions are covered by our standard Mutual NDA. Your system architecture and data privacy are our highest priority.')}
                isEditable={isEditable}
                onSave={handle('props.secureDesc.en')}
                tag="p"
                style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 } as React.CSSProperties}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="reveal">
            <div className="card" style={{ padding: '48px', position: 'relative', overflow: 'hidden' }}>
              <div className="corner tl" /><div className="corner tr" />
              <div className="corner bl" /><div className="corner br" />

              <div style={{ marginBottom: '40px' }}>
                <EditableText
                  value={t(p.formTitle, 'Initiate Deep-Dive')}
                  isEditable={isEditable}
                  onSave={handle('props.formTitle.en')}
                  tag="h3"
                  className="display"
                  style={{ fontSize: '32px', margin: 0 } as React.CSSProperties}
                />
                <EditableText
                  value={t(p.formSub, 'Estimated response time: < 2 hours')}
                  isEditable={isEditable}
                  onSave={handle('props.formSub.en')}
                  tag="p"
                  style={{ fontSize: '14px', opacity: 0.5, marginTop: '8px' } as React.CSSProperties}
                />
              </div>

              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '10px' }}>Name</label>
                    <input type="text" placeholder="John Doe" style={{
                      width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)',
                      padding: '16px 20px', borderRadius: '12px', color: '#fff', outline: 'none',
                    }} className="focus:border-cyan-500/50 transition-colors" />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '10px' }}>Email</label>
                    <input type="email" placeholder="john@company.com" style={{
                      width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)',
                      padding: '16px 20px', borderRadius: '12px', color: '#fff', outline: 'none',
                    }} className="focus:border-cyan-500/50 transition-colors" />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '10px' }}>Requirement</label>
                  <select style={{
                    width: '100%', background: 'var(--bg-1)', border: '1px solid var(--line-strong)',
                    padding: '16px 20px', borderRadius: '12px', color: '#fff', outline: 'none', appearance: 'none',
                  }}>
                    <option style={{ background: '#070b18', color: '#fff' }}>AI / LLM Integration</option>
                    <option style={{ background: '#070b18', color: '#fff' }}>Enterprise Web Scaling</option>
                    <option style={{ background: '#070b18', color: '#fff' }}>UI/UX Design Systems</option>
                    <option style={{ background: '#070b18', color: '#fff' }}>Full-Stack Audit</option>
                    <option style={{ background: '#070b18', color: '#fff' }}>Other / Not Specified</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '10px' }}>Message</label>
                  <textarea rows={4} placeholder="Tell us about your project or technical hurdles..." style={{
                    width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-strong)',
                    padding: '16px 20px', borderRadius: '12px', color: '#fff', outline: 'none', resize: 'none',
                  }} />
                </div>

                <button type="submit" className="btn" style={{
                  width: '100%', justifyContent: 'center', padding: '18px',
                  background: 'var(--cyan)', color: '#04060d', fontWeight: 600,
                  marginTop: '12px', fontSize: '15px',
                }}>
                  <EditableText
                    value={t(p.submitText, 'TRANSMIT_REQUEST')}
                    isEditable={isEditable}
                    onSave={handle('props.submitText.en')}
                    tag="span"
                  />
                  <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                </button>

                <div style={{ textAlign: 'center', fontSize: '11px', opacity: 0.3, fontFamily: 'var(--font-mono)', marginTop: '16px' }}>
                  ENCRYPTED_ENDPOINT_ACTIVE_0x82F
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
