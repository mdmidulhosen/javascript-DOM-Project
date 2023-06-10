const milestonesData = JSON.parse(data).data;

function loadMileStones(){
  const mileStones = document.querySelector(".milestones");

  mileStones.innerHTML = `${milestonesData.map(function(mileStone){

    return `<div class="milestone border-b" id="${mileStone._id})">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" /></div>
      <div onclick="HiddenItem(this, ${mileStone._id})">
        <p id="bold-item">
          ${mileStone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${mileStone.modules.map(function(module){
        return `<div class="module border-b">
        <p>${module.name}</p>
      </div>`
      }).join("")}
    </div>
  </div>`

  }).join("")}`
}


function HiddenItem(mileStoneElement, id){
  const currentPanel = mileStoneElement.parentNode.nextElementSibling;
  const shownPanel   = document.querySelector(".show");
  const active   = document.querySelector(".active");

  mileStoneElement.classList.toggle("active")

  if(active && mileStoneElement.classList.contains("active")){
    active.classList.remove("active")
  }

  if(!currentPanel.classList.contains("show") && shownPanel){
    shownPanel.classList.remove("show")
  }

  currentPanel.classList.toggle("show")

  showMileStone(id);

}

function showMileStone(id){
  const mileStoneImage = document.querySelector(".milestoneImage")
  const title = document.querySelector(".title")
  const description = document.querySelector(".description")
  mileStoneImage.src = milestonesData[id].image;
  title.innerText = milestonesData[id].name;
  description.innerText = milestonesData[id].description;
}



loadMileStones()