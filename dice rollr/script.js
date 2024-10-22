function showDice() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.getElementById('dice-image');
    const diceNumText = document.getElementById('diceNum');

    // Update the dice image based on the rolled number
    diceImage.src = `/dice-${randomNum}.png`; // Ensure you have images named dice-1.png to dice-6.png
    diceNumText.textContent = `You rolled a ${randomNum}!`;
}
