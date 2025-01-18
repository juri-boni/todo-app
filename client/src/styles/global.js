import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Box-sizing reset for all elements */
*,
*::after,
*::before {
  box-sizing: border-box;
}

/* Root font size and global typography */
html {
  font-size: 62.5%; /* 1rem = 10px for easier calculations */
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.6; /* Consistent line-height */
  font-weight: 400;
  background-color: ${({ theme }) => theme?.colors?.bg.primary || "#fff"};
  color: ${({ theme }) => theme?.colors?.text.primary || "#000"};
  min-width: 320px; /* Ensures the app works on small screens */
  min-height: 100vh; /* Full viewport height */
  padding: 0;
}

/* Global typography settings */
:root {
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  font-weight: 400;
  color-scheme: light dark; /* Ensures colors are correctly interpreted in dark mode */
  scroll-behavior: smooth; /* Smooth scrolling */
}

/* Link styles */
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: none;
  transition: color 0.25s ease-in-out;
}

a:hover {
  color: #535bf2;
}

/* Heading styles */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.1;
  margin: 0.5em 0;
  font-weight: 600;
}

h1 {
  font-size: 3.2em; /* 32px */
}

h2 {
  font-size: 2.4em; /* 24px */
}

h3 {
  font-size: 1.8em; /* 18px */
}

h4 {
  font-size: 1.6em; /* 16px */
}

h5 {
  font-size: 1.4em; /* 14px */
}

h6 {
  font-size: 1.2em; /* 12px */
}

/* Button styles */
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
}


button:hover {
  border-color: #646cff;
  background-color: #333;
}

${
  "" /* button:focus,
button:focus-visible {
 outline: 4px auto -webkit-focus-ring-color; 
} */
}

/* Global reset for list styles */
ul, ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* Image and media elements should scale with their container */
img, video {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Input and textarea base styles */
input, textarea {
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

input:focus, textarea:focus {
  border-color: #646cff;
}

/* Blockquote styles */
blockquote {
  margin: 1em 0;
  padding: 0.5em 1em;
  border-left: 4px solid #646cff;
  background-color: #f9f9f9;
  color: #333;
  font-style: italic;
}
`;
