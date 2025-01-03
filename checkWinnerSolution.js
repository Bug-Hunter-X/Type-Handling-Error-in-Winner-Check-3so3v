function checkWinner() {
  // ... some code to check the winner ...
  if (typeof winner === 'string') {
    console.log("Winner is: " + winner.toUpperCase());
  } else if (winner === null || winner === undefined) {
    console.log("No winner yet");
  } else {
    console.log("Unexpected winner type: ", typeof winner);
    // Handle unexpected types appropriately (e.g., log error, throw exception)
  }
}