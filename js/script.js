function loadAnimation() {
    const animationContainer = document.getElementById('sidebar_animation');
    if (!animationContainer.querySelector('dotlottie-player') && window.innerWidth >= 768) {
        const player = document.createElement('dotlottie-player');
        player.setAttribute('src', 'assets/Animation - 1710919846827.json');
        player.setAttribute('background', 'transparent');
        player.setAttribute('speed', '0.5');
        player.setAttribute('style', 'width: 200px; height: 200px;');
        player.setAttribute('loop', '');
        player.setAttribute('autoplay', '');
        animationContainer.appendChild(player);
    }
}

function unloadAnimation() {
    const animationContainer = document.getElementById('sidebar_animation');
    if (animationContainer) {
        animationContainer.innerHTML = '';
    }
}


function handleScreenSizeChange() {
    const sidebar = document.getElementById('sidebar');
    const rightSection = document.getElementById('right-section');
    const navLinks = document.querySelector('.sidebar-nav');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
        // Ensures sidebar is not "active" when screen width is >= 768px
        sidebar.classList.remove('active');
        rightSection.style.width = '7%'; // Reset to original width or whatever is appropriate for your design
        navLinks.style.display = ''; // Remove any inline display style to ensure visibility
        loadAnimation();
    } else {
        unloadAnimation();
        // Ensure the sidebar and right section are in the correct state for smaller screens
        if (!sidebar.classList.contains('active')) {
            navLinks.style.display = 'none'; // Hide nav links if sidebar is not active
        }
    }
}



function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const rightSection = document.getElementById('right-section');
    const navLinks = document.querySelector('.sidebar-nav');

    sidebar.classList.toggle('active');
    navLinks.style.display = sidebar.classList.contains('active') ? 'flex' : 'none';

    // Check if the sidebar is active and adjust the right section width accordingly
    if (sidebar.classList.contains('active')) {
        rightSection.style.width = '20%'; // Reduce the width when sidebar is active
    } else {
        rightSection.style.width = '7%'; // Reset to original width when sidebar is not active
    }
}


function toggleTheme() {
    const body = document.body;
    const bulbIcon = document.getElementById('icon-bulb');
    const moonIcon = document.getElementById('icon-moon');

    bulbIcon.style.display = (bulbIcon.style.display === 'none') ? 'block' : 'none';
    moonIcon.style.display = (moonIcon.style.display === 'none') ? 'block' : 'none';

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        document.querySelectorAll('.section').forEach(el => el.style.backgroundColor = '#161617');
        document.querySelectorAll('.content-container').forEach(el => el.style.backgroundColor = '#1c1c1e');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        document.querySelectorAll('.section').forEach(el => el.style.backgroundColor = '#fefeff');
        document.querySelectorAll('.content-container').forEach(el => el.style.backgroundColor = '#f0f4f9');
    }
}

document.addEventListener("DOMContentLoaded", handleScreenSizeChange);
window.addEventListener('resize', handleScreenSizeChange);
document.addEventListener("DOMContentLoaded", function() {
    handleScreenSizeChange(); // Existing function call

    // Welcome overlay logic
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    if (welcomeOverlay) {
        setTimeout(() => {
            welcomeOverlay.style.opacity = '0';
            welcomeOverlay.style.visibility = 'hidden';
            welcomeOverlay.style.transition = 'opacity 1s ease, visibility 1s';
        }, 1500); 
    }
});
function toggleSection() {
    const section = document.querySelector('.content-container h2 + p'); // Adjust selector as needed
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

document.querySelectorAll('.blog-post').forEach(post => {
    post.addEventListener('click', function() {
        this.classList.toggle('expanded');
        const fullContent = this.querySelector('.blog-full-content');
        
        if (this.classList.contains('expanded')) {
            fullContent.style.maxHeight = fullContent.scrollHeight + "px";
        } else {
            fullContent.style.maxHeight = null;
        }
    });
});

