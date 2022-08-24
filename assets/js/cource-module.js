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
            <p>
                ${milestone.name}
                <span><i class="fas fa-chevron-down text-xs pl-1 "></i></span>
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

// // load course milestones data
// function loadMilestones() {
//   const milestones = document.querySelector(".milestones");

//   milestones.innerHTML = `${milestonesData
//     .map(function (milestone) {
//       return `<div class="milestone border-b" id="${milestone._id}">
//       <div class="flex">
//         <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
//           milestone._id
//         })" /></div>
//         <div onclick="openMilestone(this, ${milestone._id})">
//           <p>
//             ${milestone.name}
//             <span><i class="fas fa-chevron-down"></i></span>
//           </p>
//         </div>
//       </div>
//       <div class="hidden_panel">
//         ${milestone.modules
//           .map(function (module) {
//             return `<div class="module border-b">
//             <p>${module.name}</p>
//           </div>`;
//           })
//           .join("")}
//       </div>
//     </div>`;
//     })
//     .join("")}`;
// }

// function openMilestone(milestoneElement, id) {
//   const currentPanel = milestoneElement.parentNode.nextElementSibling;
//   const shownPanel = document.querySelector(".show");
//   const active = document.querySelector(".active");

//   // first remove previous active class if any [other than the clicked one]
//   if (active && !milestoneElement.classList.contains("active")) {
//     active.classList.remove("active");
//   }

//   // toggle current clicked one
//   milestoneElement.classList.toggle("active");

//   // first hide previous panel if open [other than the clicked element]
//   if (!currentPanel.classList.contains("show") && shownPanel)
//     shownPanel.classList.remove("show");

//   // toggle current element
//   currentPanel.classList.toggle("show");

//   showMilestone(id);
// }

// function showMilestone(id) {
//   const milestoneImage = document.querySelector(".milestoneImage");
//   const name = document.querySelector(".title");
//   const details = document.querySelector(".details");

//   milestoneImage.style.opacity = "0";
//   milestoneImage.src = milestonesData[id].image;
//   name.innerText = milestonesData[id].name;
//   details.innerText = milestonesData[id].description;
// }

// // listen for hero image load
// const milestoneImage = document.querySelector(".milestoneImage");
// milestoneImage.onload = function () {
//   this.style.opacity = "1";
// };

// function markMileStone(checkbox, id) {
//   const doneList = document.querySelector(".doneList");
//   const milestonesList = document.querySelector(".milestones");
//   const item = document.getElementById(id);

//   if (checkbox.checked) {
//     // mark as done
//     milestonesList.removeChild(item);
//     doneList.appendChild(item);
//   } else {
//     // back to main list
//     milestonesList.appendChild(item);
//     doneList.removeChild(item);

//     // task - do the sorting
//     // reload list
//   }
// }

// loadMilestones();
