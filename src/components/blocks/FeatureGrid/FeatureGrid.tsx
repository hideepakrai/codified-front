import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useMemo } from 'react';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';


const getText = (value: any, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function WhyChooseUs() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);
  const section = useMemo(() => {
    return currentPages?.content?.find((s: any) => s?.adminTitle === 'Why Us');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const specs = section.content || [];
  const cards = section.columns?.[0] || [];
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="why" data-mood="why">
      <div className="inner">
        <div className="layout">
          <div>
            <EditableText value={getText(p?.label, '')} isEditable={isEditable} onSave={handle('props.label.en')} className="label" tag="span" />
            <EditableText value={getText(p?.heading, '')} isEditable={isEditable} onSave={handle('props.heading.en')} className="display" tag="h2" dangerouslySetInnerHTML />
            <EditableText value={getText(p?.description, '')} isEditable={isEditable} onSave={handle('props.description.en')} className="lede" tag="p" />
            <div className="core-spec" style={{ gridTemplateColumns: '1fr' }}>
              {specs.map((spec: any, idx: number) => (
                <div key={idx} className="spec-cell">
                  <EditableText value={getText(spec?.props?.key, '')} isEditable={isEditable} onSave={handle(`content.${specs.indexOf(spec)}.props.key.en`)} className="k" tag="div" />
                  <EditableText value={getText(spec?.props?.value, '')} isEditable={isEditable} onSave={handle(`content.${specs.indexOf(spec)}.props.value.en`)} className="v" tag="div" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="core-stage" style={{ height: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {cards.map((card: any, index: number) => (
              <div key={index} className={`card ${index === 1 ? 'glow' : ''}`} style={index === 1 ? { padding: '32px', borderColor: 'rgba(29,195,243,0.3)', boxShadow: '0 0 30px rgba(29,195,243,0.1)' } : { padding: '32px' }}>
                <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
                <div className="engine-card" style={{ height: 'auto', flex: 'none', border: 'none', padding: 0, background: 'none' }}>
                  <div className="num">{getText(card?.props?.code, '')}</div>
                  {card?.props?.tag ? <div className="tag" style={{ position: 'relative', top: 0, right: 0, marginTop: '12px', display: 'inline-block' }}><EditableText value={getText(card?.props?.tag, '')} isEditable={isEditable} onSave={handle(`columns.0.${cards.indexOf(card)}.props.tag`)} tag="span" /></div> : null}
                  <EditableText value={getText(card?.props?.title, '')} isEditable={isEditable} onSave={handle(`columns.0.${cards.indexOf(card)}.props.title.en`)} tag="h4" />
                  <EditableText value={getText(card?.props?.desc, '')} isEditable={isEditable} onSave={handle(`columns.0.${cards.indexOf(card)}.props.desc.en`)} tag="p" />
                </div>
             </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
