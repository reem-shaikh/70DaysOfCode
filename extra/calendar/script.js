//tracking state of which month were looking at
let nav = 0
//clicked signifies which day we clicked on
let clicked = null
//events state is an array of local object
//localstorage - only stores strings

//Grab from events array and store it in local storage
//this line of code says, store the value inside events to localstorage if there's an item in it, if theres nothing in it return an empty array
let events = localStorage.getItem('events')
  ? JSON.parse(localStorage.getItem('events'))
  : []
//json.parse - converts JSON string to JS object
//to get an item we need it in JS object format

//constant values whch will be avaailble globally but wont change
const calendar = document.getElementById('calendar')
const newEventModal = document.getElementById('newEventModal')
const deleteEventModal = document.getElementById('deleteEventModal')
const backDrop = document.getElementById('modalBackDrop')
const eventTitleInput = document.getElementById('eventTitleInput')
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function openModal(date) {
  //we should know which date user clicked on, before we show the modal
  //clicked helps us determine which date user clicked on
  clicked = date

  //were trying to find an event when clicked
  //if there is an event in an array
  //we need to show that array
  const eventForDay = events.find((e) => e.date === clicked)

  if (eventForDay) {
    console.log('event already exists')
    document.getElementById('eventText').innerText = eventForDay.title
    deleteEventModal.style.display = 'block'
  } else {
    //initially its set to display:none
    newEventModal.style.display = 'block'
  }

  backDrop.style.display = 'block'
}

function load() {
  //create a date object
  const dt = new Date()
  console.log('dt', dt)

  //were checking if were on the same page
  //the nav is increemented at initButtons() function
  //if nav is not on the same page
  if (nav !== 0) {
    //this is the logic for setting the month when user clicks on the button
    dt.setMonth(new Date().getMonth() + nav)
    //if current month is 0 (JAN)
    //and nav is 1

    //then setMonth will be 0+1 = 1 which is february
  }

  const day = dt.getDate()
  const month = dt.getMonth()
  const year = dt.getFullYear()

  const firstDayOfMonth = new Date(year, month, 1)
  //1 signifies 1st day of the month (in this case first day off january)

  //how many days are there in the given month
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  // 0 signifies last day of the previos month (for example, last day of January)
  //-1 would signify second last day of the previos month

  //month+1 signifies the month after the month were on (in this case February)

  //this cclg says hw many days are there in january
  console.log('daysinmonths', daysInMonth)

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric', //1 for JAN
    day: 'numeric',
  })
  console.log('dateString', dateString)
  //friday, 1/1/2022

  //extracting the weekday after splitting based on ,
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0])
  //friday is the 5th element of weekdays[]
  console.log('paddingdays', paddingDays)

  //using string interpelation
  document.getElementById(
    'monthDisplay',
  ).innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`

  //were wiping off the entire calendar every time the forward or back button is clicked
  calendar.innerHTML = ''

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div')
    daySquare.classList.add('day')

    const dayString = `${month + 1}/${i - paddingDays}/${year}`

    //run logic when were on the day
    if (i > paddingDays) {
      //whats the current square we on
      daySquare.innerText = i - paddingDays
      //is there an event for the day were currentlu on
      const eventForDay = events.find((e) => e.date === dayString)

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay'
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div')
        eventDiv.classList.add('event')
        eventDiv.innerText = eventForDay.title
        daySquare.appendChild(eventDiv)
      }

      //run a function every time user clicks on the day square
      daySquare.addEventListener('click', () => openModal(dayString))
    }
    //we should be rendering a paddingday instead of a daysquare if i<paddingDays
    else {
      daySquare.classList.add('padding')
    }

    //placing the daysquare in the calendar
    calendar.appendChild(daySquare)
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error')
  newEventModal.style.display = 'none'
  deleteEventModal.style.display = 'none'
  backDrop.style.display = 'none'
  eventTitleInput.value = ''
  clicked = null
  load()
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error')

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    })

    //converting JSON object to JSON string and adding it to events
    //since its stored in JSON string format in local storage
    //to read / get it we need to convert it to JS object
    //we've acheived this above in events declaration
    localStorage.setItem('events', JSON.stringify(events))
    closeModal()
  } else {
    eventTitleInput.classList.add('error')
  }
}

//take all the events and filter out the single event that were deleting
function deleteEvent() {
  //it adds all the elements in the events[] that are not clicked into the events[]
  //which leaves out the one we actually clicked
  //we deleted from the array
  events = events.filter((e) => e.date !== clicked)
  //reseting the new events in lovalstorage
  localStorage.setItem('events', JSON.stringify(events))
  closeModal()
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++
    load()
  })

  document.getElementById('backButton').addEventListener('click', () => {
    nav--
    load()
  })

  document.getElementById('saveButton').addEventListener('click', saveEvent)
  document.getElementById('cancelButton').addEventListener('click', closeModal)
  document.getElementById('deleteButton').addEventListener('click', deleteEvent)
  document.getElementById('closeButton').addEventListener('click', closeModal)
}

initButtons()
load()
