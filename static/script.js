function generateImage() {
    const prompt = document.getElementById('userInput').value;
    const imageContainer = document.getElementById('imageContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous content
    imageContainer.innerHTML = '';
    errorMessage.textContent = '';

    if (!prompt.trim()) {
        errorMessage.textContent = 'Please enter a valid prompt!';
        return;
    }

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `Generated image for prompt: ${prompt}`;
    img.onload = () => {
        imageContainer.appendChild(img);
    };
    img.onerror = () => {
        errorMessage.textContent = 'Failed to load the image. Please try again with a different prompt.';
    };
}



// Dropdown Menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const apiSelectionInput = document.getElementById('api_selection');

    if (dropdownItems.length > 0) {
        const firstItem = dropdownItems[0];
        dropdownButton.textContent = firstItem.textContent;
        apiSelectionInput.value = firstItem.getAttribute('data-value');
    }

    dropdownButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            dropdownButton.textContent = this.textContent;
            apiSelectionInput.value = this.getAttribute('data-value');
            dropdownMenu.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button')) {
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            }
        }
    });
});


// File upload
const actualBtn = document.getElementById('file-upload');
const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name;
});
