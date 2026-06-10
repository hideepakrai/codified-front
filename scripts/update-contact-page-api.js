const fs = require('fs');
const path = require('path');

async function updatePage() {
  const filePath = path.join(__dirname, '../src/lib/pages/contactPage.json');
  const pageData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  console.log("Fetching pages from API to get the id...");
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
  
  const contactPage = pages.find(p => p.slug === 'contact');
  if (!contactPage) {
    console.error("Contact page not found in API response");
    return;
  }
  
  const pageId = contactPage.id;
  console.log(`Found contact page with id: ${pageId}`);
  
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
  console.log("Successfully updated contact page via API. The cache should now be cleared.");
}

updatePage().catch(console.error);
