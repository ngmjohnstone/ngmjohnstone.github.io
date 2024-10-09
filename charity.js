// charity.js

const charityTitle = 'Charity';
const charityText = `
  I enjoy fundraising for charities through distance running.
  Here are some of the charities I've raised money for over the years:
  `;

const charities = [
    {
        name: "Bowel Cancer UK",
        logo: "https://www.bowelcanceruk.org.uk/site/images/logo/bowelcanceruk-share.png",
        url: "https://www.bowelcanceruk.org.uk/",
    },
    {
        name: "The Felix Project",
        logo: "https://thefelixproject.org/uploads/branding/Felix-Signature.png",
        url: "https://thefelixproject.org/",
    },
    {
        name: "Macmillan Cancer Support",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfLOFDaah5gGog6basUVuhr433fEDua76Hg&s",
        url: "https://www.macmillan.org.uk/",
    },
    {
        name: "The Royal Marsden Cancer Charity",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP448jCHxumztAsgNpnUGf27D9LP11FhI7JA&s",
        url: "https://www.royalmarsden.org/",
    },
    {
        name: "Shelter",
        logo: "https://images.ctfassets.net/6sxvmndnpn0s/1qQWlJLKM5rpZHETE32eLX/fc3c1d9f75930f9f5e4d4d0754806ec7/logo--d-england.png",
        url: "https://www.shelter.org.uk/",
    },
    {
        name: "Versus Arthritis",
        logo: "https://upload.wikimedia.org/wikipedia/en/8/83/Versus_Arthritis.jpg",
        url: "https://www.versusarthritis.org/",
    },
];

function createCharitySection() {

    const charitiesGridHtml = charities.map(charity => `
        <a href="${charity.url}" target="_blank">
            <div class="grid-item">
                <img src="${charity.logo}" alt="${charity.name} logo">
            </div>
        </a>
    `).join(' ');



    const charitySectionHtml = `
      <div id="charity" class="charity">
        <h2>${charityTitle}</h2>
        <p>${charityText}</p>
        <div id="image-grid" class="grid-container">
            ${charitiesGridHtml}
        </div>
      </div>
    `;
    return charitySectionHtml;
  }
  
export { createCharitySection };