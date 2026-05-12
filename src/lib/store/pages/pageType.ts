export interface LocalizedText {
  en?: string;
  hi?: string;
  [key: string]: string | undefined;
}

export interface Page {
  title: LocalizedText;
  slug: string;
  content: PageBlock[];
  metaTitle?: LocalizedText;
  metaDescription?: LocalizedText;
  isPublished: boolean;
}

export interface PageBlock {
  id: string;
  type: string;
  adminTitle?: string;
  props: any;
  content: any[];
}
