# EditableText Component and JSON Rendering Guide

This document explains how the `EditableText` component works and how your JSON data (like `homePage.json`) is rendered through it to allow inline editing.

## 1. How the `EditableText` Component Works

The `EditableText` component (`src/components/shared/EditableText.tsx`) is a reusable React component designed to allow seamless inline editing of text on your website.

### Key Features:
- **Toggleable Editing Mode**: When `isEditable` is `false`, it behaves like a normal HTML element (e.g., `<span>`, `<h1>`, `<p>`). When `isEditable` is `true`, clicking the text transforms it into an `<input>` field.
- **Style Preservation**: When switching to editing mode, the component extracts the computed CSS styles of the display element and applies them to the `<input>` element. This ensures that the text looks identical while editing as it does when simply viewing it.
- **Save Mechanisms**: The editing mode ends, and the `onSave` callback is triggered when the user:
  - Clicks outside the input field (`onBlur`).
  - Presses the `Enter` key.
- **Cancel Mechanism**: Pressing the `Escape` key reverts the text back to its original state without saving.

## 2. How JSON Data is Displayed on `EditableText`

The architecture of the page is deeply integrated with Redux and your JSON configuration files. Here is the step-by-step flow of how data from `homePage.json` reaches the screen and becomes editable:

### Step A: Loading the JSON into State
The `homePage.json` data is loaded into the Redux store. In the `Hero.tsx` component, this data is accessed using:
```typescript
const currentPages = useAppSelector((state: RootState) => state.pages.currentPages);
const isEditable = useAppSelector((state: RootState) => state.pages.isEditablePage);
```

### Step B: Finding the Specific Section Data
The JSON is structured as an array of sections. The `Hero` component searches for its specific data block by matching the `adminTitle`:
```typescript
const section = useMemo(() => {
  if (!currentPages) return null;
  return currentPages.content?.find((s: any) => s?.adminTitle === 'Hero');
}, [currentPages]);
```

### Step C: Rendering with `EditableText`
Once the component has its specific `section` data, it reads the properties (e.g., `section.props.heading.en`) and passes them into `<EditableText>` components.

For example, rendering the Hero Heading:
```tsx
<EditableText
  value={p.heading?.en || ""}
  isEditable={isEditable}
  onSave={handle('props.heading.en')}
  className="display reveal"
  tag="h1"
  dangerouslySetInnerHTML
/>
```

- `value`: Pulls the initial text from the JSON structure (`"We develop tech Manish<br />that helps your<br /><span class=\"grad-text\">business grow.</span>"`).
- `tag="h1"`: Tells the component to render the text inside an `<h1>` tag when not editing.
- `onSave`: If the user edits this text, the `handle` function determines exactly where in the JSON tree to save the new value (`props.heading.en`).

### Step D: Saving Changes Back to State
When the user finishes typing and saves, the `onSave` handler fires the `saveField` utility:
```typescript
const handle = (fieldPath: string) => (value: string) => 
  saveField(dispatch, currentPages, section.id, fieldPath, value);
```
This utility dispatches an action to Redux, updating the specific property path (`fieldPath`) within that specific section (`section.id`) with the new value. The UI then instantly re-renders to reflect the new state.

## Summary Flow
1. **JSON Data** (`homePage.json`) -> **Redux State**.
2. **Component** (`Hero.tsx`) reads its slice of the state.
3. **Component** renders `<EditableText>` passing the text and a path updater.
4. **User clicks text** -> turns into `<input>` -> user types -> user hits Enter.
5. `<EditableText>` fires `onSave` -> dispatches update to **Redux State**.
6. **Component** re-renders with the newly saved text.
