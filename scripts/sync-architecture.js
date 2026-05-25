const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');
const path = require('path');

// Initialize AST Project
const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

// Paths Configuration
const SOURCE_DIR = 'src/components/blocks';

async function runCodemod() {
  console.log("🚀 Starting Architecture Synchronization Codemod...");

  // Get all .tsx files in the target directory
  const sourceFiles = project.getSourceFiles(`${SOURCE_DIR}/**/*.tsx`);
  
  if (sourceFiles.length === 0) {
    console.log("No .tsx files found in", SOURCE_DIR);
    return;
  }

  let filesTransformed = 0;

  for (const sourceFile of sourceFiles) {
    const filePath = sourceFile.getFilePath();
    const fileName = sourceFile.getBaseNameWithoutExtension();
    const dirPath = sourceFile.getDirectoryPath();

    console.log(`\n🔍 Analyzing: ${fileName}.tsx`);

    // Find Variable Declarations that end with "Data" (e.g. defaultHeroData)
    const variableStatements = sourceFile.getVariableStatements();
    let dataExtracted = false;
    let dataContent = "";
    let dataVariableName = "";

    for (const statement of variableStatements) {
      const declarations = statement.getDeclarations();
      for (const declaration of declarations) {
        const varName = declaration.getName();
        
        // Match heuristic: Contains "default" and "Data" or just "Data"
        if (varName.toLowerCase().includes('data')) {
          console.log(`   --> Found static data object: ${varName}`);
          
          dataVariableName = varName;
          dataContent = `export const ${varName} = ${declaration.getInitializer()?.getText()};`;
          
          // Remove from original .tsx
          statement.remove();
          dataExtracted = true;
          break;
        }
      }
      if (dataExtracted) break;
    }

    if (dataExtracted) {
      // 1. Create the new Data file (e.g., Hero.ts)
      const dataFilePath = path.join(dirPath, `${fileName}Data.ts`);
      fs.writeFileSync(dataFilePath, dataContent, 'utf8');
      console.log(`   ✅ Created data file: ${fileName}Data.ts`);

      // 2. Add Import to the original .tsx
      sourceFile.addImportDeclaration({
        namedImports: [dataVariableName],
        moduleSpecifier: `./${fileName}Data`,
      });
      console.log(`   ✅ Injected import into ${fileName}.tsx`);

      // 3. Save modifications to original file
      await sourceFile.save();
      filesTransformed++;
    } else {
      console.log(`   ⚠️ No extractable data found.`);
    }
  }

  console.log(`\n🎉 Codemod Complete! Successfully transformed ${filesTransformed} components.`);
}

runCodemod().catch(console.error);
