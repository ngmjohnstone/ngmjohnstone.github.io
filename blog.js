// blog.js

const substackProfileUrl = 'https://substack.com/@ngmjohnstone';
const blogTitle = 'Blog';

function createBlogSection() {
    const blogSectionHtml = `
      <section class="section-container" id="blog">
        <h2>${blogTitle}</h2>
        <p>
          <a href="${substackProfileUrl}" target="_blank" rel="noopener noreferrer">
            [Read my posts on Substack]
          </a>
        </p>
      </section>
    `;
    return blogSectionHtml;
  }

export { createBlogSection };
