const fs = require('fs');
const path = require('path');

async function updatePage() {
  const filePath = path.join(__dirname, '../src/lib/pages/homePage.json');
  const pageData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Since we don't have the _id from the db, let's first fetch from the API to get the _id
  console.log("Fetching pages from API to get the _id...");
  const getRes = await fetch('https://kalptree.xyz/api/cms/pages', {
    headers: {
      'x-tenant-db': 'kp_codified_web_solution'
    }
  });
  
  if (!getRes.ok) {
    console.error("Failed to fetch:", await getRes.text());
    return;
  }
  
  const resData = await getRes.json();
  const pages = resData.data;
  
  const homePage = pages.find(p => p.slug === 'home');
  if (!homePage) {
    console.error("Home page not found in API response");
    return;
  }
  
  const pageId = homePage.id;
  console.log(`Found home page with id: ${pageId}`);
  
  // Now update it via PUT
  console.log("Sending PUT request to update the page...");
  const putRes = await fetch(`https://kalptree.xyz/api/cms/pages/${pageId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-tenant-db': 'kp_codified_web_solution'
    },
    body: JSON.stringify(pageData)
  });
  
  if (!putRes.ok) {
    console.error("Failed to update:", await putRes.text());
    return;
  }
  
  const putData = await putRes.json();
  console.log("Successfully updated page via API. The cache should now be cleared.");
}

updatePage().catch(console.error);
