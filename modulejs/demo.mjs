// ###############################
// ####### 34-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// sentence: "The quick brown fox jumps over the lazy dog"
// Siz sentence ni so'zlarga bo'ling (split),
// har bir so'zning birinchi belgisini olib (charAt),
// ularni birlashtirib akronim qilib (join) string ga o'tkazing.
// getAcronym nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. split(" ") yordamida so'zlarga bo'ling.
// 2. map() yordamida charAt(0) bilan birinchi belgisini oling.
// 3. join("") bilan akronim string ga o'tkazing.
//
// Ishlatiladigan metodlar: split(), map(), charAt(), join(), toUpperCase().
// INPUT (misol):
const sentence34 = "The quick brown fox jumps over the lazy dog";

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getAcronym(sentence) {
  return sentence
}

// ###############################
// ####### 35-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// data massivida har bir element: { name: "Ali", value: "123abc456" }
// Siz value dan faqat raqamlarni chiqaring (replace() + regex yoki filter),
// raqamlarni Number ga o'tkazing (parseInt),
// va {name, numericValue} formatida qaytaring.
// extractNumbers nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida value dan raqamlarni chiqaring (replace(/[a-z]/g, "")).
// 2. parseInt() bilan Number ga o'tkazing.
// 3. {name, numericValue} formatida massiv qaytaring.
//
// Ishlatiladigan metodlar: map(), replace() + regex, parseInt(), Object literal.
// INPUT (misol):
const data35 = [
  { name: "Ali", value: "123abc456" },
  { name: "Gulsara", value: "789xyz012" },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function extractNumbers(data) {
  return data
}

// ###############################
// ####### 36-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// colors massivi: ["red", "blue", "green", "red", "blue", "red"]
// Siz massivdan unique ranglarni oling (Set, Array.from),
// har bir rangni uppercase ga o'tkazing (map, toUpperCase),
// va ", " bilan birlashtirib string ga o'tkazing (join).
// getUniqueColors nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. Set() yordamida unique ranglarni oling.
// 2. Array.from() bilan massivga o'tkazing.
// 3. map() yordamida toUpperCase() qilib o'zgartiring.
// 4. join(", ") bilan string ga o'tkazing.
//
// Ishlatiladigan metodlar: Set, Array.from(), map(), toUpperCase(), join().
// INPUT (misol):
const colors36 = ["red", "blue", "green", "red", "blue", "red"];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getUniqueColors(colors) {
return colors
}

// ###############################
// ####### 37-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// transactions massivida har bir tranzaksiya: { amount: "50.99$", date: "2024-11-15" }
// Siz amount dan "$" belgisini olib tashlang (replace),
// float soniga o'tkazing (parseFloat),
// barcha transaktsiyalarning summasi hisoblang (reduce),
// va natijani toFixed(2) bilan qaytaring.
// getTotalAmount nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida "$" belgisini olib tashing (replace("$", "")).
// 2. map() yordamida parseFloat() qilib float soniga o'tkazing.
// 3. reduce() yordamida summani hisoblang.
// 4. toFixed(2) bilan formatla.
//
// Ishlatiladigan metodlar: map(), replace(), parseFloat(), reduce(), toFixed().
// INPUT (misol):
const transactions37 = [
  { amount: "50.99$", date: "2024-11-15" },
  { amount: "100.50$", date: "2024-11-16" },
  { amount: "75.25$", date: "2024-11-17" },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getTotalAmount(transactions) {
  return transactions
}

// ###############################
// ####### 38-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// message: "   hello   world   javascript   "
// Siz message ni trim() qilib bo'sh joylarni olib tashing,
// so'zlarga bo'ling (split),
// har bir so'z orasidan bo'sh joylarni olib tashlang (filter yoki map),
// va qayta birlashtirib (join) string ga o'tkazing.
// cleanMessage nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. trim() yordamida boshlash va tugadagi bo'sh joylarni olib tashing.
// 2. split(/\s+/) yordamida bir yoki undan ortiq bo'sh joylarni bo'ling.
// 3. join(" ") bilan qayta birlashtirib string ga o'tkazing.
//
// Ishlatiladigan metodlar: trim(), split() + regex, join().
// INPUT (misol):
const message38 = "   hello   world   javascript   ";

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function cleanMessage(message) {
  return message
}

// ###############################
// ####### 39-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// products massivida har bir mahsulot: { name: "Laptop", tags: "electronics,computers" }
// tags string ko'rinishida bo'ladi, vergul bilan ajralgan.
// Siz har bir mahsulot uchun tags ni ajrating (split),
// harbitada "electronics" tag borligini tekshiring (includes),
// va faqat "electronics" tag bo'lgan mahsulotlarni filtrlang.
// getElectronicsProducts nomli funksiya yozing (har bir mahsulot 1 marta).
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida tags.split(",") qilib ajrating.
// 2. filter() yordamida tags.includes("electronics") shartini tekshiring.
// 3. filtered mahsulotlarni qaytaring.
//
// Ishlatiladigan metodlar: map(), split(), filter(), includes().
// INPUT (misol):
const products39 = [
  { name: "Laptop", tags: "electronics,computers" },
  { name: "Desk", tags: "furniture,office" },
  { name: "Monitor", tags: "electronics,displays" },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getElectronicsProducts(products) {
  return products
}

// ###############################
// ####### 40-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// usernames massivi: ["Ali1991", "Gulsara2000", "Mirjon1985"]
// Siz username lardan faqat harf qismini ajrating (replace() + regex),
// har biriga " (born: " va birth yilini qo'shib (template string),
// va "; " bilan birlashtirib string ga o'tkazing (join).
// formatUserProfiles nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida replace(/[0-9]/g, "") qilib raqamlarni olib tashing.
// 2. map() yordamida raqamlarni ajratib birth year ni toping.
// 3. map() yordamida "Name (born: YEAR)" formatida template string yarating.
// 4. join("; ") bilan string ga o'tkazing.
//
// Ishlatiladigan metodlar: map(), replace() + regex, match() yoki slice(), concat(), join().
// INPUT (misol):
const usernames40 = ["Ali1991", "Gulsara2000", "Mirjon1985"];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function formatUserProfiles(usernames) {
  return usernames
}

// ###############################
// ####### 41-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// items massivida: [{ value: 10 }, { value: 20 }, { value: 30 }]
// Siz barcha value larni 2 ga ko'paytiring (map),
// faqat 30 dan katta bo'lganlarni filtrlang (filter),
// va ularning summasi hisoblang (reduce).
// filterAndSum nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida har value ni 2 ga ko'paytiring.
// 2. filter() yordamida value > 30 shartini tekshiring.
// 3. reduce() yordamida summani hisoblang.
//
// Ishlatiladigan metodlar: map(), filter(), reduce().
// INPUT (misol):
const items41 = [{ value: 10 }, { value: 20 }, { value: 30 }];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function filterAndSum(items) {
  return items
}

// ###############################
// ####### 42-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// data massivida: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Siz toq sonlarni toping (filter, modulo),
// har biriga 10 qo'shing (map),
// va yangi massivni qaytaring.
// addTenToOddNumbers nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. filter() yordamida n % 2 !== 0 shartini tekshiring (toq sonlar).
// 2. map() yordamida har songa 10 qo'shing.
// 3. yangi massivni qaytaring.
//
// Ishlatiladigan metodlar: filter(), map().
// INPUT (misol):
const data42 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function addTenToOddNumbers(data) {
  return data
}

// ###############################
// ####### 43-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// teams massivida har bir jamoaviy: { name: "TeamA", members: ["Ali", "Gulsara", "Mirjon"] }
// Siz barcha a'zolarni alohida massivga chiqaring (flatMap),
// har biriga " - TeamName" suffix qo'shing (map),
// va qo'sh vergul bilan birlashtirib (join) string ga o'tkazing.
// getTeamRoster nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. flatMap() yordamida har jamoaning a'zolarini loop qiling.
// 2. map() yordamida har a'zoga " - TeamName" suffix qo'shing.
// 3. join(", ") bilan string ga o'tkazing.
//
// Ishlatiladigan metodlar: flatMap(), map(), concat(), join().
// INPUT (misol):
const teams43 = [
  { name: "TeamA", members: ["Ali", "Gulsara"] },
  { name: "TeamB", members: ["Mirjon", "Oksana", "Rustam"] },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getTeamRoster(teams) {
  return teams
}

// ###############################
// ####### 44-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// text: "hello-world-javascript"
// Siz text ni "-" bo'yicha bo'ling (split),
// har bir so'zning birinchi harfini katta qilib (map, charAt, toUpperCase),
// qayta birlashtirib (join) string ga o'tkazing (bo'shliqsiz).
// toCamelCase nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. split("-") yordamida so'zlarga bo'ling.
// 2. map() yordamida har so'z uchun: charAt(0).toUpperCase() + slice(1).
// 3. join("") bilan qayta birlashtirib string ga o'tkazing.
//
// Ishlatiladigan metodlar: split(), map(), charAt(), toUpperCase(), slice(), join().
// INPUT (misol):
const text44 = "hello-world-javascript";

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function toCamelCase(text) {
  return text
}

// ###############################
// ####### 45-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// scores massivi: [85, 92, 78, 95, 88, 76, 90, 87]
// Siz 80 dan katta bo'lgan baholarni filtrlang (filter),
// ularning o'rtachasini hisoblang (reduce),
// va natijani toFixed(2) bilan qaytaring.
// getAverageHighScores nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. filter() yordamida score > 80 shartini tekshiring.
// 2. reduce() yordamida summani hisoblang, keyin length ga bo'ling.
// 3. toFixed(2) bilan formatla.
//
// Ishlatiladigan metodlar: filter(), reduce(), toFixed().
// INPUT (misol):
const scores45 = [85, 92, 78, 95, 88, 76, 90, 87];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getAverageHighScores(scores) {
  return scores
}

// ###############################
// ####### 46-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// data massivida: ["apple", "BANANA", "ChErRy", "date"]
// Siz barcha so'zlarni lowercase ga o'tkazing (map, toLowerCase),
// birinchi harfini katta qilib (map, charAt, toUpperCase),
// va " - " bilan birlashtirib (join) string ga o'tkazing.
// formatWords nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida toLowerCase() qilib o'zgartiring.
// 2. map() yordamida charAt(0).toUpperCase() + slice(1) qilib formatlang.
// 3. join(" - ") bilan string ga o'tkazing.
//
// Ishlatiladigan metodlar: map(), toLowerCase(), charAt(), toUpperCase(), slice(), join().
// INPUT (misol):
const data46 = ["apple", "BANANA", "ChErRy", "date"];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function formatWords(data) {
 return data
}

// ###############################
// ####### 47-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// inventory massivida har bir mahsulot: { sku: "ITEM-001", qty: 50 }
// Siz SKU lardan raqamli qismini ajrating (split, substring, slice),
// raqam bo'lgan qismini Number ga o'tkazing (parseInt),
// va qty bilan qo'shib (map), {sku, total} formatida qaytaring.
// adjustInventory nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida SKU dan raqam qismini ajrating (split("-")[1] yoki slice(-3)).
// 2. parseInt() bilan Number ga o'tkazing.
// 3. qty bilan qo'shib, {sku, total: qty + skuNumber} formatida yarating.
//
// Ishlatiladigan metodlar: map(), split(), parseInt(), slice(), Object literal.
// INPUT (misol):
const inventory47 = [
  { sku: "ITEM-001", qty: 50 },
  { sku: "ITEM-005", qty: 30 },
  { sku: "ITEM-010", qty: 20 },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function adjustInventory(inventory) {
  return inventory
}

// ###############################
// ####### 48-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// names massivi: ["Alice", "Bob", "Charlie", "David", "Eve"]
// Siz nomi 4 dan katta bo'lgan nomlarni filtrlang (filter, length),
// ularni uppercase ga o'tkazing (map, toUpperCase),
// va "Mr/Ms: " prefix bilan birlashtirib (join) string ga o'tkazing.
// getLongNames nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. filter() yordamida name.length > 4 shartini tekshiring.
// 2. map() yordamida toUpperCase() qilib o'zgartiring.
// 3. map() yordamida "Mr/Ms: " prefix qo'shing.
// 4. join(", ") bilan string ga o'tkazing.
//
// Ishlatiladigan metodlar: filter(), map(), toUpperCase(), concat(), join(), length.
// INPUT (misol):
const names48 = ["Alice", "Bob", "Charlie", "David", "Eve"];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getLongNames(names) {
  return names
}

// ###############################
// ####### 49-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// text: "The quick brown fox, jumps over. the lazy dog!"
// Siz matndan barcha punctuation belgilarini olib tashlang (replace() + regex),
// so'zlarga bo'ling (split),
// va { word, length } formatida massiv qaytaring.
// getWordsWithLength nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. replace(/[.,!?]/g, "") yordamida punctuation belgilarini olib tashing.
// 2. split(" ") yordamida so'zlarga bo'ling.
// 3. map() yordamida { word, length } objektlar yarating.
// 4. filter() bilan bo'sh so'zlarni olib tashing.
//
// Ishlatiladigan metodlar: replace() + regex, split(), map(), filter(), length, Object literal.
// INPUT (misol):
const text49 = "The quick brown fox, jumps over. the lazy dog!";

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getWordsWithLength(text) {
  return text
}

// ###############################
// ####### 50-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// products massivida har bir mahsulot: { name: "Laptop", price: 999, discount: 10 }
// Siz har bir mahsulot uchun final price ni hisoblang (price - (price * discount / 100), map),
// faqat final price 500 dan katta bo'lgan mahsulotlarni filtrlang,
// va {name, finalPrice} formatida qaytaring.
// getDiscountedPrices nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida finalPrice = price * (1 - discount / 100) hisoblang.
// 2. filter() yordamida finalPrice > 500 shartini tekshiring.
// 3. {name, finalPrice} formatida massiv qaytaring.
//
// Ishlatiladigan metodlar: map(), filter(), Object literal, toFixed().
// INPUT (misol):
const products50 = [
  { name: "Laptop", price: 999, discount: 10 },
  { name: "Mouse", price: 25, discount: 20 },
  { name: "Monitor", price: 400, discount: 5 },
  { name: "Keyboard", price: 150, discount: 30 },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getDiscountedPrices(products) {
  return products
}

// =====================================================
// DAVOM ETUVCHI MASALALAR (51-100)
// =====================================================

// ###############################
// ####### 51-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// addresses massivida har bir manzil:
// { country: "Uzbekistan", city: "Tashkent", street: "Lenin St." }
// Siz manzillarni "Country - City - Street" formatida string ga o'tkazing (map, Object.values, join),
// barcha manzillarni "; " bilan birlashtirib (join) string ga o'tkazing.
// formatAddresses nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida Object.values() qilib barcha qiymatlarni oling.
// 2. map() yordamida join(" - ") qilib formatla.
// 3. join("; ") bilan barcha manzillarni birlashtirig.
//
// Ishlatiladigan metodlar: map(), Object.values(), join().
// INPUT (misol):
const addresses51 = [
  { country: "Uzbekistan", city: "Tashkent", street: "Lenin St." },
  { country: "Kazakhstan", city: "Almaty", street: "Abaya Ave." },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function formatAddresses(addresses) {
  return addresses
}

// ###############################
// ####### 52-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// numbers massivi: [5, 12, 8, 3, 9, 15, 6, 2]
// Siz 10 dan katta bo'lgan sonlarni toping (filter),
// ularni 3 ga bo'ling (map),
// va barcha natijalarning summasi hisoblang (reduce).
// Natijani toFixed(2) bilan qaytaring.
// calculateDividedSum nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. filter() yordamida n > 10 shartini tekshiring.
// 2. map() yordamida har sonni 3 ga bo'ling.
// 3. reduce() yordamida summani hisoblang.
// 4. toFixed(2) bilan formatla.
//
// Ishlatiladigan metodlar: filter(), map(), reduce(), toFixed().
// INPUT (misol):
const numbers52 = [5, 12, 8, 3, 9, 15, 6, 2];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function calculateDividedSum(numbers) {
  return numbers
}

// ###############################
// ####### 53-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// data massivida: [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }]
// Siz faqat active === true bo'lgan elementlarni toping (filter),
// ularning id larini olib (map),
// va "ID: " prefix bilan birlashtirib (join) string ga o'tkazing.
// getActiveIds nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. filter() yordamida active === true shartini tekshiring.
// 2. map() yordamida id larni olib "ID: " prefix bilan format qiling.
// 3. join(" | ") bilan string ga o'tkazing.
//
// Ishlatiladigan metodlar: filter(), map(), concat(), join().
// INPUT (misol):
const data53 = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getActiveIds(data) {
  return data
}

// ###############################
// ####### 54-MASALA ############
// ###############################
//
// =====================================================
// MASALA SHARTI:
// emails massivi: ["Ali@EXAMPLE.COM", "Gulsara@TEST.ORG", "Mirjon@DEMO.NET"]
// Siz barcha email larni lowercase ga o'tkazing (map, toLowerCase),
// "@" dan oldingi qismni ajrating (map, split, [0]),
// va ularni tagma-tag qilib (join) string ga o'tkazing.
// getUsernames nomli funksiya yozing.
// =====================================================
//
// TUSHUNTIRISH:
// 1. map() yordamida toLowerCase() qilib o'zgartiring.
// 2. map() yordamida split("@")[0] qilib username ni oling.
// 3. join(", ") bilan string ga o'tkazing.
//
// Ishlatiladigan metodlar: map(), toLowerCase(), split(), join().
// INPUT (misol):
const emails54 = ["Ali@EXAMPLE.COM", "Gulsara@TEST.ORG", "Mirjon@DEMO.NET"];

// CODE SNIPPET (YOZILMAYDI вЂ” siz yozing):
function getUsernames(emails) {
  return emails
}


export { getUsernames, getActiveIds, calculateDividedSum, formatAddresses, getDiscountedPrices, getAcronym, extractNumbers, getUniqueColors, getTotalAmount, cleanMessage, getElectronicsProducts, formatUserProfiles, filterAndSum, addTenToOddNumbers, getTeamRoster, toCamelCase, getAverageHighScores, formatWords, adjustInventory, getLongNames }