const ads = [
  {
    id: 1,
    img: "./logos/download(1).jpg",
    name: `bmw`,
    type: `car`,
    text: `Best Deals Ever`,
  },
  {
    id: 2,
    img: "./logos/download(2).jpg",
    name: `toyota`,
    type: `car`,
    text: `Best Deals Ever`,
  },
  {
    id: 3,
    img: `./logos/download(3).png`,
    name: `lenovo`,
    type: `laptop`,
    text: `Best Deals Ever`,
  },
  {
    id: 4,
    img: `./logos/download(4).png`,
    name: `accer`,
    type: `laptop`,
    text: `Best Deals Ever`,
  },
  {
    id: 5,
    img: `./logos/download(5).png`,
    name: `mercedes-benz`,
    type: `car`,
    text: `Best Deals Ever`,
  },
  {
    id: 6,
    img: `./logos/download(6).png`,
    name: `vw`,
    type: `car`,
    text: `Best Deals Ever`,
  },
  {
    id: 7,
    img: `./logos/download(7).png`,
    name: `movies`,
    type: `show`,
    text: `Best Deals Ever`,
  },
  {
    id: 8,
    img: `./logos/download(8).png`,
    name: `sumsang`,
    type: `cellphone`,
    text: `Best Deals Ever`,
  },
  {
    id: 9,
    img: `./logos/download(9).png`,
    name: `oneplus`,
    type: `cellphone`,
    text: `Best Deals Ever`,
  },
  {
    id: 10,
    img: `./logos/download(10).jpg`,
    name: `nissan`,
    type: `car`,
    text: `Best Deals Ever`,
  },
  {
    id: 11,
    img: `./logos/download(11).png`,
    name: `nokia`,
    type: `cellphone`,
    text: `Best Deals Ever`,
  },
  {
    id: 12,
    img: `./logos/download(12).png`,
    name: `hp`,
    type: `laptop`,
    text: `Best Deals Ever`,
  },
  {
    id: 13,
    img: `./logos/download(13).png`,
    name: `audii`,
    type: `car`,
    text: `Best Deals Ever`,
  },
  {
    id: 14,
    img: `./logos/download(14).png`,
    name: `songs`,
    type: `music`,
    text: `Best Deals Ever`,
  },
  {
    id: 15,
    img: `./logos/download(15).png`,
    name: `iphone`,
    type: `cellphone`,
    text: `Best Deals Ever`,
  },
];

// stuff to select
let article = document.querySelector(".glide__slides");
// BUTTONS

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let count = 0;
window.addEventListener("DOMContentLoaded", function () {
    displayItems(ads);
    new Glide(".glide",{
      type:"carousel",
      perView:3,
      breakpoints:{
        800:{
          perView:2,
        },
        470:{
          perView:1,
        }
      }
    }).mount();
});

function displayItems(array) {
  let items = array.map(function (val, idx) {
   
    if (idx < 15) {
      return `  <li class="glide__slide">
              <div class="advert ">
              <!-- heading -->
              <header>
                <h2 class="title">Brands</h2>
              </header>
              <!-- imgs -->
              <div class="ads-img">
                <a href="">
                  <img src="${val.img}" alt="${val.name}" />
                </a>
              </div>
              <!-- brand name -->
            <p class="brandname"><a href="#">${val.name}</a></p>
              </div>
           </li>
               
               `;
    }
  });

  return (article.innerHTML = items.join(""));
}

