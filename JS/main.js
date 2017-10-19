var threeTowers = [[], [], []]; 
var towerHistory = [[], [], []];

var checkA,
	checkB,
	checkC;

function AtoB(a, b){	
		if(a < b || isNaN(b)){ // A to B 
			$("#b").prepend($("#a .block:nth-child(1)"));
		}else{																					// B to A
			$("#a").prepend($("#b .block:nth-child(1)"))
		}
	
}

function AtoC(a, c){
	if(a < c || isNaN(c)){ // A to C
			 $("#c").prepend($("#a .block:nth-child(1)"));
			
		}else{ 																					// C to A
			 $("#a").prepend($("#c .block:nth-child(1)"));
		}
}

function BtoC(b, c){
	if(b < c || isNaN(c)){// B to C
		$("#c").prepend($("#b .block:nth-child(1)"));
		
	} else { 																				// C to B
		 $("#b").prepend($("#c .block:nth-child(1)"));
	}
}


function solveTower(length){
	
	var towerLength = length; 
	threeTowers = [[], [], []]; 
	towerHistory = [[], [], []];

	for(var y = 1; y<=towerLength; y++){
		threeTowers[0].push(y);
		$('#a').append(
		$('<div/>')
		.attr("id", "block" + y)
		.addClass("block")
		.text(y)
		);
	}


	var minMoves = Math.pow(2, towerLength) - 1;
	var even = towerLength % 2 == 0;
	var x = 1,
		i = 0;

	
	var showTowers = setInterval(function(){
//		console.log(parseInt($("#block" + x.toString()).text()));
	
	    checkA = parseInt($("#a .block:nth-child(1)").text());
    	checkB = parseInt($("#b .block:nth-child(1)").text());
		checkC = parseInt($("#c .block:nth-child(1)").text());

		if(even){
			switch(x){
				case 1:
					AtoC(checkA, checkC);
					x=2;
					break;
				case 2:
					AtoB(checkA, checkB);
					x=3;
					break;
				case 3:
					BtoC(checkB, checkC);
					x=1;
					break;
			}
		}else{
			switch(x){
				case 1:
					AtoB(checkA, checkB);
					x=2;
					break;
				case 2:
					AtoC(checkA, checkC);
					x=3;
					break;
				case 3:
					BtoC(checkB, checkC);
					x=1;
					break;
			}
		}
	
		i++;
		if(i == minMoves+1){
			clearInterval(showTowers);
		}
	}, 500);
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

for( i=1; i<length; i++){
	var block = document.createElement("div");
	block.id  = 'block' + (i);
	block.innerHTML = i;
	console.log(i);
}

$('#solve').click(function(){
	solveTower(slider.value);
});


/*
Rough Rules:
if odd number of blocks:
1. A to B (Either direction)
2. A to C (Either direction)
3. B to C (Either direction)

If even:
1. A to C (either direction)
2. A to B (either direction)
3. B to C (either direction )
*/