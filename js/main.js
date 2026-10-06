/* Progressive enhancement: navigation is visible until this script runs. */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (menuButton && navigation) {
    menuButton.hidden = false;
    document.documentElement.classList.add('nav-enhanced');

    function setMenu(open) {
        menuButton.setAttribute('aria-expanded', String(open));
        navigation.classList.toggle('is-open', open);
        menuButton.querySelector('span').textContent = open ? '−' : '+';
    }

    menuButton.addEventListener('click', () => {
        setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    navigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            setMenu(false);
            menuButton.focus();
        }
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', () => setMenu(false));
}
