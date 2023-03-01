let socket = io();
var input = document.querySelector("input");
var message = input.value;
let chatbox = document.getElementById("chatbox");
const sendMessage = (msg) => {
  if (msg != "") {
    socket.emit("sendMessage", msg);
    input.value = "";
    newMessage(msg, true);
    console.log(msg);
  }
};

const newMessage = (msg, sent) => {
  let container = document.createElement("div");
  if (sent) {
    container.setAttribute("class", "flex mb-4 justify-end");
  } else {
    container.setAttribute("class", "flex mb-4 justify-start");
    container.innerHTML += `<img src='https://source.unsplash.com/vpOeXr5wmR4/600x600' class="shadow object-cover h-8 w-8 rounded-full" alt="Avatar"/>`
  }
  let subContainer = document.createElement("div");
  if (sent) {
    subContainer.setAttribute(
        "class",
        "mr-2 shadow-md py-3 px-4 bg-amber-300 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl"
      );
  } else {
    subContainer.setAttribute('class', 'ml-2 py-3 shadow-md px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white')
  }
  subContainer.innerHTML = msg;
  container.appendChild(subContainer);
  if (sent) {
    container.innerHTML += `<img src='https://source.unsplash.com/vpOeXr5wmR4/600x600' class="shadow object-cover h-8 w-8 rounded-full" alt="Avatar"/>`
  } else {
    
  }
  chatbox.appendChild(container);
};

socket.on("newMessage", (msg) => {
  console.log(msg);
  newMessage(msg, false);
});

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("sendButton").click();
  }
});
