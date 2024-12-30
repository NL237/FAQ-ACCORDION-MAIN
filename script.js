document.querySelectorAll('.task').forEach(task => {
    const toggleButton = task.querySelector('img'); // L'image "plus/moins"
    const paragraph = task.querySelector('.para');  // Le paragraphe associé
  
    toggleButton.addEventListener('click', () => {
      const isHidden = paragraph.style.display === 'none' || paragraph.style.display === ''; 
  
      // Basculer la visibilité du paragraphe
      paragraph.style.display = isHidden ? 'block' : 'none';
  
      // Changer l'image entre "plus" et "moins"
      toggleButton.src = isHidden 
        ? 'assets/images/icon-minus.svg' 
        : 'assets/images/icon-plus.svg';
    });
});
  