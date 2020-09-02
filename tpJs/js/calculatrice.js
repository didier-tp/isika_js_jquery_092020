
var zoneRes;

function initZones(){
	zoneRes=document.getElementById("spanRes");
}

function calculerOperation(pOperation){
		  initZones();
		  var inputA =  document.getElementById("inputA");
		  var a =  inputA.value;
		  console.log("a="+a);
		  var inputA =  document.getElementById("inputB");
		  var b =   inputB.value;
		  console.log("b="+b);
		  
		  var res = 0;
		  switch(pOperation){
		  case '+':
		      res = Number(a)+Number(b); // le + déclenche une concaténation entre 2 string
		                 //ou bien une addition entre 2 choses numériques
			  break;
		  case '*':
			  res=a*b;  break;
		  case '-':
			  res=a-b;  break;
		  case '/':
			  res=a/b;  break;
		  default:
			  res="?";  break;
		   }
		  
		  //document.getElementById("spanRes").innerHTML = res;
          zoneRes.innerHTML = res;
}