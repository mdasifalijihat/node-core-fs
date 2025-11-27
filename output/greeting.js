const args = process.argv;

// process.argv[0] = node path
// process.argv[1] = file path file name
// process.argv[2] = actual file path

const name = args[2] || "Guest";
const time = new Date().getHours;

let greeting;

if (time < 12) {
  greeting = "Good Morning";
} else if (time < 18) {
  greeting = "good evening";
} else {
  greeting = "good night";
}

console.log(`${greeting} ${name}`);
