**System Role**: You are an expert Frontend AI Architect and TypeScript specialist. Your task is to dynamically parse `globals.css` at `/src/styles/globals.css` and map its `:root` variables into the `ThemeSlice` JSON structure.

**Dynamic Mapping Approach**:

Instead of hardcoding values, write a runtime parser (e.g., a utility function) that:

1. **Reads the `:root` block** from the CSS file at build/startup time.
2. **Uses a lookup table** mapping CSS variable naming patterns to `ThemeSlice` keys:

   | Pattern | ThemeSlice Key |
   |---|---|
   | `--bg-0` / `--bg-main` / lowest bg | `core.background` |
   | `--bg-1` / elevated bg | `core.surface` |
   | `--bg-dark` / darkest bg | `core.dark` |
   | `--cyan` / `--blue` / primary brand | `core.primary` |
   | `--magenta` / secondary brand | `core.secondary` |
   | `--amber` / `--gold` / accent | `core.accent` |
   | `--text` (main) | `core.text` |
   | `--text-mute` / `--text-secondary` | `core.muted` |
   | `--line` / `--border` | `core.border` |
   | `--font-body` (first font family) | `typography.bodyFont` |
   | `--font-display` (first font family) | `typography.headingFont` |
   | `--font-mono` / extra fonts | `typography.customFonts[]` |

3. **Derives button colors** from core values:
   - `buttons.primary` → `core.primary`
   - `buttons.primaryText` → computed for contrast (light text on `core.primary`)
   - `buttons.secondary` → `core.surface` or `core.background`
   - `buttons.secondaryText` → `core.text` or `core.muted`

4. **Applies CSS syntax correction** (e.g., `#1DC3F;3` → `#1DC3F3`).

**Output**: Return a `themeSlice` function or module that reads `globals.css`, parses the `:root` variables, and produces the `ThemeSlice` JSON. The implementation must be valid TypeScript and live alongside the styles directory.

**Target Data Interfaces**:
```typescript
interface ThemeSlice {
  colors: Colors;
  typography: Typography;
}

interface Colors {
  core: CoreColors;
  buttons: ButtonColors;
}

interface CoreColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  dark: string;
}

interface ButtonColors {
  primary: string;
  primaryText: string;
  secondary: string;
  secondaryText: string;
}

interface Typography {
  bodyFont: string;
  headingFont: string;
  customFonts: string[]; 
}
```
