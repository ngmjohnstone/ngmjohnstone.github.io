// main.js

import { createHeaderSection } from './header.js';
import { createNavSection } from './nav.js';

document.querySelector('#app').innerHTML = 
  createHeaderSection() +
  createNavSection();
