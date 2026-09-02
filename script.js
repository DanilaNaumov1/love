// Создаем падающие сердечки автоматически
function createFallingHearts() {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    const container = document.getElementById('hearts-container');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 500);
}

// Создаем сердечки при клике на кнопку
function createHearts() {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘'];
    const container = document.getElementById('hearts-container');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            heart.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
            
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}

// Запускаем автоматические сердечки при загрузке
window.addEventListener('load', createFallingHearts);
