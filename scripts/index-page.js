let commentArray = [];

const apiKey = "87bd8a87-b5be-429b-a80c-174900ddd7b9";

function createCommentContainer(comment) {
  let commentCard = document.querySelector(".comment");
  let commentBox = document.createElement("div");
  commentBox.classList.add("comment__box");
  commentCard.appendChild(commentBox);

  //div for avatar
  let commentPic = document.createElement("div");
  commentPic.classList.add("comment__pic");
  commentBox.appendChild(commentPic);

  // comment text div // wrapper
  let textDiv = document.createElement("div");
  textDiv.classList.add("comment__text-div");
  commentBox.appendChild(textDiv);

  //div for name
  let commentName = document.createElement("div");
  commentName.classList.add("comment__name");
  textDiv.appendChild(commentName);

  //para for div name
  let namePara = document.createElement("p");
  namePara.classList.add("comment__name-txt");
  namePara.textContent = comment.name;
  commentName.appendChild(namePara);

  // date div
  let dateDiv = document.createElement("div");
  dateDiv.classList.add("comment__date");
  commentName.appendChild(dateDiv);

  //date para
  let datePara = document.createElement("p");
  datePara.classList.add("comment__date-p");
  const dateFormat = new Date(comment.timestamp);
  const dateString =
    dateFormat.getDate() +
    "/" +
    (dateFormat.getMonth() + 1) +
    "/" +
    dateFormat.getFullYear();
  datePara.textContent = dateString;
  dateDiv.appendChild(datePara);

  //text div
  let textBox = document.createElement("div");
  textBox.classList.add("comment__txt");
  textDiv.appendChild(textBox);

  let commenTxt = document.createElement("p");
  commenTxt.classList.add("comment__body-txt");
  commenTxt.textContent = comment.comment;
  textBox.appendChild(commenTxt);

  return commentBox;
}

function displayComment() {
  const commentCardContainer = document.querySelector(".comment");
  axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=" + apiKey)
    .then((response) => {
      commentArray = response.data;
      commentCardContainer.innerHTML = "";

      for (let i = commentArray.length - 1; i >= 0; i--) {
        const comment = createCommentContainer(commentArray[i]);
        commentCardContainer.appendChild(comment);
      }
    });
}

function handleFormSubmit(event) {
  event.preventDefault();

  console.log("handling submit");

  const commentInfo = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=" + apiKey,
      commentInfo
    )
    .then((response) => {
      commentArray.push(response.data);
      displayComment();
    });
}

const formElement = document.querySelector(".comment__container");
formElement.addEventListener("submit", handleFormSubmit);
displayComment();
