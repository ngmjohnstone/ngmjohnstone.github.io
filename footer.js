// footer.js

const footerText = `Last updated Feb 2025`;

function createFooterSection() {
    const footerSectionHTML = `
      <footer>
        <br>
          <p>${footerText}</p>
      </footer>
    `;
    return footerSectionHTML;
  }
  
export { createFooterSection };
  