// import person from './person.js'
// default exports can be renamed immediately
import prs from './person.js'

// can set alias if you want
// can export multiple variables from a file
import { printName as pn, baseValue } from './utils.js'

pn(prs.name);
console.log(baseValue);

