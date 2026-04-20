// charity.js

const charityText = `
  I also enjoy fundraising for charities through distance running.
  Here are some of the charities I've raised money for over the years:
  `;

const charities = [
    {
        name: "Arthritis UK",
        url: "https://www.arthritis-uk.org/",
    },
    {
        name: "Bowel Cancer UK",
        url: "https://www.bowelcanceruk.org.uk/",
    },
    {
        name: "EY Foundation",
        url: "https://www.eyfoundation.com/en_uk/",
    },
    {
        name: "The Felix Project",
        url: "https://thefelixproject.org/",
    },
    {
        name: "Macmillan Cancer Support",
        url: "https://www.macmillan.org.uk/",
    },
    {
        name: "The Royal Marsden Cancer Charity",
        url: "https://www.royalmarsden.org/",
    },
    {
        name: "Shelter",
        url: "https://www.shelter.org.uk/",
    },
];

function createCharitySection() {
    const charityTitle = 'Charity';

    const charityItemHtml = charities.map(charityItem => `
        <li>
            <a href="${charityItem.url}" target="_blank">
                <span class="li-span">${charityItem.name}</span>
            </a>
        </li>
    `).join(' ');

    const charitySectionHtml = `
      <section class="section-container" id="charity">
        <h2>${charityTitle}</h2>
        <p>${charityText}</p>
        <ul class="list-container">
            ${charityItemHtml}
        </ul>
      </section>
    `;
    return charitySectionHtml;
  }
  
export { createCharitySection };