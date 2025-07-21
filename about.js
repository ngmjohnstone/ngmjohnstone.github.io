// about.js

const aboutTitle = 'About Me';
const aboutText = `
  Software engineer with professional experience in both public and private sectors,
  utilising a wide range of technologies and programming languages, and a passion for functional programming.
  `;

function createAboutSection() {
    const aboutSectionHTML = `
      <div class="section-container" id="about">
        <h2>${aboutTitle}</h2>
        <p>${aboutText}</p>
      </div>
    `;
    return aboutSectionHTML;
  }
  
export { createAboutSection };
  