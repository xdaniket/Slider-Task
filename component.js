const data = [
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "assets/image/Image1.jpg",
  },
  {
    name: "John Doe",
    position: "Chief Engagement Officer",
    company: "Acquia",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "assets/image/Image2.jpg",
  },
  {
    name: "John Doe",
    position: "Chief Technical Developer",
    company: "Pantheon",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "assets/image/Image3.jpg",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Specbee",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "assets/image/Image4.jpg",
  },
];

const modal = document.getElementById("modal");
modal.style.display = "none";
const cardContainer = document.getElementById("cardContainer");

function showModal(item) {
  modal.innerHTML = "";
  const closeButtonContainer = document.createElement("div");
  closeButtonContainer.className = "closeButtonContainer";
  const closeButton = document.createElement("button");
  closeButton.className = "closeButton";
  closeButton.innerText = "x";
  closeButton.addEventListener("click", closeModal);
  closeButtonContainer.appendChild(closeButton);

  const speakerDetail = document.createElement("div");
  speakerDetail.className = "speakerDetail";

  const speakerInfo = document.createElement("div");
  speakerInfo.className = "speakerInfo";

  const speakerDescription = document.createElement("div");
  speakerDescription.className = "speakerDescription";

  const image = document.createElement("div");
  image.className = "image";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;

  image.appendChild(img);

  const details = document.createElement("div");
  details.className = "details";

  const name = document.createElement("div");
  name.className = "name";
  name.innerText = item.name;

  const post = document.createElement("div");
  post.className = "post";
  post.innerText = item.position;

  const company = document.createElement("div");
  company.className = "company";
  company.innerText = item.company;

  const socialMedia = document.createElement("div");
  socialMedia.className = "socialMedia";

  const random = document.createElement("img");
  random.src = "assets/image/Random.png";

  const twitter = document.createElement("img");
  twitter.src = "assets/image/Twitter.png";

  const linkedin = document.createElement("img");
  linkedin.src = "assets/image/Linkedin.png";

  socialMedia.appendChild(random);
  socialMedia.appendChild(twitter);
  socialMedia.appendChild(linkedin);

  speakerDescription.innerText = item.description;

  details.appendChild(name);
  details.appendChild(post);
  details.appendChild(company);
  details.appendChild(socialMedia);

  speakerInfo.appendChild(image);
  speakerInfo.appendChild(details);

  speakerDetail.appendChild(speakerInfo);
  speakerDetail.appendChild(speakerDescription);

  modal.appendChild(closeButtonContainer);
  modal.appendChild(speakerDetail);

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

data.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("div");
  image.className = "image";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;

  image.appendChild(img);
  card.appendChild(image);

  const name = document.createElement("div");
  name.className = "name";
  name.innerText = item.name;

  const post = document.createElement("div");
  post.className = "post";
  post.innerText = item.position;

  const company = document.createElement("div");
  company.className = "company";
  company.innerText = item.company;

  card.appendChild(name);
  card.appendChild(post);
  card.appendChild(company);

  card.addEventListener("click", () => showModal(item));
  cardContainer.appendChild(card);
});
