
const hijriConverter = require('hijri-converter');

// Convert Gregorian date to Hijri date
const hijriDate = hijriConverter.convertToHijri(new Date('2023-05-09'));
console.log(hijriDate); // Output: { year: 1444, month: 2, day: 3 }

// Convert Hijri date to Gregorian date
const gregorianDate = hijriConverter.convertToGregorian(1444, 2, 3);
console.log(gregorianDate); // Output: 2023-05-09T00:00:00.000Z
