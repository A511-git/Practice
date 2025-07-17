// @type {CSSStyleDeclaration}


Object.assign(document.body.style, {
    margin: "0",
    padding: "0",
    backgroundColor: "black",
    color: "white",
});

const weeks = document.getElementsByClassName("weeks")[0];
const days = Array.from(weeks.querySelectorAll("h3"));

Object.assign(weeks.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "20px 10px",
    gap: "10px",
})

days.forEach(day => {
    day.style.width = "100px"
    day.style.height = "50px";
    day.style.margin = "0";
    day.style.padding = "0";
    day.style.border = "2px solid white";
    day.style.textAlign = "center";
    day.style.display = "flex";
    day.style.justifyContent = "center";
    day.style.alignItems = "center";
})
days[0].style.color = "red";
days[0].style.border = "2px solid red";
days[6].style.color = "pink";
days[6].style.border = "2px solid pink";
days[5].style.color = "green";
days[5].style.border = "2px solid green";

//create and add a UL
const ul=document.createElement("ul");
ul.classList.add("boxes");
document.body.appendChild(ul);
console.log(document.body)

//function to add list items in ul
function addLiItems(text){
const li=document.createElement("li");
li.appendChild(document.createTextNode(`${text}`))
document.querySelector("ul").appendChild(li)
}
addLiItems("bokka chan");
addLiItems("bokka chan");
addLiItems("bokka chan");

//function to edit list items
function editLiItems(text, position1, position2){
const li = document.querySelectorAll("ul")[position1].querySelectorAll("li")[position2];
if (li.firstChild?.nodeType === 3) {
  li.firstChild.replaceWith(document.createTextNode(text));
}}
editLiItems("bokka chan 2",0,1)

console.log(document.querySelector("ul"))
