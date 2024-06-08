
// Object to store beach information
const beachInfo = [ 
  {
    title: 'Whitehaven Beach, Australia',
    image: 'https://whitehaven-beach.com/wp-content/uploads/2022/07/Whitehaven-Beach-Whitsunday-Island-Queensland-Australia.jpg'
  },
  {
    title: 'Grace Bay, Turks and Caicos',
    image: 'https://content.r9cdn.net/rimg/dimg/fc/8c/421ecf32-city-73299-1693e82b602.jpg?width=1366&height=768&xhint=1007&yhint=936&crop=true'
  },
  {
    title: 'Baia do Sancho, Brazil',
    image: 'https://www.cnn.com/interactive/travel/best-beaches/baia-do-sancho/images/photo2.jpg'
  },
  {
    title: 'Navagio Beach, Greece',
    image: 'https://expertvagabond.com/wp-content/uploads/shipwreck-beach-navagio-guide.jpg'
  },
  {
    title: 'Playa Paraiso, Mexico',
    image: 'https://www.bookaway.com/blog/wp-content/uploads/2023/01/Playa-paraiso-.jpg'
  },
  {
    title: 'Anse Source d\'Argent, Seychelles',
    image: 'https://www.weseektravel.com/wp-content/uploads/2021/12/anse-source-dargent-la-digue-best-beach-2.jpg'
  },
  {
    title: 'Seven Mile Beach, Cayman Islands',
    image: 'https://media.lmpm.website/uploads/sites/16/2024/04/seven-mile-beautiful-beach.jpg'
  },
  {
    title: 'Bora Bora, French Polynesia',
    image: 'https://travelingcanucks.com/wp-content/uploads/2023/07/bora-bora-52-scaled.jpg'
  },
  {
    title: 'Lanikai Beach, Hawaii',
    image: 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2022/10/h/s/20221018-lanikaiparking-ctf-gettyimages-509805766-1024x683.jpg'
  },
  {
    title: 'Pink Sands Beach, Bahamas',
    image: 'https://seaglassjewelrybyjane.com/wp-content/uploads/2016/10/Pink-Sands-Beach-Harbour-Island-Bahamas.jpg'
  }
];

// Object where we have all the beaches
const beachList = document.querySelector('ul');

// If the card for beach details is not present, create it
if (!document.getElementById('card')) {
  document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div id="beach-card" class="card">
      <h2 id="card-title"></h2>
      <p id="card-description"></p>
      <img id="card-image" src="" />
    </div>
  `);
}

// If the close button for the alert is not present, create it
if (!document.getElementById('close-alert')) {
  document.querySelector('section:first-of-type').insertAdjacentHTML('beforeend', `<button id="close-alert">Start browsing</button>`);
}

// If the menu button is not present, create it
if (!document.getElementById('open-button')) {
  document.querySelector('header').insertAdjacentHTML('beforeend', `<button id="open-menu">...</button>`);
}

// Add event listener to close button
document.getElementById('close-alert').addEventListener('click', closeAlert);

// Add event listener to menu button
document.getElementById('open-menu').addEventListener('click', openMenu);

// Object for the beach details
const beachDetail = document.getElementById('beach-card');

// Loop through all the beaches and add event listeners
beachList.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', showBeachDetails, false);
});

// Trigger click event on the first li
beachList.querySelector('li').click();

// Function to show the beach details
function showBeachDetails(event) {
  let obj = event.target;
  if (event.target.tagName !== 'LI') obj = event.target.parentNode;
  
  obj.parentNode.querySelectorAll('li').forEach((li) => li.classList.remove('active'));
  obj.classList.add('active');

  const title = obj.querySelector('h3').textContent;
  const description = obj.querySelector('p').textContent;
  const image = beachInfo.find((beach) => beach.title === title).image;

  document.getElementById('card-title').textContent = title;
  document.getElementById('card-description').textContent = description;
  document.getElementById('card-image').src = image;

  // On mobile, close the menu
  if (window.innerWidth < 768) {
    closeMenu();
  }
}

// On resize, close the menu if the window is less than 768px
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Function to close the alert
function closeAlert() {
  document.querySelector('section:first-of-type').style.display = 'none';
}

// Function to toggle the menu
function openMenu() {
  document.querySelector('section:last-of-type').style.display = 'block';
}
function closeMenu() {
  document.querySelector('section:last-of-type').style.display = 'none';
}