//warrior
$("#warriorSelect").on("click", insertPlayerClassWarrior);
function insertPlayerClass(event) {
  event.preventDefault();
  var warrior = {
    class: "warrior"
  };
  $.post("/api/warriors", warrior);
  console.log(warrior);
}
//cleric
$("#clericSelect").on("click", insertPlayerClassCleric);
function insertPlayerClassCleric(event) {
  event.preventDefault();
  var cleric = {
    class: "cleric"
  };
  $.post("/api/warriors", cleric);
  console.log(cleric);
}
//wizard
$("#wizardSelect").on("click", insertPlayerClassWizard);
function insertPlayerClassWizard(event) {
  event.preventDefault();
  var wizard = {
    class: "wizard"
  };
  $.post("/api/wizards", wizard);
  console.log(wizard);
}
//banker
$("#bankerSelect").on("click", insertPlayerClassBanker);
function insertPlayerClassBanker(event) {
  event.preventDefault();
  var banker = {
    class: "banker"
  };
  $.post("/api/bankers", insertPlayerClassBanker);
  console.log(banker);
}
