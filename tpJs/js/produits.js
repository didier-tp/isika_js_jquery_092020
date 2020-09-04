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
					var nouvelleLigne="<tr><td>"+tabProduits[0].code
					            +"</td><td>"+tabProduits[0].nom
								+"</td><td>"+tabProduits[0].prix
								+"</td></tr>";
					console.log("nouvelleLigne=" + nouvelleLigne);
					//$('#tableHtmlProd').append(nouvelleLigne);
					$('#tBodyProd').append(nouvelleLigne);
					}
				},
			error: function( jqXHR, textStatus, errorThrown ){
				console.log("error" + textStatus);
			}
		});//end $.ajax
	  });
	
	});