function slider(assets, navigation) {
  const root = document.querySelector("#root");

  const frame = document.createElement("div");
  const cards = document.createElement("div");
  const triggers = document.createElement("div");

  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");

  leftBtn.textContent = navigation.left;
  rightBtn.textContent = navigation.right;

  triggers.append(leftBtn, rightBtn);
  frame.append(cards, triggers);
  root.append(frame);

  frame.classList.add("frame");
  cards.classList.add("cards");
  triggers.classList.add("triggers");

  assets.forEach((imageUrl) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url("${imageUrl}")`;
    cards.append(card);
  });

  let sliderIndex = 0;

  leftBtn.addEventListener("click", goLeft);

  rightBtn.addEventListener("click", goRight);

  function goRight() {
    if (sliderIndex < assets.length - 1) {
      sliderIndex++;
      cards.style.left = `${sliderIndex * -1 * 500}px`;
      addActive(sliderIndex);
    }
  }

  function goLeft() {
    if (sliderIndex !== 0) {
      sliderIndex--;
      cards.style.left = `${sliderIndex * -1 * 500}px`;
      addActive(sliderIndex);
    }
  }
  function addActive(idx) {
    const btn = document.getElementById(idx);
    const allBtns = document.querySelectorAll(".rounds > button");
    allBtns.forEach((e) => {
      e.classList.remove("active");
    });
    btn.classList.add("active");
  }
  const roundsContainer = document.createElement("div");
  roundsContainer.classList.add("rounds");
  frame.append(roundsContainer);

  assets.forEach((_, ind) => {
    const button = document.createElement("button");
    button.setAttribute("id", ind);
    roundsContainer.append(button);

    if (ind === 0) {
      button.classList.add("active");
    }

    // const allRounds = roundsContainer.children;

    button.addEventListener("click", () => {
      sliderIndex = ind;
      cards.style.left = `${-1 * ind * 500}px`;

      // for (let i = 0; i < allRounds.length; i++) {
      //   allRounds[i].classList.remove("active");
      // }

      // button.classList.add("active");
      addActive(sliderIndex);
    });
  });
}

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

slider(images, { left: "prev", right: "next" });

// class Slider {
//   constructor() {}
// }
