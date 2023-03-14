const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  // Random select functionality
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10)

    randomSelect()
  }
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

// Random select functionality
function randomSelect() {
  const times = 30;
  
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag)

    setTimeout(() => {
      unhighlightTag(randomTag)
    }, 100);

  }, 100);

  // Stopping the interval and randomly selecting a tag
  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag)
    })
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

// Higlighting and un-highlighting the tags
function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}