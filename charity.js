// charity.js

const charityText = `
  I also enjoy fundraising for charities through distance running.
  Here are some of the charities I've raised money for over the years:
  `;

const charities = [
    {
        name: "Bowel Cancer UK",
        url: "https://www.bowelcanceruk.org.uk/",
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP448jCHxumztAsgNpnUGf27D9LP11FhI7JA&s",
        url: "https://www.royalmarsden.org/",
    },
    {
        name: "Shelter",
        url: "https://www.shelter.org.uk/",
    },
    {
        name: "Versus Arthritis",
        url: "https://www.versusarthritis.org/",
    },
];

function createCharitySection() {

    const charityItemHtml = charities.map(charityItem => `
        <li>
            <a href="${charityItem.url}" target="_blank">
                <span class="li-span">${charityItem.name}</span>
            </a>
        </li>
    `).join(' ');

    const charitySectionHtml = `
      <div class="section-container" id="charity">
        <p>${charityText}</p>
        <ul class="list-container">
            ${charityItemHtml}
        </ul>
      </div>
    `;
    return charitySectionHtml;
  }
  
export { createCharitySection };