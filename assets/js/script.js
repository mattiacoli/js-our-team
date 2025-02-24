const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


console.log(teamMembers);


// select dom element

const cardEl = document.getElementById('card-section')

// Functions

//function to get value from objects array and put in markup
function getMembersCard(membersObj) {

  const {name, role, email, img} = membersObj

  const markup = `
          <div class="col-4">
          <div class="row">
            <div class="col-4 g-0">
              <img width="100%" src="./assets/${img}" alt="">
            </div>
            <div class="col-8 d-flex flex-column justify-content-between">
              <h4>${name}</h4>
              <p>${role}</p>
              <a href="">${email}</a>
            </div>
          </div>
        </div>
  `
 return markup

}


// function to automatize markup function for all members
function renderMemberCards (arr,domEl){
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const markup = getMembersCard(element)

    domEl.innerHTML += markup
    
  }
}



// invoke function

const renderTeam = renderMemberCards(teamMembers, cardEl)