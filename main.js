// main.js

import { createAboutSection } from './about.js';
import { createBlogSection } from './blog.js';
import { createCharitySection } from './charity.js';
import { createFooterSection } from './footer.js';
import { createHeaderSection } from './header.js';
import { createNavSection } from './nav.js';

document.querySelector('#app').innerHTML = 
  createHeaderSection() +
  createNavSection() +
  createAboutSection() +
  createCharitySection() +
  createBlogSection() +
  createFooterSection();
