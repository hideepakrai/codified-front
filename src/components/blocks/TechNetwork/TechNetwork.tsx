"use client";
import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import EditableText from '@/components/shared/EditableText';
import { saveField } from '@/lib/editorUtils';

export default function Technologies() {
  const dispatch = useAppDispatch();
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Technologies');
  }, [currentPages]);

  if (!section) return null;

  const p = section.props;
  const content = section.content;
  const nodes = section.nodes;
  const handle = (fieldPath: string) => (value: string) => saveField(dispatch, currentPages, section.id, fieldPath, value);

  return (
    <section className="section" id="api" data-mood="api" data-annotate-id={`${currentPages?.slug || 'home'}-technologies-section`}>
      <div className="inner">
        <div className="layout">
          <div>
            <span className="label"><span className="num">{p.label?.en?.split('·')[0]}·</span> <EditableText value={(p.label?.en?.split('·')[1] || '').trim()} isEditable={isEditable} onSave={(val) => handle('props.label.en')(`${(p.label?.en?.split('·')[0] || '').trim()} · ${val}`)} tag="span" /></span>
            <EditableText
              value={p.heading?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.heading.en')}
              className="display"
              tag="h2"
              dangerouslySetInnerHTML
            />
            <EditableText
              value={p.description?.en || ""}
              isEditable={isEditable}
              onSave={handle('props.description.en')}
              className="lede"
              tag="p"
            />
            <div className="core-spec" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              {content.map((item: any) => (
                <div className="spec-cell" key={item.id}>
                  <EditableText value={item.props?.key?.en || ''} isEditable={isEditable} onSave={handle(`content.${content.indexOf(item)}.props.key.en`)} className="k" tag="div" />
                  <EditableText value={item.props?.value?.en || ''} isEditable={isEditable} onSave={handle(`content.${content.indexOf(item)}.props.value.en`)} className="v" tag="div" />
                </div>
              ))}
            </div>
          </div>

          <div className="net-stage" id="netStage">
            <svg id="netSvg" viewBox="0 0 600 600" preserveAspectRatio="none"></svg>
            {nodes?.map((n: any) => (
              <div
                key={n.id}
                className={`net-node ${n.props?.isCenter ? 'center' : ''}`}
                style={{ left: n.props?.left, top: n.props?.top }}
                data-id={n.id}
                data-desc={n.props?.desc?.en}
                data-endpoint={n.props?.endpoint}
              >
                <i /> <EditableText value={n.props?.label?.en || ''} isEditable={isEditable} onSave={handle(`nodes.${nodes.indexOf(n)}.props.label.en`)} tag="span" />
              </div>
            ))}

            <div className="node-modal" id="netModal">
              <span className="close" id="netClose">×</span>
              <h4 id="netTitle">Node</h4>
              <p id="netDesc">Description</p>
              <span className="endpoint" id="netEndpoint">LAYER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
