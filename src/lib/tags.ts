/**
 * KalpBloom — cache tag conventions
 * Used with fetch(..., { next: { tags: [tag()] } }) and revalidateTag()
 */
export const tags = {
  page:       (slug: string)   => `page:${slug}`,
  collection: (type: string)   => `collection:${type}`,
  item:       (type: string, slug: string) => `${type}:${slug}`,
  settings:   ()               => 'settings',
  menu:       (key: string)    => `menu:${key}`,
};
