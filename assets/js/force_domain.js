if (!["jonathanj.nl", "127.0.0.1", "localhost"].includes(window.location.hostname)) {
    window.top.location.href = 'https://jonathanj.nl' + window.location.pathname;
}