// about.js

const aboutTitle = 'About Me';
const profileImageUrl = '/favicon.png';
const aboutText = `
  Software engineer with professional experience in both public and private sectors,
  utilising a wide range of technologies and programming languages, and a passion for functional programming.
  `;

function createAboutSection() {
    const aboutSectionHTML = `
      <div id="about" class="about">
        <h2>${aboutTitle}</h2>
        <img src="${profileImageUrl}" alt="Profile image" class="profile-image">
        <p>${aboutText}</p>
      </div>
    `;
    return aboutSectionHTML;
  }
  
export { createAboutSection };
  