var towerLength = 7; // Automate this to make the length automatically change in threeTowers var.


var threeTowers = [[], [], []]; 

for(var y = 1; y<=towerLength; y++){
	threeTowers[0].push(y);
}

var minMoves = Math.pow(2, towerLength) - 1;

var even = minMoves % 2 === 0;


var x = 1,
	i = 0,
	blockToMove; // Use this instead of an individual variable for each case, just makes more sense.

for (i = 0; i < minMoves; i++) { //build in case for odd tower
//	console.log(x);
	if (x==1){
		if(threeTowers[0][0] < threeTowers[1][0] || typeof threeTowers[1][0] === "undefined"){ // A to B 
			var AtoB = threeTowers[0][0];
			threeTowers[0].splice(0, 1);
			threeTowers[1].unshift(AtoB);
		}else{																					// B to A
			var BtoA = threeTowers[1][0];
			threeTowers[1].splice(0, 1);
			threeTowers[0].unshift(BtoA);
		}
		x=2;
		continue;
	}
	
	
	if(x==2){
		if(threeTowers[0][0] < threeTowers[2][0] || typeof threeTowers[2][0] === "undefined"){ // A to C
			var AtoC = threeTowers[0][0];
			threeTowers[0].splice(0, 1);
			threeTowers[2].unshift(AtoC);
			
		}else{ 																					// C to A
			var CtoA = threeTowers[2][0];
			threeTowers[2].splice(0, 1);
			threeTowers[0].unshift(CtoA);
		}
		x=3;
		continue;
		
	}
	
	if(x==3){
		if(threeTowers[1][0] < threeTowers[2][0] || typeof threeTowers[2][0] === "undefined"){// B to C
			var BtoC = threeTowers[1][0];
			threeTowers[1].splice(0, 1);
			threeTowers[2].unshift(BtoC);
		} else { 																				// C to B
			var CtoB = threeTowers[2][0];
			
			threeTowers[2].splice(0, 1);
			
			threeTowers[1].unshift(CtoB);
		}
		x=1;
		continue;
	}
	
	
}

console.log(threeTowers);


/*
Rough Rules:
if odd number of blocks:
1. A to B (Either direction)
2. A to C (Either direction)
3. B to C (Either direction)
*/