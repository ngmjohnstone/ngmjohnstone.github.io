// header.js

import { asciiHeader } from "./constants";

const profileImageUrl = '/favicon.png';

function createHeaderSection() {
  const heroSectionHTML = `
    <header class="header-container" id="ascii-header">
      <img src="${profileImageUrl}" alt="Profile image" class="image">
      <pre alt="ngmjohnstone" class="text">${asciiHeader}</pre>
    </header>
  `;
  return heroSectionHTML;
}

export { createHeaderSection };
