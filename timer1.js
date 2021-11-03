const args = process.argv.slice(2);
delay = 20;
for (const i of args) {
  if (i === Number && i !== -i){
    delay = delay + 1;
  setTimeout(function() {
    process.stdout.write('\x07');
  }, i + delay)
  }

  
}
