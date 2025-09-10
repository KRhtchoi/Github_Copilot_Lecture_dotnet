window.dinoGamePreventSpaceScroll = function (element) {
    element.addEventListener('keydown', function (e) {
        if (e.code === 'Space') {
            e.preventDefault();
        }
    });
};
