const smallCup = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCup.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {

  // Check
  if (smallCup[idx].classList.contains('full') && !smallCup[idx].nextElementSibling.classList.contains('full')) {
    idx --
  }

  // Filling up the small cups 
  smallCup.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
}