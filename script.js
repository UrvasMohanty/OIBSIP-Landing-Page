const juiceElements = document.querySelectorAll(".juice-wrapper");
const title = document.querySelector("h1");
const description = document.querySelector(".juice-info");
const juiceWheel = document.querySelector(".juice-wheel");
const juiceText = document.querySelector(".juice-text");
const mainElement = document.querySelector("main");

let currentJuice = juiceElements[0];
let currentIndex = 0;

const juiceData = [
  {
    name: "Coca Cola",
    description: "Coca-Cola is a sweet, fizzy soft drink with a unique blend of flavors like vanilla and cinnamon, made from carbonated water, sugar or high fructose corn syrup, caramel color, caffeine, and natural flavors.",
    backgroundColor: "linear-gradient(90deg, rgb(200, 11, 11) 0%, rgba(220, 35, 35, 0.73) 30%, rgba(0, 0, 0, 0.82) 100%, rgb(0, 0, 0) 100%)",
    rotation: -45
  },
  {
    name: "Sprite",
    description: "Sprite is a clear, lemon-lime flavored, caffeine-free soft drink known for its crisp, refreshing taste and bubbly carbonation.Sprite is a clear, lemon-lime flavored, caffeine-free soft drink known for its crisp, refreshing taste and bubbly carbonation.",
    backgroundColor: "linear-gradient(90deg, rgb(6, 50, 115) 4%, rgb(27, 105, 188) 40%, rgb(29, 176, 13) 100%, rgb(7, 203, 46) 100%)",
    rotation: -135
  }, 
  {
    name: "Pepsi",
    description: "Pepsi is a bold, sweet, and fizzy cola-flavored soft drink made with carbonated water, sugar or high fructose corn syrup, caramel color, caffeine, and natural flavors, offering a slightly citrusy twist compared to other colas.",
    backgroundColor: "linear-gradient(90deg, rgb(177, 12, 12) 0%, rgb(170, 14, 14) 30%, rgb(8, 120, 218) 100%, rgb(1, 57, 148) 100%)",
    rotation: -225
  },
  {
    name: "Mountain Dew",
    description: "Mountain Dew is a highly caffeinated, citrus-flavored soft drink known for its bright yellow-green color, bold taste, and energizing fizz.",
    backgroundColor: "linear-gradient(90deg, rgb(13, 56, 2) 0%, rgb(70, 220, 6) 30%, rgb(199, 5, 5) 100%, rgb(112, 15, 15) 100%)",
    rotation: -315
  }
];

function updateJuiceDisplay(index) {
  juiceElements.forEach(el => el.classList.remove("activePhoto"));
  

  // Update current index
  currentIndex = index;
  
  // Update background
  mainElement.style.background = juiceData[index].backgroundColor;
  
  // Rotate wheels to specific position
  juiceWheel.style.transform = `rotate(${juiceData[index].rotation}deg)`;
  
  
  // Update text content
  title.textContent = juiceData[index].name;
  description.textContent = juiceData[index].description;
  
  // Update active photo
  currentJuice.classList.remove("activePhoto");
  juiceElements[index].classList.add("activePhoto");
  currentJuice = juiceElements[index];
  
  // Add fade animation
  juiceText.classList.add("fade-in");
  setTimeout(() => {
    juiceText.classList.remove("fade-in");
  }, 1000);
}

// Add click event listeners
juiceElements.forEach((element, index) => {
  element.addEventListener("click", () => updateJuiceDisplay(index));
});

// Initialize with first juice
updateJuiceDisplay(0);