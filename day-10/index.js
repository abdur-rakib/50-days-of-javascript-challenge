const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    const resArray = array.filter(el => el.field !== filterField);
    return resArray;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
