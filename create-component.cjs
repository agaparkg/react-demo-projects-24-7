const fs = require("fs"); // file system
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.log("Please provide a component name");
  process.exit(1);
}

const componentDir = path.join(__dirname, "src/components");
// /Users/agaparovkg/Desktop/DELETE-LATER/react-demo-projects-24-7/src/components/
// "/Users/agaparovkg/Desktop/DELETE-LATER/react-demo-projects-24-7" + "src" + "components" + componentName

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

const componentContent = `import React from 'react';

const ${componentName} = () => {
  return <div>${componentName} page</div>
}

export default ${componentName};
`;

fs.writeFileSync(
  path.join(componentDir, `${componentName}.jsx`),
  componentContent
);

console.log(
  `${componentName} component created successfully in ${componentDir}`
);
