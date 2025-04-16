// main.js

import { createHeaderSection } from './header.js';
import { createAboutSection } from './about.js';
import { createCharitySection } from './charity.js';
import { createFooterSection } from './footer.js';
import { createProjectsSection } from './projects.js';

document.querySelector('#app').innerHTML =
  createHeaderSection() +
  createAboutSection() +
  createCharitySection() +
  createProjectsSection() +
  createFooterSection()
;
