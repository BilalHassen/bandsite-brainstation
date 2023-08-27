let showsArray = [];

const apiKey = "87bd8a87-b5be-429b-a80c-174900ddd7b9";

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
  const dateFormat = new Date(showsData.date);
  const dateString =
    dateFormat.getDate() +
    "/" +
    (dateFormat.getMonth() + 1) +
    "/" +
    dateFormat.getFullYear();
  showsDateParaTwo.textContent = dateString;
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
  showsVenueParaTwo.textContent = showsData.place;
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
  axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=" + apiKey)
    .then((response) => {
      showsArray = response.data;
      showsArray.forEach((showsElement) => {
        const showCard = createShowsWrapper(showsElement);
        showsContainer.appendChild(showCard);
      });
    });
}

presentShows();
