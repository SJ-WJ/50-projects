const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
});

function createTags(input) {
  // Create an array, each value separated by the comma
  const tags = input.split(',')
  // Trim the whitespace with the filter
  .filter(tag => tag.trim() !== '').map(tag => tag.trim())

  // Clear tags
  tagsElement.innerHTML = '';

  // Creating the tags
  tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  })
}