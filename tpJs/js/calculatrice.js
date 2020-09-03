function f1(){
	console.log("f1");
}

var f2 = function(){
	console.log("f2");
}

window.onload = function(){
	f1();
	f2();
	//console.log("load");
	var cbHisto = document.getElementById("cbHisto");
	cbHisto.addEventListener("change",montrerOuCacherHistorique);
	//équivalent de <input type="checkbox" id="cbHisto" 
          //onclick="montrerOuCacherHistorique()" />
	/*	  
    cbHisto.addEventListener("click",function(){
		var ulHisto = document.getElementById("ulHistorique");
		var coche = document.getElementById("cbHisto").checked;
        ulHisto.style.display=coche?"block":"none";
	});
   	*/
}


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

function montrerOuCacherHistorique(){
	var ulHisto = document.getElementById("ulHistorique");
	//solution 1:
	/*
	var etatDisplay = ulHisto.style.display;
	console.log("etatDisplay="+etatDisplay);
	if(etatDisplay!="block")
		ulHisto.style.display="block";
	else
	   ulHisto.style.display="none";
   */
   //solution 2:
   var coche = document.getElementById("cbHisto").checked;
   ulHisto.style.display=coche?"block":"none";
}