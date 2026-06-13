const { MongoClient } = require('mongodb');
const fs = require('fs');

async function run() {
  const client = new MongoClient('mongodb://kalp:ZsKzXgsNTo-1zhTTCfQLD0A_prY9Iyw1@103.80.161.222:27017/kp_test_tenant?authSource=kalpzero_enterprise');
  try {
    await client.connect();
    const db = client.db('kp_codified_web_solution');
    const data = JSON.parse(fs.readFileSync('src/lib/pages/industriesPage.json', 'utf8'));
    
    await db.collection('site_pages').updateOne(
      { slug: 'industries' },
      { $set: data },
      { upsert: true }
    );
    console.log('Successfully updated industries page in MongoDB');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
