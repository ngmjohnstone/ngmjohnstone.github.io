// nav.js

const profileImageUrl = '/favicon.png';

function createNavSection() {
  const navHtml = `
    <nav>
      <div class="nav-section">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">[Home]</a></li>
          <li><a href="#about">[About]</a></li>
          <li><a href="#charity">[Charity]</a></li>
          <li><a href="#blog">[Blog]</a></li>
        </ul>
      </div>
      <br>
      <div class="nav-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="https://github.com/ngmjohnstone" target="_blank">[GitHub]</a></li>
        </ul>
      </div>
    </nav>
  `;
  return navHtml;
}

export { createNavSection };
