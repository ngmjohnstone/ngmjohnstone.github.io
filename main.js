// main.js

import './style.css'
import { createNavBar } from './navbar.js';
import { createHeroSection } from './hero.js';
import { createAboutSection } from './about.js';

document.querySelector('#app').innerHTML =
  createNavBar() +
  createHeroSection() +
  createAboutSection()
;
