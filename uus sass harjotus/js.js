document.getElementById("addParticipantButton").onclick = function(){
   let newUser = document.getElementById("name").value;
   let newLiElement = document.createElement("li");
   newLiElement.textContent = newUser;
   document.getElementById("participantList").appendChild(newLiElement);
   document.getElementById("name").innerHTML = "";
}