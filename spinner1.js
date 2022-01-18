let cli = process.stdout;

setTimeout(() => {
  cli.write('\r|   ');
}, 100);

setTimeout(() => {
  cli.write('\r/   ');
}, 300);

setTimeout(() => {
  cli.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  cli.write('\r\\   '); 
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  cli.write('\r|   '); 
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  cli.write('\r/   '); 
}, 1100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  cli.write('\r-   '); 
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  cli.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  cli.write('\r|   '); 
}, 1700);

// ... fill in the rest yourself ...