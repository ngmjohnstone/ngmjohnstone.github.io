// header.js

const profileImageUrl = '/favicon.png';

function createHeaderSection() {
  const headerSectionHtml = `
    <header class="header-container">
      <img src="${profileImageUrl}" alt="Profile image" class="image">
      <a class="text" href="/">
        ngmjohnstone
      </a>
    </header>
    <hr>
  `;
  return headerSectionHtml;
}

export { createHeaderSection };
