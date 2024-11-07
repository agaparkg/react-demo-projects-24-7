const data = [
  {
    type: "dir",
    name: "public",
    children: [
      { type: "file", name: "index.html" },
      {
        type: "file",
        name: "manifest.json",
      },
      {
        type: "file",
        name: "robots.txt",
      },
    ],
  },
  {
    type: "dir",
    name: "src",
    children: [
      {
        type: "dir",
        name: "components",
        children: [
          {
            type: "file",
            name: "Drawer.js",
          },
          {
            type: "file",
            name: "Input.js",
          },
          { type: "file", name: "Modal.js" },
        ],
      },
      {
        type: "dir",
        name: "styles",
        children: [
          {
            type: "file",
            name: "Input.css",
          },
          {
            type: "file",
            name: "Drawer.css",
          },
          { type: "file", name: "Modal.css" },
          {
            type: "dir",
            name: "Custom Styles",
            children: [
              {
                type: "file",
                name: "Custom.css",
              },
            ],
          },
        ],
      },
      {
        type: "dir",
        name: "modules",
        children: [],
      },
      {
        type: "file",
        name: "App.js",
      },
      {
        type: "file",
        name: "App.css",
      },
      { type: "file", name: "index.js" },
      { type: "file", name: "styles.css" },
    ],
  },
  { type: "file", name: "package.json" },
  { type: "file", name: "README.md" },
];

export default data;
