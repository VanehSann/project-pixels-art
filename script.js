let selectedColor = document.querySelectorAll('.color');
// inspirado em = https://stackoverflow.com/questions/65530318/add-remove-class-when-clicking-on-element-with-pure-javascript
selectedColor.forEach(i => {
  i.addEventListener('click', function() {
    selectedColor.forEach(j => j.classList.remove('selected'));
    this.classList.add('selected');
  });
});