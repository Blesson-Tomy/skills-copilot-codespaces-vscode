function skillsMember(){
      var member = document.getElementById("member");
  var memberText = member.options[member.selectedIndex].text;
  if(memberText == "Select Member")
{
    alert("Please select a member!");
  }
  else
  {
    var result = document.getElementById("result");
    result.innerHTML = memberText;
  }
}
