let interest = document.querySelectorAll(".interest__check");
for (let item of interest) {
  let interestCheck = item.closest(".interest").querySelectorAll(".interest__check");
  item.addEventListener("click", function putChecked() {
    if (item.checked) {
      if (interestCheck) {
        for (let subMenu of interestCheck) {
          subMenu.checked = true;
        }
      }
    } else {
      for (let subMenu of interestCheck) {
        subMenu.checked = false;
      }
    }
  })
}