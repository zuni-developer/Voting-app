const voteButtons = document.querySelectorAll(".vote-button");

voteButtons.forEach(button => {
  button.addEventListener("click", function() {
    const university = this.getAttribute("data-university");
    alert(`You have voted for ${university}`);
    voteButtons.forEach(btn => btn.disabled = true);
    setTimeout(() => {
      window.location.href = "index.html";
    } , 2000)
  });
});


