export default function decorate(block) {
  [...block.children].forEach((row) => {
    const clientName = row.children[0];
    const feedback = row.children[1];

    const testimony = document.createElement("div");
    testimony.className = "testimony";

    const nameElement = document.createElement("h3");
    nameElement.className = "client-name";
    nameElement.textContent = clientName.textContent;

    const feedbackElement = document.createElement("p");
    feedbackElement.className = "client-feedback";
    feedbackElement.textContent = feedback.textContent;

    testimony.append(nameElement, feedbackElement);
    row.replaceWith(testimony);
  });
}
