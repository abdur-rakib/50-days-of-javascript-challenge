function nthlargest(arr, highest) {
	return arr.sort((a, b) => b-a)[highest - 1];
}

const arr = [ 10, 100, 1000, 10000];
const highest = 2;

console.log(nthlargest(arr, highest));