import { setCurrentPages } from '@/redux/slices/pages/pagesSlice';
import { updatePageThunk } from '@/redux/slices/pages/pageThunk';

export async function saveField(dispatch: any, currentPages: any, sectionId: string, fieldPath: string, value: string) {
  const updated = JSON.parse(JSON.stringify(currentPages));
  const secIdx = updated.content?.findIndex((s: any) => s.id === sectionId);
  if (secIdx === -1 || secIdx === undefined) return;
  const parts = fieldPath.split('.');
  let obj = updated.content[secIdx];
  for (let i = 0; i < parts.length - 1; i++) {
    if (!obj[parts[i]]) obj[parts[i]] = {};
    obj = obj[parts[i]];
  }
  obj[parts[parts.length - 1]] = value;

  dispatch(setCurrentPages(updated));

  const pageId = currentPages.id || currentPages._id;
  if (pageId) {
    dispatch(updatePageThunk({ id: pageId, pageData: updated }));
  }
}
