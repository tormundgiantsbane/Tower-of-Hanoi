

var towerLength = 5; 
var threeTowers = [[], [], []]; 
var towerHistory = [[], [], []];

for(var y = 1; y<=towerLength; y++){
	threeTowers[0].push(y);
}


var minMoves = Math.pow(2, towerLength) - 1;
var even = towerLength % 2 == 0;
var x = 1,
	i = 0,
	blockToMove;

var towerA = document.getElementById("a");
var towerB = document.getElementById("b");
var towerC = document.getElementById("c");



function AtoB(){
		if(threeTowers[0][0] < threeTowers[1][0] || typeof threeTowers[1][0] === "undefined"){ // A to B 
			 blockToMove = threeTowers[0][0];
			threeTowers[0].splice(0, 1);
			threeTowers[1].unshift(blockToMove);
		}else{																					// B to A
			 blockToMove = threeTowers[1][0];
			threeTowers[1].splice(0, 1);
			threeTowers[0].unshift(blockToMove);
		}
	
}

function AtoC(){
	if(threeTowers[0][0] < threeTowers[2][0] || typeof threeTowers[2][0] === "undefined"){ // A to C
			 blockToMove = threeTowers[0][0];
			threeTowers[0].splice(0, 1);
			threeTowers[2].unshift(blockToMove);
			
		}else{ 																					// C to A
			 blockToMove = threeTowers[2][0];
			threeTowers[2].splice(0, 1);
			threeTowers[0].unshift(blockToMove);
		}
}

function BtoC(){
	if(threeTowers[1][0] < threeTowers[2][0] || typeof threeTowers[2][0] === "undefined"){// B to C
		 blockToMove = threeTowers[1][0];
		threeTowers[1].splice(0, 1);
		threeTowers[2].unshift(blockToMove);
	} else { 																				// C to B
		 blockToMove = threeTowers[2][0];
		threeTowers[2].splice(0, 1);
		threeTowers[1].unshift(blockToMove);
	}
}




for (i = 0; i < minMoves; i++) {
		

	towerHistory[0].push(JSON.stringify(threeTowers[0]));
	towerHistory[1].push(JSON.stringify(threeTowers[1]));
	towerHistory[2].push(JSON.stringify(threeTowers[2]));
	
		
	if(even){
		switch(x){
			case 1:
				AtoC();
				x=2;
				continue;
				break;
			case 2:
				AtoB();
				x=3;
				continue;
				break;
			case 3:
				BtoC();
				x=1;
				continue;
				break;
		}
	}else{
		switch(x){
			case 1:
				AtoB();
				x=2;
				continue;
				break;
			case 2:
				AtoC();
				x=3;
				continue;
				break;
			case 3:
				BtoC();
				x=1;
				continue;
				break;
		}
	}
}

towerHistory[0].push(JSON.stringify(threeTowers[0]));
towerHistory[1].push(JSON.stringify(threeTowers[1]));
towerHistory[2].push(JSON.stringify(threeTowers[2]));

i=0;

var showTowers = setInterval(function(){
		towerA.innerHTML = towerHistory[0][i];
		towerB.innerHTML = towerHistory[1][i];
		towerC.innerHTML = towerHistory[2][i];
		console.log("hey");
		i++;
		
		if(i == minMoves+1){
			clearInterval(showTowers);
		}
	}, 500);







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