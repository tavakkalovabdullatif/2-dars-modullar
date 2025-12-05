import { getUsernames, getActiveIds, calculateDividedSum, formatAddresses, getDiscountedPrices, getAcronym, extractNumbers, getUniqueColors, getTotalAmount, cleanMessage, getElectronicsProducts, formatUserProfiles, filterAndSum, addTenToOddNumbers, getTeamRoster, toCamelCase, getAverageHighScores, formatWords, adjustInventory, getLongNames, } from "./demo.mjs";

const sentence34 = "The quick brown fox jumps over the lazy dog";
const data35 = [
  { name: "Ali", value: "123abc456" },
  { name: "Gulsara", value: "789xyz012" },
];
const colors36 = ["red", "blue", "green", "red", "blue", "red"];
const transactions37 = [
  { amount: "50.99$", date: "2024-11-15" },
  { amount: "100.50$", date: "2024-11-16" },
  { amount: "75.25$", date: "2024-11-17" },
];
const message38 = "   hello   world   javascript   ";
const products39 = [
  { name: "Laptop", tags: "electronics,computers" },
  { name: "Desk", tags: "furniture,office" },
  { name: "Monitor", tags: "electronics,displays" },
];
const usernames40 = ["Ali1991", "Gulsara2000", "Mirjon1985"];
const items41 = [{ value: 10 }, { value: 20 }, { value: 30 }];
const data42 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const teams43 = [
  { name: "TeamA", members: ["Ali", "Gulsara"] },
  { name: "TeamB", members: ["Mirjon", "Oksana", "Rustam"] },
];
const text44 = "hello-world-javascript";
const scores45 = [85, 92, 78, 95, 88, 76, 90, 87];
const data46 = ["apple", "BANANA", "ChErRy", "date"];
const inventory47 = [
  { sku: "ITEM-001", qty: 50 },
  { sku: "ITEM-005", qty: 30 },
  { sku: "ITEM-010", qty: 20 },
];
const names48 = ["Alice", "Bob", "Charlie", "David", "Eve"];
const text49 = "The quick brown fox, jumps over. the lazy dog!";
const products50 = [
  { name: "Laptop", price: 999, discount: 10 },
  { name: "Mouse", price: 25, discount: 20 },
  { name: "Monitor", price: 400, discount: 5 },
  { name: "Keyboard", price: 150, discount: 30 },
];
const addresses51 = [
  { country: "Uzbekistan", city: "Tashkent", street: "Lenin St." },
  { country: "Kazakhstan", city: "Almaty", street: "Abaya Ave." },
];
const numbers52 = [5, 12, 8, 3, 9, 15, 6, 2];
const data53 = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
];



// RESULTS
const result34 = getUsernames(sentence34)
console.log(result34);


const result35 = getActiveIds(data35)
console.log(result35);


const result36 = calculateDividedSum(colors36)
console.log(result36);


const result37 = formatAddresses(transactions37)
console.log(result37);


const result38 = getDiscountedPrices(message38)
console.log(result38);


const result39 = getAcronym(products39)
console.log(result39);


const result40 = extractNumbers(usernames40)
console.log(result40);


const result41 = getUniqueColors(items41)
console.log(result41);


const result42 = getTotalAmount(data42)
console.log(result42);


const result43 = cleanMessage(teams43)
console.log(result43);


const result44 = getElectronicsProducts(text44)
console.log(result44);


const result45 = formatUserProfiles(scores45)
console.log(result45);


const result46 = filterAndSum(data46)
console.log(result46);


const result47 = addTenToOddNumbers(inventory47)
console.log(result47);


const result48 = getTeamRoster(names48)
console.log(result48);


const result49 = toCamelCase(text49)
console.log(result49);


const result50 = getAverageHighScores(products50)
console.log(result50);


const result51 = formatWords(addresses51)
console.log(result51);


const result52 = adjustInventory(numbers52)
console.log(result52)


const result53 = getLongNames(data53)
console.log(result53);



