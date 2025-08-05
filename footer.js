// footer.js

const path = `ngmjohnstone/ngmjohnstone.github.io`;
async function fetchLatestCommit() {
  try {
      const response = await fetch(`https://api.github.com/repos/` + path + `/commits`);
      const commits = await response.json();
      if (commits.length > 0) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' }
        
          return `Last updated ${new Date(commits[0].commit.author.date).toLocaleDateString('en-GB', options)}`;
      }
  } catch (error) {
      console.error('Error fetching commit history:', error);
  }
  return `Last updated: Unable to fetch data`;
}

const footerText = await fetchLatestCommit();
const repoHistoryUrl = `https://github.com/` + path + `/commits/main/`;

function createFooterSection() {
    const footerSectionHTML = `
      <footer class="section-container">
        <br>
        <hr>
        <p>
          <a href=${repoHistoryUrl} target="_blank">
            ${footerText}
          </a>
        </p>
      </footer>
    `;
    return footerSectionHTML;
  }
  
export { createFooterSection };
  