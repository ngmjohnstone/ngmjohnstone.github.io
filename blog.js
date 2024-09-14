// blog.js

const blogTitle = `Blog`
const blogPosts = [];
const noBlogPostsText = `No posts yet.`;

function createBlogSection() {
  const blogPostsHTML = blogPosts.length ?
    blogPosts.map(post => post) :
    `<p>${noBlogPostsText}</p>`;

  const blogSectionHTML = `
    <h2>${blogTitle}</h2>
    ${blogPostsHTML}`;
  return blogSectionHTML;
}

export { createBlogSection };