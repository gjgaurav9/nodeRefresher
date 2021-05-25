const grab = flag =>{
  const indexOfFlag = process.argv.indexOf(`--${flag}`);
  return indexOfFlag+1;
}


const f = grab('f');
const n = grab('n');


console.log(`The Flag values grabbed are ${process.argv[f]} and ${process.argv[n]}`);