function checkText()
{

if(document.getElementById('bol').value.length<1){
document.getElementById("error").style.display="inline-block";
document.getElementById("bol").style.border="solid 1px red";
}
else{
  document.getElementById("bol").style.border="solid 1px grey"
}
if(document.getElementById('bol2').value==""){
  document.getElementById("error").style.display="inline-block";
  document.getElementById("bol2").style.border="solid 1px red"
}
else{
  document.getElementById("bol2").style.border="solid 1px grey"
}
return 0;
}

function checktext(){
  var boolean = true;
  if(document.getElementById('a1').value.length<1)
  {
  document.getElementById("error").style.display="inline-block";
  document.getElementById("a1").style.border="solid 1px red";
  boolean = false;
  }
  else{
    document.getElementById("a1").style.border="solid 1px grey"
  }
  if(document.getElementById('a2').value==""){
    document.getElementById("error").style.display="inline-block";
    document.getElementById("a2").style.border="solid 1px red";
    boolean = false;
  }
  else{;
    document.getElementById("a2").style.border="solid 1px grey"
  }
  if(document.getElementById('a3').value.length<1)
  {
  document.getElementById("error").style.display="inline-block";
  document.getElementById("a3").style.border="solid 1px red";
  boolean = false;
  }
  else{
    document.getElementById("a3").style.border="solid 1px grey"
  }
  if(document.getElementById('a4').value.length<1)
  {
  document.getElementById("error").style.display="inline-block";
  document.getElementById("a4").style.border="solid 1px red";
  boolean = false;
  }
  else{
    document.getElementById("a4").style.border="solid 1px grey"
  }
  if(document.getElementById('a5').value.length<1)
  {
  document.getElementById("error").style.display="inline-block";
  document.getElementById("a5").style.border="solid 1px red";
  boolean = false;
  }
  else{
    document.getElementById("a5").style.border="solid 1px grey"
  }
  if(document.getElementById('a6').value.length<1)
  {
  document.getElementById("error").style.display="inline-block";
  document.getElementById("a6").style.border="solid 1px red";
  boolean = false;
  }
  else{
    document.getElementById("a6").style.border="solid 1px grey"
  }
  if(document.getElementById('a7').value.length<1)
  {
  document.getElementById("error").style.display="inline-block";
  document.getElementById("a7").style.border="solid 1px red";
  boolean = false;
}
else{
  document.getElementById("a7").style.border="solid 1px grey"
}
if(document.getElementById("a5").value!=document.getElementById("a6").value){
  document.getElementById("a5").style.border="solid 1px red";
  document.getElementById("a6").style.border="solid 1px red";
  document.getElementById("error2").style.display="inline-block";
  boolean = false;
}
else{
  document.getElementById("error2").style.display="none";
}
var email = document.getElementById("a4").value
	var k = email.indexOf(0);
	if (k <= 0){
    document.getElementById("a4").style.border="solid 1px red";
    boolean = false;
  }
  return boolean;
}
