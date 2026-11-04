// 1. Menggerakkan Custom Cursor
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Efek Klik Mengeluarkan Gelembung Air
document.addEventListener('click', (e) => {
    createBubble(e.clientX, e.clientY);
});

function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.classList.add('cursor-bubble');
    
    const size = Math.random() * 15 + 5;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    
    bubble.style.left = (x - size/2) + 'px';
    bubble.style.top = (y - size/2) + 'px';
    
    document.body.appendChild(bubble);
    
    setTimeout(() => { bubble.remove(); }, 1500);
}

// 3. Efek Hover untuk Elemen Interaktif
const interactiveElements = document.querySelectorAll('a, .project-card, nav .logo');
interactiveElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursor.style.backgroundColor = 'rgba(0, 240, 255, 0.2)';
    });
    elem.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// 4. Sistem Kebun Binatang Laut (Emoji Super Rame & Multi-Arah)
const oceanBg = document.getElementById('ocean-bg');
const seaEmojis = ['🦈', '🐬', '🐙', '🐠', '🐋', '🐢', '🦀', '🐡', '🦑', '🪼', '🦐', '🐠', '🐟'];
const directions = ['top', 'bottom', 'left', 'right'];

function spawnSeaEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('sea-emoji');
    emoji.innerText = seaEmojis[Math.floor(Math.random() * seaEmojis.length)];
    
    // Tentukan Arah Gerakan Secara Acak
    const moveDirection = directions[Math.floor(Math.random() * directions.length)];
    
    // Atur Posisi Awal Berdasarkan Arah Gerak
    if (moveDirection === 'top' || moveDirection === 'bottom') {
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationName = moveDirection === 'top' ? 'swimToTop' : 'swimToBottom';
    } else {
        emoji.style.top = Math.random() * 100 + 'vh';
        emoji.style.animationName = moveDirection === 'right' ? 'swimToRight' : 'swimToLeft';
    }
    
    // Efek Waktu: Ada yang super lambat (20 detik) dan ada yang cepat (6 detik)
    const duration = Math.random() * 14 + 6; 
    emoji.style.animationDuration = duration + 's';
    emoji.style.animationTimingFunction = 'linear';
    emoji.style.animationIterationCount = 'infinite';
    
    // Ukuran acak untuk variasi visual laut
    emoji.style.fontSize = Math.random() * 1.8 + 1.2 + 'rem';
    
    // Berikan sedikit efek buram/transparansi acak agar kedalaman laut terasa nyata
    emoji.style.opacity = Math.random() * 0.3 + 0.15;

    oceanBg.appendChild(emoji);
    
    // Hapus otomatis setelah durasi jalannya habis agar memori browser tetap enteng
    setTimeout(() => {
        emoji.remove();
    }, duration * 1000);
}

// MEMBUAT RAME: Munculkan 15 emoji langsung di awal saat website dibuka
for (let i = 0; i < 15; i++) {
    setTimeout(spawnSeaEmoji, Math.random() * 5000);
}

// Kecepatan Spawn: Setiap 400 milidetik (0.4 detik) akan lahir emoji baru secara konstan!
setInterval(spawnSeaEmoji, 400);
