// nav.js

const profileImageUrl = '/favicon.png';

function createNavSection() {
  const headerSectionHtml = `
    <nav>
      <ul>
        <a><li>[Home]</li></a>
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
