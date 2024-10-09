// main.js

import './style.css'
import { createNavBar } from './navbar.js';
import { createHeroSection } from './hero.js';
import { createAboutSection } from './about.js';
import { createCharitySection } from './charity.js';
// import { createBlogSection } from './blog.js';

document.querySelector('#app').innerHTML =
  createNavBar() +
  createHeroSection() +
  createAboutSection() + // + createBlogSection()
  createCharitySection()
;
