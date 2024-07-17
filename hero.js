// hero.js

const heroBackgroundImage = 'path/to/your/background-image.jpg';
const heroHeading = `Hello, I'm Nathan`;
const heroSubheading = `Software Engineer`;

function createHeroSection() {
  const heroSectionHTML = `
    <div class="hero" style="background-image: url('${heroBackgroundImage}');">
      <div class="hero-content">
        <h1>${heroHeading}</h1>
        <h2>${heroSubheading}</h2>
      </div>
    </div>
  `;
  return heroSectionHTML;
}

export { createHeroSection };
