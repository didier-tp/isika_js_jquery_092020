$(function(){
	
	  $('#idBtn').on("click",function(){
		  
		  var produitsUrl = $('#idSelUrl').val();
		  var categorie = $('#idCategorie').val();
		  if(categorie!=""){
			  produitsUrl=produitsUrl+"?categorie="+categorie;
		  }
	      console.log("produitsUrl="+produitsUrl);
		  
	      $.ajax({
			type: "GET",
			url: produitsUrl,
			contentType : "application/json",
			success: function (data,status,xhr) {
				if (data) {
				    //console.log("data=" + JSON.stringify(data));
					var tabProduits = data;
					$("#tBodyProd").empty();
					for(i in tabProduits){
						var nouvelleLigne="<tr><td>"+tabProduits[i].code
									+"</td><td>"+tabProduits[i].nom
									+"</td><td>"+tabProduits[i].prix
									+"</td><td>"+tabProduits[i].categorie
									+"</td></tr>";
						//console.log("nouvelleLigne=" + nouvelleLigne);
						$('#tBodyProd').append(nouvelleLigne);
					}
					}
				},
			error: function( jqXHR, textStatus, errorThrown ){
				console.log("error" + textStatus);
			}
		});//end $.ajax
	  });
	
	});