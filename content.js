function gfg_streak() {
    let count = 0;
    let days = document.getElementsByClassName('ch-subdomain-bg');
    for (let i = 0; i < days.length; i++) {
        if (days[i].hasAttribute('style')) count++;
    }
    return count;
}

function displayStreak(streak) {
    const streakDisplay = document.createElement('div');
    streakDisplay.id = 'gfg-streak-display';
    streakDisplay.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background-color: #4CAF50;
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        z-index: 9999;
    `;
    streakDisplay.textContent = `Current Streak: ${streak} days`;
    document.body.appendChild(streakDisplay);
}

function checkForCalHeatmap() {
    const observer = new MutationObserver((mutations, obs) => {
        const calHeatmap = document.getElementsByClassName('ch-subdomain-bg')[365];
        if (calHeatmap) {
            setInterval(() => {
                const streak = gfg_streak();
                displayStreak(streak);
            }, 1000);
            obs.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

checkForCalHeatmap();
