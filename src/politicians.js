// politicians.js

const voteButtons = document.querySelectorAll('.vote-button');
const voteCounts = {
  'Imran Khan': 0,
  'Nawaz Sharif': 0
};


voteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const politician = button.getAttribute('data-politician');

    if (voteCounts[politician] === 0) {
      voteCounts[politician]++;
      updateVoteCountDisplay(politician);
      button.disabled = true; // Disable the button after voting

      // Save vote status in local storage to prevent further voting
      localStorage.setItem(politician, 'voted');

      // Redirect to home page
      setTimeout(() => {
        window.location.href = "index.html"; // Replace with your actual home page
      }, 2000); // Redirect after 2 seconds (adjust as needed)
    }
  });
});

// Restore disabled state for buttons if user returns to the page
voteButtons.forEach(button => {
  const politician = button.getAttribute('data-politician');
  if (localStorage.getItem(politician) === 'voted') {
    button.disabled = false;
  }
});

function updateVoteCountDisplay(politician) {
  const voteCountElement = document.getElementById(`voteCount${politician.replace(' ', '')}`);
  voteCountElement.textContent = `${voteCounts[politician]} Vote${voteCounts[politician] === 1 ? '' : 's'}`;
}
