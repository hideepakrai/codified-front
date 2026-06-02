'use client';
import { useMemo } from 'react';

import { RootState } from '@/redux/store';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function Hero() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state: RootState) => state.pages.currentPages);
  const isEditable = useAppSelector((state: RootState) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Hero');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="signal" data-mood="signal" data-annotate-id={`${currentPages?.slug || 'home'}-hero-section`}>
      <div className="inner">
        <div className="grid lg:!grid-cols-[6fr_4fr]">
          <div>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> <EditableText value={(p.label?.en?.split('·')[1] || '').trim()} isEditable={isEditable} onSave={(val) => handle('props.label.en')(`${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`)} tag="span" /></span>
            <EditableText
              value={p.heading?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              className="display reveal"
              tag="h1"
              dangerouslySetInnerHTML
            />
            <EditableText
              value={p.description?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              className="lede reveal"
              tag="p"
            />
            <div className="ctas reveal">
              <a className="btn" href={p.primaryButtonLink || "#core"}>
                <EditableText value={p.primaryButton?.en || ''} isEditable={isEditable} onSave={handle('props.primaryButton.en')} tag="span" />
                <span className="arr">→</span>
              </a>
              <a className="btn ghost" href={p.secondaryButtonLink || "#command"}>
                <EditableText value={p.secondaryButton?.en || ''} isEditable={isEditable} onSave={handle('props.secondaryButton.en')} tag="span" />
              </a>
            </div>
            <div className="meta reveal">
              {p.metaItems?.map((item: any, i: number) => (
                <span key={i}>{item.hasDot && <i />}{" "}<EditableText value={item.text?.en || ''} isEditable={isEditable} onSave={handle(`props.metaItems.${i}.text.en`)} tag="span" /></span>
              ))}
            </div>
          </div>

          <div className="card reveal" style={{ padding: '6px' }}>
            <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
            <div className="panel-readout">
              {section.content?.map((item: any, idx: number) => (
                <div className="row" key={item.id}>
                  <EditableText value={item.props?.key?.en || ''} isEditable={isEditable} onSave={handle(`content.${idx}.props.key.en`)} className="k" tag="span" />
                  <EditableText value={item.props?.value?.en || ''} isEditable={isEditable} onSave={handle(`content.${idx}.props.value.en`)} className="v" tag="span" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <EditableText value={p.scrollHint?.en || ''} isEditable={isEditable} onSave={handle('props.scrollHint.en')} tag="span" />
        <span className="bar"></span>
      </div>
    </section>
  );
}
