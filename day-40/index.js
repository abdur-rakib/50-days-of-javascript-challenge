const needsLicense = (kind) => {
	if(kind === 'car' || kind === 'truck') return true;
    return false;
}

const chooseVehicle = (option1, option2) => {
	const sorted = [option1, option2].sort();
	return `${sorted[0]} is clearly the better choice.`;
}

const calculateResellPrice = (originalPrice, age) => {
    let price;
	switch(true) {
        case age < 3:
            price = originalPrice * .8;
            break;
        case age >= 3 && age <10 :
            price = originalPrice * .7;
            break;
        case age >= 10 :
            price = originalPrice * .5;
            break;
        default:
            price = originalPrice;
        }
    return price;
}