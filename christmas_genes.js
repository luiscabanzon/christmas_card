function eval(row, sol) {
	if (row.length != sol.length) {
		console.log("Not same length!");
		console.log(row.length);
		console.log(sol.length);
		return false
	}
	var output = [];
	for (var i = 0; i < row.length; i++) {
    	if (row[i] == sol[i]) {
    		output.push(1);
    	}
    	else {
    		output.push(0);
    	}
	}
	return output.reduce(function(a, b) { return a + b; }, 0);
}


objective = [0,0,0,0,0,1,0,0,0,0,0]

function genRandSol (len) {
	var sol = [];
	for (var i = 0; i < len; i++) {
		sol.push(Math.round(Math.random()))
	}
	return sol
};


popSize = 10;
geneSize = 11;
midPos = Math.round(geneSize / 2);
population = [];
for (var i = 0; i < popSize; i++) {
	population.push(genRandSol(geneSize));
	console.log(i);
};


population = population.sort(function(a,b){ return eval(b, objective) - eval(a,objective)});


iterarion = 0;
while (JSON.stringify(population[0]) !== JSON.stringify(objective)) {

	population = population.slice(0,4);

	for (var i = 0; population.length < popSize; i++) {
	population.push(population[i].slice(0,midPos).concat(genRandSol(geneSize-midPos)));
	population.push(genRandSol(geneSize-midPos).concat(population[i].slice(midPos-1, geneSize)));
	}

	population = population.sort(function(a,b){return eval(b,objective) - eval(a, objective)}).slice(0, geneSize);

	console.log(population[0]);
	iterarion++;
	console.log(iterarion);

	if (iterarion > 1000){break}
}


bitmap = [
[0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,1,1,1,0,0,0,0],
[0,0,0,1,1,1,1,1,0,0,0],
[0,0,1,1,1,1,1,1,1,0,0],
[0,0,0,1,1,1,1,1,0,0,0],
[0,0,1,1,1,1,1,1,1,0,0],
[0,1,1,1,1,1,1,1,1,1,0],
[0,0,1,1,1,1,1,1,1,0,0],
[0,1,1,1,1,1,1,1,1,1,0],
[1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,1,1,1,0,0,0,0],
[0,0,0,0,1,1,1,0,0,0,0]
]