import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const envPath = path.join(rootDir, ".env");
const pagesDir = path.join(rootDir, "src/lib/store/pages");

const requiredEnvKeys = ["MONGO_URI", "MONGO_DB_NAME", "MONGO_COLLECTION_NAME"];

function ensureEnvFile() {
  if (fs.existsSync(envPath)) {
    return true;
  }

  const defaultEnv = [
    "# MongoDB configuration for seed script",
    'MONGO_URI="mongodb://127.0.0.1:27017"',
    'MONGO_DB_NAME="codified"',
    'MONGO_COLLECTION_NAME="pages"',
    "",
  ].join("\n");

  fs.writeFileSync(envPath, defaultEnv, "utf8");
  console.log(`Created .env at ${envPath}. Fill values and rerun the script.`);
  return false;
}

function validateEnv() {
  const missingKeys = requiredEnvKeys.filter((key) => !process.env[key]);
  if (missingKeys.length > 0) {
    throw new Error(`Missing required env values: ${missingKeys.join(", ")}`);
  }
}

async function seedPages() {
  const shouldContinue = ensureEnvFile();
  if (!shouldContinue) {
    process.exit(1);
  }

  dotenv.config({ path: envPath });
  validateEnv();

  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db(process.env.MONGO_DB_NAME);
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.json'));

    for (const file of files) {
      const pagePath = path.join(pagesDir, file);
      const raw = fs.readFileSync(pagePath, "utf8");
      
      let pageData;
      try {
        pageData = JSON.parse(raw);
      } catch (err) {
        console.error(`Failed to parse JSON for ${file}:`, err.message);
        continue;
      }
      
      const slug = pageData.slug;
      if (!slug) {
         console.warn(`Skipping ${file} - no slug found in json.`);
         continue;
      }

      const result = await collection.updateOne(
        { slug: slug },
        {
          $set: {
            ...pageData,
            updatedAt: new Date(),
          },
          $setOnInsert: {
            createdAt: new Date(),
          },
        },
        { upsert: true }
      );

      if (result.upsertedCount > 0) {
        console.log(`Inserted page with slug '${slug}' from ${file}.`);
      } else if (result.modifiedCount > 0) {
        console.log(`Updated page with slug '${slug}' from ${file}.`);
      } else {
        console.log(`No changes needed for slug '${slug}' from ${file}.`);
      }
    }
  } finally {
    await client.close();
  }
}

seedPages().catch((error) => {
  console.error("Failed to seed pages:", error.message);
  process.exit(1);
});
