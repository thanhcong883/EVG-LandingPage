const fs = require('fs');
const path = require('path');

const HTML_FILE = path.join(__dirname, 'body_content.html');
const REACT_FILE = path.join(__dirname, 'evg-landing-page', 'src', 'App.jsx');

if (!fs.existsSync(HTML_FILE)) {
  console.log(`[convert.js] Warning: ${HTML_FILE} not found. Skipping conversion.`);
  process.exit(0);
}

const htmlContent = fs.readFileSync(HTML_FILE, 'utf8');

// Extract the <body> content
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let bodyInnerHtml = bodyMatch ? bodyMatch[1] : htmlContent;

// Fix self-closing tags
bodyInnerHtml = bodyInnerHtml.replace(/<(img|input|br|hr|meta|link)([^>]*?)(?:\s*\/?)>/gi, '<$1$2 />');

// JSX conversions
bodyInnerHtml = bodyInnerHtml.replace(/class=/g, 'className=');
bodyInnerHtml = bodyInnerHtml.replace(/for=/g, 'htmlFor=');
bodyInnerHtml = bodyInnerHtml.replace(/tabindex=/g, 'tabIndex=');
bodyInnerHtml = bodyInnerHtml.replace(/stroke-width=/g, 'strokeWidth=');
bodyInnerHtml = bodyInnerHtml.replace(/stroke-linecap=/g, 'strokeLinecap=');
bodyInnerHtml = bodyInnerHtml.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
bodyInnerHtml = bodyInnerHtml.replace(/fill-rule=/g, 'fillRule=');
bodyInnerHtml = bodyInnerHtml.replace(/clip-rule=/g, 'clipRule=');

// Fix style attributes
bodyInnerHtml = bodyInnerHtml.replace(/style="([^"]*)"/g, (match, styles) => {
    const styleObj = styles.split(';').filter(Boolean).reduce((acc, style) => {
        const [key, value] = style.split(':').map(s => s.trim());
        if (key && value) {
            const camelCaseKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            acc.push(`${camelCaseKey}: '${value}'`);
        }
        return acc;
    }, []);
    return `style={{ ${styleObj.join(', ')} }}`;
});

const appJsxContent = `import React from 'react';

function App() {
  return (
    <>
      ${bodyInnerHtml}
    </>
  );
}

export default App;
`;

fs.writeFileSync(REACT_FILE, appJsxContent, 'utf8');
console.log(`[convert.js] Successfully converted body_content.html and updated App.jsx`);
