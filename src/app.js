const ItemBtn = document.querySelector(".item-btn");
const itemValue = document.getElementById("item-textarea");
const itemUl = document.querySelector('.item-list');



ItemBtn.addEventListener("click", () => {
  if (itemValue.value == "") {
    console.log("success");
  } else {

    let itemList = document.createElement("li")
    let itemDiv = document.createElement("div");
    let itemWrapper = document.createElement("div")
    let rmvIcon = document.createElement("div")

    itemWrapper.classList.add("item-wrapper")
    itemDiv.classList.add("flex", "items-center", "mb-4", "justify-between");
    rmvIcon.classList.add("x-icon");
    rmvIcon.setAttribute("id", "delete-item");

    let itemInput = document.createElement("input");
    itemInput.setAttribute("type", "checkbox");
    itemInput.setAttribute("id", "default-checkbox");
    itemInput.setAttribute("value", `${itemValue.value}`);
    itemInput.classList.add(
      "w-4",
      "h-4",
      "text-blue-600",
      "bg-gray-100",
      "border-gray-300",
      "rounded",
      "focus:ring-blue-500",
      "dark:focus:ring-blue-600",
      "dark:ring-offset-gray-800",
      "focus:ring-2",
      "dark:bg-gray-700",
      "dark:border-gray-600",

    );

    let itemLabel = document.createElement("label");
    itemLabel.setAttribute("for", "default=checkbox");
    itemLabel.classList.add(
      "ml-2",
      "text-m",
      "font-medium",
      "text-black-900",
      "dark:text-black-300"
    );
    rmvIcon.innerHTML = `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>`
    itemLabel.innerText = `${itemValue.value}`;
    itemDiv.appendChild(itemWrapper)
    itemWrapper.appendChild(itemInput);
    itemWrapper.appendChild(itemLabel);

    itemDiv.appendChild(rmvIcon)
    itemList.appendChild(itemDiv)

    console.log(itemUl.hasChildNodes())
    itemUl.appendChild(itemList);


    const checkItem = document.getElementById("default-checkbox");
    checkItem.addEventListener("change", () => {
      if (checkItem.checked) {
        console.log("Checkbox is checked");
        itemLabel.classList.add("text-item-done")

      } else if (itemLabel.classList.contains("text-item-done")) {
        console.log("Checkbox is not checked");
        itemLabel.classList.remove("text-item-done")

      }
    });

    itemValue.value = "";

    rmvIcon.addEventListener('click', ()=>{
      itemList.remove()
    })

  }

});

