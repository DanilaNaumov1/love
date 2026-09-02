let isFirstClick = true;

// Создаём звёзды на фоне
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    starsContainer.appendChild(star);
}

function handleClick(e) {
    if (isFirstClick) {
        isFirstClick = false;
        showPopup();
    } else {
        createHearts(e);
    }
}

function showPopup() {
    document.getElementById('overlay').classList.add('show');
    document.getElementById('popup').classList.add('show');
}

function closePopup() {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('popup').classList.remove('show');
}

// Сердечки при клике
function createHearts(e) {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '🌸', '✨'];
    const rect = e.target.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 100) + 'px';
            heart.style.top = rect.top + 'px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 80);
    }
}
