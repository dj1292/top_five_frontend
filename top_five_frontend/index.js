document.addEventListener("DOMContentLoaded", function() {
  // fetchUsers()
loginButton()
formButton()
})

function formButton(){
  const cardButton = document.querySelector("#createCard")
  cardButton.addEventListener("click", createForm)
}

function loginButton() {
  const login = document.querySelector("#loginForm")
  login.addEventListener("submit", submitLogin)
}

function submitLogin(event){
  event.preventDefault()
  const postRes = fetch("http://localhost:3000/api/v1/users", {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user: {
        name: event.target.name.value,
        age: event.target.age.value,
        location: event.target.location.value,
        bio: event.target.bio.value
      }
    })
  }).then(res => res.json())
  .then(data => renderUser(data))
  event.target.reset()
  // console.log(event.target.name.value, event.target.age.value, event.target.location.value, event.target.bio.value)
  // debugger
}



function createForm() {
  const main = document.querySelector("#main")
  const cardForm = document.createElement("FORM")
  cardForm.className = "card"
  cardForm.setAttribute("id", "card-form")
  main.appendChild(cardForm)

  // Create name label and input 
  const nameLabel = document.createElement('label')
  nameLabel.innerText = "Name"
  cardForm.appendChild(nameLabel)
  const nameInput = document.createElement("input")
  nameInput.setAttribute("id", "name")
  cardForm.appendChild(nameInput)

  //break
  const cardBreak = document.createElement("br")
  cardForm.appendChild(cardBreak)

  // Create category label and input 
  const categoryLabel = document.createElement("label")
  categoryLabel.innerText = "Category"
  cardForm.appendChild(categoryLabel)
  const categoryInput = document.createElement("input")
  categoryInput.setAttribute("id", "category")
  cardForm.appendChild(categoryInput)

  // break
  const cardBreak1 = document.createElement("br")
  cardForm.appendChild(cardBreak1)

  // The start of Top 5 entries
  const fivefavs = document.createElement("p")
  fivefavs.innerText = "Enter Favorites Here"
  cardForm.appendChild(fivefavs)

  // break
  const cardBreak2 = document.createElement("br")
  cardForm.appendChild(cardBreak2)

  // Top 5 first entry and label
  const entry1 = document.createElement('label')
  entry1.innerText = "1"
  cardForm.appendChild(entry1)
  const firstEntry = document.createElement('input')
  firstEntry.setAttribute("id", "firstEntry")
  cardForm.appendChild(firstEntry)

  // break
  const cardBreak3 = document.createElement("br")
  cardForm.appendChild(cardBreak3)

  // Top 5 second entry and label
  const entry2 = document.createElement('label')
  entry2.innerText = "2"
  cardForm.appendChild(entry2)
  const secondEntry = document.createElement('input')
  secondEntry.setAttribute("id", "secondEntry")
  cardForm.appendChild(secondEntry)

  // break
  const cardBreak4 = document.createElement("br")
  cardForm.appendChild(cardBreak4)

  // Top 5 third entry and label
  const entry3 = document.createElement('label')
  entry3.innerText = "3"
  cardForm.appendChild(entry3)
  const thirdEntry = document.createElement('input')
  thirdEntry.setAttribute("id", "thirdEntry")
  cardForm.appendChild(thirdEntry)

  // break
  const cardBreak5 = document.createElement("br")
  cardForm.appendChild(cardBreak5)

  // Top 5 fourth entry and label
  const entry4 = document.createElement('label')
  entry4.innerText = "4"
  cardForm.appendChild(entry4)
  const fourthEntry = document.createElement('input')
  fourthEntry.setAttribute("id", "fourthEntry")
  cardForm.appendChild(fourthEntry)

  // break
  const cardBreak6 = document.createElement("br")
  cardForm.appendChild(cardBreak6)

  // Top 5 fifth entry and label
  const entry5 = document.createElement('label')
  entry5.innerText = "5"
  cardForm.appendChild(entry5)
  const fifthEntry = document.createElement('input')
  fifthEntry.setAttribute("id", "fifthEntry")
  cardForm.appendChild(fifthEntry)

  //break
  const cardBreakAgain = document.createElement('br')
  cardForm.appendChild(cardBreakAgain)

  //Submit event listener and button
  const submit = document.createElement("Button")
  submit.innerText = "Submit Card"
  cardForm.appendChild(submit)
  cardForm.addEventListener("submit", submitForm)


  //like counter

}

function submitForm(event) {
  event.preventDefault()
  // console.log(event.target.name.value,         event.target.category.value, event.target.firstEntry.value,event.target.secondEntry.value,event.target.thirdEntry.value,event.target.fourthEntry.value,event.target.fifthEntry.value)
  const postResponse = fetch("http://localhost:3000/api/v1/cards", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      card: {
      user_id: 1,
      name: event.target.name.value, 
      category: event.target.category.value,
      firstEntry: event.target.firstEntry.value,
      secondEntry: event.target.secondEntry.value,
      thirdEntry: event.target.thirdEntry.value,
      fourthEntry: event.target.fourthEntry.value,
      fifthEntry: event.target.fifthEntry.value
    } 
  })
  }).then(res => res.json())
  .then(data => renderCard(data))
  event.target.reset()
}

function renderCard(data) {
  const cardContainer = document.querySelector("#main")
  const p1 = document.createElement("p")
  cardContainer.appendChild(p1)
}

// function fetchUsers() {
//   fetch("http://localhost:3000/api/v1/users")
//   .then(res => res.json())
//   .then(data => renderUsers(data))
// }

// function renderUsers(users) {
//   const usersContainer = document.querySelector(".content")
//   const usersList = document.querySelector("ul") 

//   users.map(function(user) {
//     const li = document.createElement("li")
//     li.innerText = user.name
//     usersList.appendChild(li)
//   })
// }



