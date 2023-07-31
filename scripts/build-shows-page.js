const showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East ",
    location: "San Francisco, CA ",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function createShowsWrapper(showsData) {
  let showsContainer = document.querySelector(".shows");
  // div for shows card
  let showCard = document.createElement("div");
  showCard.classList.add("shows__card");
  showsContainer.appendChild(showCard);

  //div for shows date
  let showsDate = document.createElement("div");
  showsDate.classList.add("shows__date");
  showCard.appendChild(showsDate);

  //para for shows date
  let showsDatePara = document.createElement("p");
  showsDatePara.classList.add("shows__date-para");
  showsDatePara.textContent = "DATE";
  showsDate.appendChild(showsDatePara);

  //second para for shows date
  let showsDateParaTwo = document.createElement("p");
  showsDateParaTwo.classList.add("shows__date-para2");
  showsDateParaTwo.textContent = showsData.date;
  showsDate.appendChild(showsDateParaTwo);

  // div for venue
  let showsVenue = document.createElement("div");
  showsVenue.classList.add("shows__venue-para");
  showCard.appendChild(showsVenue);

  //para for venue div
  let showsVenuePara = document.createElement("p");
  showsVenuePara.classList.add("shows__venue-para");
  showsVenuePara.textContent = "VENUE";
  showsVenue.appendChild(showsVenuePara);

  //second para for shows venue
  let showsVenueParaTwo = document.createElement("p");
  showsVenueParaTwo.classList.add("shows__venue-para2");
  showsVenueParaTwo.textContent = showsData.venue;
  showsVenue.appendChild(showsVenueParaTwo);

  // div for shows location
  let showsLocation = document.createElement("div");
  showsLocation.classList.add("shows__location");
  showCard.appendChild(showsLocation);

  //para for shows location
  let showsLocationPara = document.createElement("p");
  showsLocationPara.classList.add("shows__location-para");
  showsLocationPara.textContent = "LOCATION";
  showsLocation.appendChild(showsLocationPara);

  //para for shows location
  let showsLocationParaTwo = document.createElement("p");
  showsLocationParaTwo.classList.add("shows__location-para2");
  showsLocationParaTwo.textContent = showsData.location;
  showsLocation.appendChild(showsLocationParaTwo);

  // button
  let showsButton = document.createElement("button");
  showsButton.classList.add("shows__button");
  showsButton.textContent = "BUY TICKETS";
  showCard.appendChild(showsButton);

  return showCard;
}

function presentShows() {
  let showsContainer = document.querySelector(".shows");

  showsArray.forEach((showsElement) => {
    const showCard = createShowsWrapper(showsElement);
    showsContainer.appendChild(showCard);
  });
}

presentShows();
