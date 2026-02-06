const navbarHTML = `
    <nav>
        <a href="index.html" class="logo-container">
            <img src="res/Hoshi_Blue_Icon.png" 
                 alt="Air Hoshi Logo" 
                 class="nav-icon">
            <span class="logo-text">Air Hoshi</span>
        </a>

        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <ul class="nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="operations.html">Operations</a></li>
            <li><a href="fleet.html">Our Fleet</a></li>
            <li><a href="people.html">Our Crew</a></li>
            <li><a href="history.html">Our History</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;

document.getElementById('navbar-placeholder').innerHTML = navbarHTML;

const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });

}
