var towerLength = 3; // Automate this to make the length automatically change in threeTowers var.


var threeTowers = [[1, 2, 3], [], []]; 

var minMoves = Math.pow(2, towerLength) -1;

var even = minMoves % 2 == 0;

//if(even){
//	
//}else if(!even){
//	threeTowers[0].splice(0, 1);
//	threeTowers[1].splice(0, 0, 1);
//}
  
for(var i=0, x=1; i<1; i++){ //build in case for odd tower
	if(x==1){
		if(threeTowers[0][0] < threeTowers[1][0] || typeof threeTowers[1][0] === "undefined"){
			var AtoB = threeTowers[0][0];
			threeTowers[0].splice(0, 1);
			threeTowers[1].unshift(AtoB);
		}else if(threeTowers[0][0] > threeTowers[1][0]){
//			var BtoA = threeTowers[1][0];
//			threeTowers[1].splice(0, 1);
//			threeTowers[0].unshift(BtoA);
		}
		
		x=2;
	}
	
	
	if(x==2){
		if(threeTowers[0][0] < threeTowers[2][0] || typeof threeTowers[2][0] === "undefined"){ // A to C
			
			var AtoC = threeTowers[0][0];
			threeTowers[0].splice(0, 1);
			threeTowers[2].unshift(AtoC);
			
		}else if(threeTowers[0][0] < threeTowers[2][0]){ // C to A
			var CtoA = threeTowers[2][0];
			threeTowers[2].splice(0, 1);
			threeTowers[0].unshift(CtoA);
		}
		x=3;
	}
	
	if(x==3){
		if(threeTowers[1][0] < threeTowers[2][0]){ // B to C
			var BtoC = threeTowers[1][0];
			threeTowers[1].splice(0, 1);
			threeTowers[2].unshift(BtoC);
		} else if(threeTowers[1][0] > threeTowers[2][0]){ // C to B
			var CtoB = threeTowers[2][0];
			threeTowers[2].splice([0, 1]);
			threeTowers[1].unshift(CtoB);
		}
		
		x=1;
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