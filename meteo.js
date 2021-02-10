function showCity(){
	let nomVilleSelectionnee = document.getElementById("selection").value;
	ville = document.getElementById("ville");
	let cities = document.getElementsByClassName("city");
	for(i=0; i<cities.length; i++){
		elt=document.getElementById(cities[i].id);
		if(cities[i].id== nomVilleSelectionnee){
			elt.style.display = "block";	  				
			ville.innerHTML = cities[i].id;
	  				
			}
		else {
			elt.style.display = "none";
		}
	}
}
