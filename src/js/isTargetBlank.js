window.onload = () => {
    processLinks();
}

chrome.runtime.onMessage.addListener(msg => {
    if (msg.type === 'nav') {
        processLinks();
    }
});

function processLinks() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        if (link.getAttribute('data-processed') !== 'true') {
            link.title = `${link.target === '_blank' ? 'Blank': 'Not blank'}${link.title ? `. ${link.title}` : ''}`;
            link.setAttribute('data-processed', 'true');
        }
    });
}
