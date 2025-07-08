// nav.js

const profileImageUrl = '/favicon.png';

function createNavSection() {
  const headerSectionHtml = `
    <nav>
      <ul>
        <li><a href="/">[Home]</a></li>
        <li>[B]</li>
        <li>[C]</li>
      </ul>

    </nav>
    <hr>
    <br>
  `;
  return headerSectionHtml;
}

export { createNavSection };
