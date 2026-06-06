/**
 * add-hi-fields.mjs
 * 
 * Recursively walks every JSON object/array and mirrors every "en" string
 * field into a sibling "hi" field (only if "hi" is missing or empty).
 * 
 * Usage: node scripts/add-hi-fields.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = path.resolve(__dirname, '../src/lib/pages');

function addHiFields(obj) {
  if (Array.isArray(obj)) {
    return obj.map(addHiFields);
  }
  if (obj !== null && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = addHiFields(value);
    }
    // If object has "en" string but missing/empty "hi", mirror it
    if (typeof result.en === 'string' && (!result.hi || result.hi === '')) {
      result.hi = result.en;
    }
    return result;
  }
  return obj;
}

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.json'));
let updated = 0;

for (const file of files) {
  const filePath = path.join(PAGES_DIR, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(raw);
  const patched = addHiFields(json);
  const newRaw = JSON.stringify(patched, null, 2);
  if (newRaw !== raw) {
    fs.writeFileSync(filePath, newRaw, 'utf8');
    console.log(`✅ Updated: ${file}`);
    updated++;
  } else {
    console.log(`⏭  No changes: ${file}`);
  }
}

console.log(`\nDone. ${updated} file(s) updated.`);
