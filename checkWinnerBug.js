function checkWinner() {
  // ... some code to check the winner ...
  if (winner) {
    // Incorrectly assumes that winner is always a string.
    console.log("Winner is: " + winner.toUpperCase());
  } else {
    console.log("No winner yet");
  }
}