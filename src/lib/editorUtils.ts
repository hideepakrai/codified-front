import { setCurrentPages, setError } from '@/redux/slices/pages/pagesSlice';

export async function saveField(dispatch: any, currentPages: any, sectionId: string, fieldPath: string, value: string) {
  const updated = JSON.parse(JSON.stringify(currentPages));
  const secIdx = updated.content?.findIndex((section: any) => section.id === sectionId);
  if (secIdx === -1 || secIdx === undefined) return false;
  const parts = fieldPath.split('.');
  let target = updated.content[secIdx];
  for (let index = 0; index < parts.length - 1; index += 1) {
    if (!target[parts[index]]) target[parts[index]] = {};
    target = target[parts[index]];
  }
  target[parts[parts.length - 1]] = value;
  dispatch(setCurrentPages(updated));

  if (!currentPages?.slug) {
    dispatch(setCurrentPages(currentPages));
    dispatch(setError(true));
    return false;
  }
  const token = typeof window === 'undefined' ? null : localStorage.getItem('shared_data');
  try {
    const response = await fetch('/api/publishing/page-drafts/field-changes', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        pageSlug: currentPages.slug,
        pageId: currentPages.id || currentPages._id || null,
        sectionId,
        fieldPath,
        value,
        expectedPageUpdatedAt: currentPages.updatedAt || null,
      }),
    });
    if (!response.ok) throw new Error('Draft save was rejected');
    dispatch(setError(false));
    return true;
  } catch {
    dispatch(setCurrentPages(currentPages));
    dispatch(setError(true));
    return false;
  }
}
