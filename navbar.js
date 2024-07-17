// navbar.js

const navLogoText = 'ngmjohnstone.github.io';
const navItems = [
  { href: '#about', text: 'About Me' },
  { href: '#blog', text: 'Blog' },
  { href: '#portfolio', text: 'Portfolio' },
  { href: '#contact', text: 'Contact' }
];

function createNavBar() {

  const navMenuItemsHTML = navItems.map(item => `
    <li class="nav-item"><a href="${item.href}" class="nav-link">${item.text}</a></li>
  `).join('');

  const navBarHTML = `
    <nav class="navbar">
      <div class="navbar-container">
        <a href="/" class="nav-logo">${navLogoText}</a>
        <ul class="nav-menu">
          ${navMenuItemsHTML}
        </ul>
      </div>
    </nav>
  `;
  return navBarHTML;
}

export { createNavBar };
