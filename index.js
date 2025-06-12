const startDate = new Date("2019-10-25T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365.25);
  const remainingDays = days % Math.floor(365.25);

  document.getElementById("timer").textContent =
    `${years} anos, ${remainingDays}  dias, ` +
    ` ${hours.toString().padStart(2, "0")}  horas, ` +
    ` ${minutes.toString().padStart(2, "0")}  minutos e  ` +
    ` ${seconds.toString().padStart(2, "0")}  segundos`;
}

updateTimer();
setInterval(updateTimer, 1000);

const imagePaths = [
  "assets/img1.jpeg",
  "assets/img2.jpeg",
  "assets/img4.jpeg",
  "assets/img5.jpeg",
  "assets/img6.jpeg",
  "assets/img7.jpeg",
  "assets/img8.jpeg",
  "assets/img9.jpeg",
  "assets/img10.jpeg",
  "assets/img12.jpeg",
  "assets/img13.jpeg",
  "assets/img14.jpeg",
  "assets/img15.jpeg",
  "assets/img16.jpeg",
  "assets/img17.jpeg",
  "assets/img18.jpeg",
  "assets/img19.jpeg",
  "assets/img20.jpeg",
  "assets/img21.jpeg",
  "assets/img22.jpeg",
];

const carouselInner = document.getElementById("carousel-inner");

imagePaths.forEach((path, index) => {
  const item = document.createElement("div");
  item.classList.add("carousel-item");
  if (index === 0) item.classList.add("active");

  const img = document.createElement("img");
  img.src = path;
  img.className = "d-block w-100";
  img.alt = `Slide ${index + 1}`;

  item.appendChild(img);
  carouselInner.appendChild(item);
});

const openLetterBtn = document.getElementById("open-letter-btn");
const closeLetterBtn = document.getElementById("close-letter-btn");
const letterModal = document.getElementById("letter-modal");

openLetterBtn.addEventListener("click", () => {
  letterModal.style.display = "block";
});

closeLetterBtn.addEventListener("click", () => {
  letterModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === letterModal) {
    letterModal.style.display = "none";
  }
});

