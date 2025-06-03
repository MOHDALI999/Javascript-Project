let details = document.querySelector("#details");
let btnSubmit = document.querySelector("#btnsubmit");
let ul = document.querySelector(".list");
let image = document.querySelector("img");

function submit() {
  if (details.value.trim() === "") {
    return;
  } else {
    let value = details.value.trim();
    todolist(value);
  }
}
todolist = (value) => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let span1 = document.createElement("span");
  let icon = document.createElement("div");
  span1.innerHTML = `<i class="fa-solid fa-pen" style="color: #5f695c;"></i>`;
  span.innerHTML = `<i class="fa-solid fa-trash" style="color: #5f695c;"></i>`;
  icon.appendChild(span);
  icon.appendChild(span1);
  icon.classList.add("icon");
  li.textContent = value;
  li.appendChild(icon);
  ul.prepend(li);
  details.value = "";
  image.style.display = ul.children.length === 0 ? "block" : "none";
  span.addEventListener("click", () => {
    li.remove();
    image.style.display = ul.children.length === 0 ? "block" : "none";
  });
  span1.addEventListener("click",()=>{
    let updateTask=prompt("Update Task");
    li.firstChild.nodeValue=updateTask;
  })
};
