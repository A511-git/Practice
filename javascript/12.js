Object.assign(document.documentElement.style, {
    color: "white",
    backgroundColor: "black",
    margin:"0",
    padding:"0"
})

const container = document.getElementsByClassName("container")[0];
Object.assign(container.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    gap: "10px",
})

const title = container.querySelector("h1");
Object.assign(title.style, {
    backgroundColor: "green",
    padding: "0.5rem",
    border: "2px solid white",
    borderRadius: "25px",
})
Array.from(container.children).forEach (child=>{
    child.style.margin="0";
})
document.getElementsByTagName("ul")[0].firstElementChild.style.color="pink";
