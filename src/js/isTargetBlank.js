const links = document.querySelectorAll('a');

links.forEach(link => {
    const prevTitle = link.title;
    link.title = `${link.target === '_blank' ? 'Blank': 'Not blank'}${prevTitle ? `. ${prevTitle}` : ''}`;
});
