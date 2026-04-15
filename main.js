// main.js

import { createAboutSection } from './about.js';
import { createBlogSection } from './blog.js';
import { createCharitySection } from './charity.js';
import { createFooterSection } from './footer.js';
import { createHeaderSection } from './header.js';
import { createNavSection } from './nav.js';

document.querySelector('#app').innerHTML = `
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
