* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #a18cd1 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.stars {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
}

.star {
    position: absolute;
    width: 3px; height: 3px;
    background: white;
    border-radius: 50%;
    animation: twinkle 2s infinite;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

.container {
    text-align: center;
    padding: 20px;
    z-index: 10;
}

.title {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.3s forwards;
}

.message {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.8s forwards;
}

.heart-button {
    background: rgba(255, 255, 255, 0.3);
    padding: 1rem 2rem;
    border-radius: 50px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.5);
    transition: transform 0.2s;
    opacity: 0;
    animation: fadeInUp 1s ease-out 1.3s forwards;
    user-select: none;
}

.heart-button:active { transform: scale(0.95); }

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    z-index: 100;
    max-width: 90%;
    width: 400px;
    text-align: center;
    display: none;
    animation: popupAppear 0.5s ease-out;
}

.popup.show {
    display: block;
}

.popup-text {
    font-size: 1.3rem;
    color: #764ba2;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.popup-heart {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: heartBeat 1s ease-in-out;
}

.popup-close {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.popup-close:hover {
    transform: scale(1.05);
}

@keyframes popupAppear {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

@keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

.floating-heart {
    position: fixed;
    font-size: 2rem;
    pointer-events: none;
    animation: floatUp 4s ease-out forwards;
}

@keyframes floatUp {
    0% { transform: translateY(0) scale(0); opacity: 1; }
    50% { transform: translateY(-50vh) scale(1.2); opacity: 1; }
    100% { transform: translateY(-100vh) scale(0.8); opacity: 0; }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 99;
    display: none;
}

.overlay.show {
    display: block;
}

@media (max-width: 768px) {
    .title { font-size: 1.8rem; }
    .message { font-size: 1.1rem; }
    .popup { width: 90%; padding: 1.5rem; }
    .popup-text { font-size: 1.1rem; }
}
