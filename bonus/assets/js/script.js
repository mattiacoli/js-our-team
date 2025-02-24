const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];


console.log(teamMembers);


// select dom element

const cardEl = document.getElementById('card-section')

// Functions

//function to get value from objects array and put in markup
/**
 * Generates an HTML markup string for a team member card.
 * @param {object} membersObj -The team member object.
 * @returns {string} - The generated HTML string for the team member card.
 */
function getMembersCard(membersObj) {
  // select key from object
  const {name, role, email, img} = membersObj
 
  // get markup elements
  const markup = `
          <div class="col-4">
          <div class="row">
            <div class="col-4  g-0">
              <img width="100%" src="${img}" alt="">
            </div>
            <div class="col-8  bg-black d-flex flex-column justify-content-center ">
              <h4>${name}</h4>
              <p>${role}</p>
              <a href="" class="text-decoration-none">${email}</a>
            </div>
          </div>
        </div>
  `
 return markup

}


// function to automatize markup function for all members
/**
 * Renders multiple team member cards inside a given DOM element.
 * @param {Object[]} arr - An array of team member objects.
 * @param {HTMLElement} domEl - The DOM element where the cards will be rendered.
 */
function renderMemberCards (arr,domEl){
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const markup = getMembersCard(element)

    domEl.innerHTML += markup
    
  }
}



// invoke function

const renderTeam = renderMemberCards(teamMembers, cardEl)

// Form
// select form node by id
const formEl = document.getElementById("new-member")
// add event listner
formEl.addEventListener('submit', (e) =>{
  //prevent default
  e.preventDefault()
  
  // select dom element
  const name = document.getElementById('name').value
  const role = document.getElementById('role').value
  const email = document.getElementById('mail').value
  const img = document.getElementById('image').value

  const member = {
    name,
    role,
    email,
    img,
  }

  const markup = getMembersCard(member)

  cardEl.innerHTML += markup
})