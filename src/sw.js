chrome.webNavigation.onHistoryStateUpdated.addListener(async () => {
    const [{ id: tabId }] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tabId, {
        type: 'nav'
    });
});
