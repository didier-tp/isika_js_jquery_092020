$(function(){
	
	  $('#idBtn').on("click",function(){
	  
	      $.ajax({
			type: "GET",
			url: "./data/products.json",
			contentType : "application/json",
			success: function (data,status,xhr) {
				if (data) {
				    console.log("data=" + JSON.stringify(data));
					var tabProduits = data;
					$("#tBodyProd").empty();
					for(i in tabProduits){
						var nouvelleLigne="<tr><td>"+tabProduits[i].code
									+"</td><td>"+tabProduits[i].nom
									+"</td><td>"+tabProduits[i].prix
									+"</td><td>"+tabProduits[i].categorie
									+"</td></tr>";
						console.log("nouvelleLigne=" + nouvelleLigne);
						//$('#tableHtmlProd').append(nouvelleLigne);
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