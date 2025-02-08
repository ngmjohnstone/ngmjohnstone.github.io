// projects.js

const projectsTitle = 'Projects';

function createProjectsSection() {

    const charitySectionHtml = `
      <div id="projects">
        <h2>${projectsTitle}</h2>
        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
            </tr>
            <tr>
                <td>TBA</td>
                <td>TBB</td>
                <td>TBC</td>
            </tr>
        </table>
      </div>
    `;
    return charitySectionHtml;
  }
  
export { createProjectsSection };