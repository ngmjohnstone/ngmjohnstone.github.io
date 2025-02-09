// projects.js

const projectsTitle = 'Personal Projects';
const projectsText = `My work with clients is often confidential but here are some of my own hobby projects: `;
const projects = [
    {
        title: "This website",
        description: "Vite static site deployed with GitHub Pages",
        link: "https://github.com/ngmjohnstone/ngmjohnstone.github.io"
    },
];

function createProjectsSection() {

    const projectItemHtml = projects.map(projectItem => `
        <tr>
            <td>${projectItem.title}</td>
            <td>${projectItem.description}</td>
            <td>
                <a href=${projectItem.link} target="_blank">
                    ${projectItem.link}
                </a>
            </td>
        </tr>
    `).join(' ');


    const projectsSectionHtml = `
      <div id="projects">
        <h2>${projectsTitle}</h2>
        <p>${projectsText}</p>
        <table class="projects-table">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
            </tr>
            ${projectItemHtml}
        </table>
      </div>
    `;
    return projectsSectionHtml;
  }
  
export { createProjectsSection };