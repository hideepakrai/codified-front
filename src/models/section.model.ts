export interface SectionProps<T = any> {
  data?: T;
  className?: string;
  style?: React.CSSProperties;
}

export interface SectionContent<T = any> {
  id: string;
  type: string;
  adminTitle: string;
  props?: T;
  content?: any[];
}
