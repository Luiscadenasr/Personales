const translations = {
    es: {
        title: 'Módulos en JavaScript',
        button: 'Traducir al inglés'
    },
    en: {
        title: 'JavaScript Modules',
        button: 'Traducir al español'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('#titulo');
    const btn = document.querySelector('#btn-traducir');

    if (!h1 || !btn) {
        return;
    }

    let currentLang = 'es';

    function updateText() {
        h1.textContent = translations[currentLang].title;
        btn.textContent = translations[currentLang].button;
        document.title = translations[currentLang].title;
        console.log('Traducción actualizada:', currentLang);
    }

    btn.addEventListener('click', function() {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateText();
    });

    updateText();
});
