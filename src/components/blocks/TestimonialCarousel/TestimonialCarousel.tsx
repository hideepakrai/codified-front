'use client';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useRef, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function Testimonials() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);
  const scrollRef = useRef<HTMLDivElement>(null);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Testimonials');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const testimonials = section.content || [];
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="section" id="testimonials" data-mood="testimonials" style={{ padding: '80px 6vw' }}>
      <div className="inner" style={{ maxWidth: 'none' }}>
        <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> <EditableText value={(p.label?.en?.split('·')[1] || '').trim()} isEditable={isEditable} onSave={(val) => handle('props.label.en')(`${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`)} tag="span" /></span>
        <div className="head" style={{ marginTop: '24px' }}>
          <div className="copy">
            <EditableText value={p.heading?.en || ''} isEditable={isEditable} onSave={handle('props.heading.en')} className="display" tag="h2" dangerouslySetInnerHTML />
            <EditableText value={p.description?.en || ''} isEditable={isEditable} onSave={handle('props.description.en')} className="lede" tag="p" />
          </div>
          <div className="status-bar">
            {p.metaItems?.map((item: any, i: number) => (
              <span key={i} className={`pill ${item.type !== 'default' ? item.type : ''}`}>
                <i /> <EditableText value={item.text?.en || ''} isEditable={isEditable} onSave={handle(`props.metaItems.${i}.text.en`)} tag="span" />
              </span>
            ))}
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
        >
          {testimonials.map((t: any, idx: number) => (
            <div
              key={t.id || idx}
              className="card flex flex-col justify-between snap-start"
              style={{ minWidth: '340px', maxWidth: '420px', padding: '28px 28px 24px', flexShrink: 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '2px solid rgba(29,195,243,0.3)',
                  boxShadow: '0 0 0 3px rgba(29,195,243,0.07)',
                  background: 'rgba(29,195,243,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan)'
                }}>
                  <User size={24} />
                </div>

                <div style={{ minWidth: 0 }}>
                  <EditableText value={t.props?.name?.en || t.props?.name || ''} isEditable={isEditable} onSave={handle(`content.${idx}.props.name.en`)} tag="div" style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2, marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} />
                  <EditableText value={t.props?.role?.en || t.props?.role || ''} isEditable={isEditable} onSave={handle(`content.${idx}.props.role.en`)} tag="div" style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} />
                </div>
              </div>

              <EditableText value={t.props?.quote?.en || t.props?.quote || ''} isEditable={isEditable} onSave={handle(`content.${idx}.props.quote.en`)} tag="p" style={{ color: 'var(--text-soft)', fontStyle: 'italic', fontSize: '14px', lineHeight: '1.65', flex: 1 }} />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--line)',
              }}>
                <EditableText value={(t.props?.role?.en || t.props?.role || '').split(',')[0]} isEditable={isEditable} onSave={handle(`content.${idx}.props.role.en`)} tag="span" style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600, color: 'var(--text-mute)', opacity: 0.8 }} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center gap-4 mt-6">
          <button onClick={scrollLeft} className="btn ghost" aria-label="Previous">
            <ChevronLeft size={16} /> Prev
          </button>
          <button onClick={scrollRight} className="btn ghost" aria-label="Next">
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
