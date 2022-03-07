let textbox = document.getElementById('textbox')

textbox.value = localStorage.getItem('content')

textbox.addEventListener('input', () => {
    localStorage.setItem('content', textbox.value)
})