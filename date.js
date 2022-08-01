
/*You can pass in up to seven arguments to create a date/time.

Year: 4-digit year.
Month: Month of the year (0-11). Month is zero-indexed. Defaults to 0 if omitted.
Day: Day of the month (1-31). Defaults to 1 if omitted.
Hour: Hour of the day (0-23). Defaults to 0 if omitted.
Minutes: Minutes (0-59). Defaults to 0 if omitted.
Seconds: Seconds (0-59). Defaults to 0 if omitted.
Milliseconds: Milliseconds (0-999). Defaults to 0 if omitted.*/


//................new Date(year, month, day, hours, minutes, seconds, milliseconds)
let a = new Date('December 25 2020');
console.log(a);

let b = new Date(1333120999999);
console.log(b);

let c = new Date('2020-12-25');
console.log(c);

let d = new Date('2022-12-22');
//using symbol.toPrimitive could be number or string
console.log(d[Symbol.toPrimitive]("number"));

//sunday-saturday = 0-6
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//Date.prototype.getDate() 'December 25, 1995 23:15:30'

let e = new Date(" 2021 November 19  23:15:30");

console.log(e.getDate()); //return day of the month
console.log(days[e.getDay()]);
console.log(e.getFullYear());
console.log(month[e.getMonth()]);
console.log(e.getHours());
console.log(e.getMinutes());
console.log(e.getSeconds());
console.log(e.getMilliseconds());


// The getUTCDate() method returns the day of the month(from 1 to 31) in the specified date according to universal time.

const f = new Date(2021, 10, 17,  0, 0);
//base on UTC time => time zone
console.log(f.getUTCDate());
console.log(f.getUTCDay());
console.log(f.getUTCFullYear());
console.log(f.getUTCMonth());
console.log(f.getUTCHours());


//The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

//....................setDate()
//this format dont take the array day form
let g = new Date("2012/12/25");
g.setFullYear(1999);
g.setUTCMonth(6);
console.log(g);

//

const h = new Date("01 August 2022 14:48");
console.log(h.toISOString());
console.log(h.toJSON());
console.log(h.toUTCString());
console.log(h.toDateString());
console.log(h.toTimeString());
console.log(h.toLocaleString());;

let i = Date.now();
console.log(i);
console.log(new Date(i));