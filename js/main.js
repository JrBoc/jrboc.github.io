$(document).ready(function () {
    new Typed("#navbar_brand_text", {
        strings: [
            'Developer',
            'Web',
            'PHP',
            'Laravel',
            'Livewire',
            'Firebase',
            'JavaScript',
            'NPM',
            'SQL',
            'CSS',
            'SCSS',
        ],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true,
    });


    $('.parallax-window').each(function () {
        $(this).parallax()
    })
});