import { existsSync, mkdirSync, writeFileSync } from "fs"; // file system
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const componentName = process.argv[2];

if (!componentName) {
  console.log("Please provide a component name");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const componentDir = join(__dirname, "src/components");
// /Users/agaparovkg/Desktop/DELETE-LATER/react-demo-projects-24-7/src/components/
// "/Users/agaparovkg/Desktop/DELETE-LATER/react-demo-projects-24-7" + "src" + "components" + componentName

if (!existsSync(componentDir)) {
  mkdirSync(componentDir, { recursive: true });
}

const componentContent = `import React from 'react';

const ${componentName} = () => {
  return <div>${componentName} page</div>
}

export default ${componentName};
`;

writeFileSync(join(componentDir, `${componentName}.jsx`), componentContent);

console.log(
  `${componentName} component created successfully in ${componentDir}`
);
