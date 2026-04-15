// blog.js

const blogTitle = 'Blog';
const blogText = `
    Stay tuned 👀
`;

function createBlogSection() {
    const blogSectionHtml = `
      <section class="section-container" id="blog">
        <h2>${blogTitle}</h2>
        <p>${blogText}</p>
      </section>
    `;
    return blogSectionHtml;
  }

//   <ul>
//   <li>
//       <a href="/blog/test.html">
//           [Test]
//       </a>
//   </li>
//   </ul>

export { createBlogSection };