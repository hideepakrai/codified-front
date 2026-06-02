'use client';
import { useState, useRef, useEffect, useCallback, KeyboardEvent } from 'react';

interface Props {
  value: string;
  isEditable: boolean;
  onSave: (value: string) => void;
  className?: string;
  tag?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  dangerouslySetInnerHTML?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}

const STYLE_KEYS = [
  'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight',
  'letterSpacing', 'textAlign', 'textTransform', 'textDecoration',
  'color', 'backgroundColor', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
  'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
  'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
  'borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle',
  'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor',
  'borderRadius', 'boxShadow', 'width', 'minWidth', 'maxWidth',
  'display', 'alignItems', 'justifyContent', 'gap', 'flexWrap',
] as const;

export default function EditableText({
  value,
  isEditable,
  onSave,
  className = '',
  tag: Tag = 'span',
  dangerouslySetInnerHTML: useDangerousHTML = false,
  placeholder = '',
  style: passedStyle,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [inputStyle, setInputStyle] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const startEditing = useCallback(() => {
    if (!isEditable) return;
    if (displayRef.current) {
      const computed = window.getComputedStyle(displayRef.current);
      const styles: Record<string, string> = {};
      for (const key of STYLE_KEYS) {
        styles[key] = computed.getPropertyValue(key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`));
      }
      setInputStyle(styles);
    }
    setEditValue(value);
    setEditing(true);
  }, [isEditable, value]);

  const handleSave = () => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== value) {
      onSave(trimmed);
    } else {
      setEditValue(value);
    }
    setEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      setEditValue(value);
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className="editable-input"
        style={inputStyle as React.CSSProperties}
      />
    );
  }

  const sharedClassName = `${className} ${isEditable ? 'editable-text' : ''}`;

  const handleRef = (el: any) => {
    displayRef.current = el;
  };

  if (useDangerousHTML) {
    return (
      <Tag
        ref={handleRef}
        className={sharedClassName}
        onClick={startEditing}
        style={passedStyle}
        dangerouslySetInnerHTML={{ __html: value || placeholder }}
      />
    );
  }

  return (
    <Tag
      ref={handleRef}
      className={sharedClassName}
      onClick={startEditing}
      style={passedStyle}
    >
      {value || placeholder}
    </Tag>
  );
}
