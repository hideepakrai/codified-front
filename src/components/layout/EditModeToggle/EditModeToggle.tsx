'use client';
import { useAppSelector } from '@/redux/hooks';
import { setEditMode } from '@/redux/slices/pages/pagesSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Pencil } from 'lucide-react';

export default function EditModeToggle() {
  const dispatch = useAppDispatch();
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  return (
    <button
      onClick={() => dispatch(setEditMode(!isEditable))}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 shadow-lg ${
        isEditable
          ? 'bg-cyan text-black shadow-cyan/30'
          : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
      }`}
      title={isEditable ? 'Disable edit mode' : 'Enable edit mode'}
    >
      <Pencil size={14} strokeWidth={2} />
      {isEditable ? 'Edit Mode ON' : 'Edit Mode OFF'}
    </button>
  );
}
