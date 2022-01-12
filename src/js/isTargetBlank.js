window.addEventListener('mousemove', ({ target }) => handleMouseMove(target));

function handleMouseMove(elem) {
    if (elem === null) {
        return;
    } else if (elem.tagName === 'A') {
        addTitle(elem);
    } else {
        handleMouseMove(elem.parentNode);
    }
}

function addTitle(linkElem) {
    if (linkElem.getAttribute('data-processed-by-is-target-blank') !== 'true') {
        const prevTitle = linkElem.title;
        linkElem.title = `${linkElem.target === '_blank' ? 'Blank': 'Not blank'}${prevTitle ? `. ${prevTitle}` : ''}`;
        linkElem.setAttribute('data-processed-by-is-target-blank', 'true');
    }
}
