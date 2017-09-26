var towerLength = 3; // Automate this to make the length automatically change in threeTowers var.


var threeTowers = [[1, 2, 3], [], []]; 

var minMoves = Math.pow(2, towerLength) -1;

threeTowers[0].splice(0, 1);
threeTowers[1].splice(0, 0, 1);

  
for(var i=0; i<minMoves; i++){
	
}

console.log(threeTowers);


/*

Rough Rules:
if odd number of blocks:
1. A to B (Either direction)
2. A to C (Either direction)
3. B to C (Either direction)
*/