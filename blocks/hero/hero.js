/**
 * Hero Block
 * Creates a hero section with heading, text, and optional CTA button
 */
export default function decorate(block) {
  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  // Get all rows from the block
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];

    // Process each cell in the row
    cells.forEach((cell) => {
      // Check if cell contains a link (potential CTA button)
      const link = cell.querySelector('a');
      if (link) {
        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        // Move the link to the button container
        buttonContainer.appendChild(link);
        heroContent.appendChild(buttonContainer);
      } else if (cell.textContent.trim()) {
        // Regular content (heading, paragraph, etc.)
        heroContent.appendChild(cell);
      }
    });
  });

  // Clear the block and add the structured content
  block.innerHTML = '';
  block.appendChild(heroContent);
}
