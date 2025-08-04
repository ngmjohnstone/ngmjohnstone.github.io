// nav.js

const profileImageUrl = '/favicon.png';

function createNavSection() {
  const headerSectionHtml = `
    <nav>
      <ul>
        <li>
          <a href="/">[Home]</a>
        </li>
        <li>
          <a href="#blog">[Blog]</a>
        </li>
      </ul>
    </nav>
    <hr>
  `;
  return headerSectionHtml;
}

export { createNavSection };
