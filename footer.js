// footer.js

const footerText = `Last updated Jul 2025`;

function createFooterSection() {
    const footerSectionHTML = `
      <footer class="section-container">
        <br>
        <hr>
        <p>
            ${footerText}
        </p>
      </footer>
    `;
    return footerSectionHTML;
  }
  
export { createFooterSection };
  