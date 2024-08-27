const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const suggestionsData = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue']; // Substitua por seus dados reais

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();
  suggestions.innerHTML = '';

  if (value.length > 0) {
    const filteredSuggestions = suggestionsData.filter(suggestion => 
      suggestion.toLowerCase().startsWith(value)
    );
    filteredSuggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.classList.add('suggestion');
      li.textContent = suggestion;
      li.addEventListener('click', () => {
        searchInput.value = suggestion;
        suggestions.innerHTML = '';
      });
      suggestions.appendChild(li);
    });
  }
});
