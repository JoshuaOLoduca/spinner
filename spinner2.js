let cli = process.stdout;

const frames = '|/-\\|/-\\|/-\\|/-\\|/-\\|'.split('');

const animatedElement = (frames, frameLifetime) => {
  if (frames.length === 0) {
    cli.write("\n")
    return;
  }
  setTimeout(() => {
    cli.write(`\r${frames[0]}  `);
    animatedElement(frames.slice(1), frameLifetime)
  }, frameLifetime);
};

animatedElement(frames, 200)

// ... fill in the rest yourself ...