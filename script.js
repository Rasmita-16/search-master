const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions');
const resultsBox = document.getElementById('results');

const suggestions = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Kiwi',
    'Mango',
    'Orange',
    'Peach',
    'Pineapple',
    'Raspberry',
    'Strawberry',
    'Watermelon'
];

searchInput.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'none';

    if (inputValue) {
        const filteredSuggestions = suggestions.filter(s => s.toLowerCase().includes(inputValue));
        if (filteredSuggestions.length) {
            suggestionsBox.style.display = 'block';
            filteredSuggestions.forEach(s => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = s;
                suggestionDiv.onclick = () => {
                    searchInput.value = s;
                    suggestionsBox.style.display = 'none';
                    displayResults(s);
                };
                suggestionsBox.appendChild(suggestionDiv);
            });
        }
    }
});

document.getElementById('search-button').addEventListener('click', () => {
    displayResults(searchInput.value);
});

function displayResults(query) {
    resultsBox.innerHTML = '';
    resultsBox.style.display = 'block';

    if (query) {
        resultsBox.innerHTML = `<div>Results for "${query}":</div>`;
        suggestions.forEach(item => {
            if (item.toLowerCase().includes(query.toLowerCase())) {
                const resultDiv = document.createElement('div');
                resultDiv.textContent = item;
                resultsBox.appendChild(resultDiv);
            }
        });
    } else {
        resultsBox.innerHTML = '<div>Please enter a search term.</div>';
    }
}
