var playerName = $("#playerName");

$("#playerNameSubmit").on("click", insertPlayerName);
console.log(this + "clicked");

function insertPlayerName(event) {
  event.preventDefault();
  var player = {
    name: playerName.val().trim()
  };

  $.post("/api/players", player);
  console.log(player);

}

