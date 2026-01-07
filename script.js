document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Brand Info
    document.title = config.brand.name + " | Official";
    document.getElementById('nav-logo').innerText = config.brand.name;
    document.getElementById('hero-title').innerText = config.brand.name;
    document.getElementById('hero-tagline').innerText = config.brand.tagline;
    document.getElementById('footer-text').innerText = config.brand.footerText;
    
    // Set Logo
    const logoImg = document.getElementById('hero-logo');
    if(logoImg) logoImg.src = config.brand.logoUrl;

    // 2. Render Links Dynamically
    const grid = document.getElementById('link-grid');
    
    config.links.forEach(link => {
        // Determine theme class
        const themeClass = link.color === 'red' ? 'red-theme' : 'blue-theme';
        
        // Create HTML for card
        const cardHTML = `
            <a href="${link.url}" target="_blank" class="link-card ${themeClass}">
                <div class="card-icon">${link.icon}</div>
                <div class="card-text">
                    <h3>${link.title}</h3>
                    <span>Click to Open</span>
                </div>
            </a>
        `;
        grid.innerHTML += cardHTML;
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}
