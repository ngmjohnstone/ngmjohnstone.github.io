// about.js

const aboutTitle = 'About Me';
const profileImageUrl = '/favicon.png';
const aboutText = `Updates coming soon...`;

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
  