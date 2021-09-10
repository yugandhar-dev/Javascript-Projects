const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach((company, index, total) => {
//   console.log(company, index, total.length);
// });

// filter

// for (let i = 0; i < ages.length; i++) {
//   //console.log(ages[i] > 21 && ages[i]);
//   if (ages[i] > 21) console.log(ages[i]);
// }

// const outputAge = ages.filter((age) => age >= 21);

// console.log(outputAge);

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

// const eightyCompanies = companies.filter((company) => company.start > 1980);
// console.log(eightyCompanies);

// map

// const companyNames = companies.map(
//   (company, index) => `${company.name} ${index}`
// );
// console.log(companyNames);

// const sqrtAges = ages.map((age) => Math.sqrt(age));
// console.log(sqrtAges);

// sort

const sortYears = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortYears);
const sortAges = ages.sort((a, b) => a - b); // ascending order
console.log(sortAges);

// reduce

const sumAges = ages.reduce((total, age) => total + age, 0);
console.log(sumAges);

const sumYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(sumYears);
