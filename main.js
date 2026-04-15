// main.js

import { createAboutSection } from './about.js';
import { createBlogSection } from './blog.js';
import { createCharitySection } from './charity.js';
import { createFooterSection } from './footer.js';
import { createHeaderSection } from './header.js';
import { createNavSection } from './nav.js';

const app = document.querySelector('#app');

app.innerHTML = `
  ${createHeaderSection()}
  <div class="layout-container">
    <aside class="sidebar">
      ${createNavSection()}
    </aside>
    <main class="content">
      ${createAboutSection()}
      ${createCharitySection()}
      ${createBlogSection()}
    </main>
  </div>
  ${createFooterSection()}
`;

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

const updateToggleText = (theme) => {
  themeToggle.textContent = theme === 'light' ? '[☾]' : '[☀]';
};

if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}
updateToggleText(currentTheme);

themeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    updateToggleText('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    updateToggleText('light');
  }
});
