const commentArray = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

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
  datePara.classList.add("comment__date");
  datePara.textContent = comment.date;
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

  commentCardContainer.innerHTML = "";

  for (let i = 0; i < commentArray.length; i++) {
    const comment = createCommentContainer(commentArray[i]);
    commentCardContainer.appendChild(comment);
  }
}
displayComment();
