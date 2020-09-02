
var zoneRes;

function initZones(){
	zoneRes=document.getElementById("spanRes");
}

function calculerOperation(pOperation){
		  initZones();
		  var inputA =  document.getElementById("inputA");
		  var a =  inputA.value;
		  console.log("a="+a);
		  var inputB =  document.getElementById("inputB");
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
		  ajouterDansHistorique(a,b,pOperation,res);
}

function ajouterDansHistorique(a,b,op,res){
	var calcul="a="+a+" b="+b+ " op="+op+ " res="+res;
	var ulHisto = document.getElementById('ulHistorique');
	var nouvel_li = document.createElement('li');
	nouvel_li.innerHTML=calcul;//ajoute texte entre <li> et </li>
	ulHisto.appendChild(nouvel_li);//ajoute <li> dans <ul>
}