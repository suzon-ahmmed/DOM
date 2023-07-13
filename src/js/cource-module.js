const milestonesData = JSON.parse(data).data;
// console.log(milestonesData);

// load course milestone data
function loadMilestone() {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      // console.log(milestone._id);
      return `
    <div class="milestone" id="${milestone._id}">
    <div class="flex items-center">
        <div class="-mt-1 mr-2 checkbox" ><input type="checkbox" onclick="checkMilestone(this, 
            ${milestone._id})" />
        </div>
        <div onclick="openMilestone(this, ${milestone._id})">
            <p class="flex items-center justify-between">
               <span class="w-[80%] line-clamp-1"> ${milestone.name}</span>
                <i class="fas fa-chevron-down text-xs pl-1 "></i>
            </p>
        </div>
    </div>
    <div class="hidden_panel">
        ${milestone.modules
          .map(function (module) {
            return `
            <div class="module border-b border-gray-200 dark:border-gray-600">
            <p>${module.name}</p>
        </div>
        `;
          })
          .join("")}
    </div>
</div>
    `;
    })
    .join("")}`;
}
function openMilestone(milestoneElement, id) {
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  const active = document.querySelector(".active");

  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }
  milestoneElement.classList.toggle("active");

  if (!currentPanel.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }

  currentPanel.classList.toggle("show");

  //   const currentPanelIcon = milestoneElement.querySelector(".fa-chevron-down");
  //   currentPanelIcon.classList.toggle("fa-chevron-up");

  showMilestone(id);
}

function showMilestone(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetail = document.querySelector(".details");

  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestonesData[id].image;
  milestoneTitle.innerText = milestonesData[id].name;
  milestoneDetail.innerText = milestonesData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
  this.style.opacity = "1";
};

function checkMilestone(checkbox, id) {
  const milestoneList = document.querySelector(".milestones");
  const doneList = document.querySelector(".doneList");
  const item = document.getElementById(id);

  if (checkbox.checked) {
    milestoneList.removeChild(item);
    doneList.appendChild(item);
  } else {
    milestoneList.appendChild(item);
    doneList.removeChild(item);
  }
}

loadMilestone();

