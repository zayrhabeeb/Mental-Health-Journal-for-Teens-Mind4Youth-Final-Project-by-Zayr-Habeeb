const affirmations = [
  "I am in control of my thoughts and emotions.",
  "I am capable of overcoming challenges.",
  "Every day, I grow stronger and more resilient.",
  "It’s okay to not be okay. I will take it one step at a time.",
  "I am worthy of love, peace, and happiness."
];

function generateAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmationList = document.getElementById("affirmationList");
  const newAffirmation = document.createElement("li");
  newAffirmation.textContent = affirmations[randomIndex];
  affirmationList.appendChild(newAffirmation);
}

function saveJournal() {
  alert("Your journal entries have been saved!");
}
