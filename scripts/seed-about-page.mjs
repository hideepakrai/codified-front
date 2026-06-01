import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const envPath = path.join(rootDir, ".env");
const aboutPagePath = path.join(rootDir, "src/lib/store/pages/aboutPage.json");

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

async function seedAboutPage() {
  const shouldContinue = ensureEnvFile();
  if (!shouldContinue) {
    process.exit(1);
  }

  dotenv.config({ path: envPath });
  validateEnv();

  const raw = fs.readFileSync(aboutPagePath, "utf8");
  const aboutPage = JSON.parse(raw);

  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db(process.env.MONGO_DB_NAME);
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    const result = await collection.updateOne(
      { slug: aboutPage.slug },
      {
        $set: {
          ...aboutPage,
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true }
    );

    if (result.upsertedCount > 0) {
      console.log(`Inserted about page with slug '${aboutPage.slug}'.`);
    } else if (result.modifiedCount > 0) {
      console.log(`Updated about page with slug '${aboutPage.slug}'.`);
    } else {
      console.log(`No changes needed for slug '${aboutPage.slug}'.`);
    }
  } finally {
    await client.close();
  }
}

seedAboutPage().catch((error) => {
  console.error("Failed to seed about page:", error.message);
  process.exit(1);
});
