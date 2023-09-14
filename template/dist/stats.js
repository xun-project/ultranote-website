// stats.js

// Function to fetch and display hashrate
async function fetchHashrate() {
    try {
        const response = await fetch("https://explorer.ultranote.org/q/hashrate/");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const hashpersec = await response.text();

        let description;
        if (hashpersec / 1000000 > 1) {
            description = `${(hashpersec / 1000000).toFixed(2)} MH/s`;
        } else if (hashpersec / 1000 > 1) {
            description = `${(hashpersec / 1000).toFixed(2)} kH/s`;
        } else {
            description = `${hashpersec.toFixed(2)} H/s`;
        }

        const e = document.querySelector('.js-hashrate');
        if (e) {
            e.textContent = description;
        }
    } catch (error) {
        console.error('Error fetching Hashrate:', error);
    }
}

// Function to fetch and display height
async function fetchHeight() {
    try {
        const response = await fetch("https://explorer.ultranote.org/q/height/");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const height = await response.text();

        const e = document.querySelector('.js-height');
        if (e) {
            e.textContent = height;
        }
    } catch (error) {
        console.error('Error fetching Height:', error);
    }
}

// Function to fetch and display reward
async function fetchReward() {
    try {
        const response = await fetch("https://explorer.ultranote.org/q/reward/");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const reward = await response.text();

        const e = document.querySelector('.js-reward');
        if (e) {
            e.textContent = `${parseFloat(reward).toFixed(2)} XUNI`;
        }
    } catch (error) {
        console.error('Error fetching Reward:', error);
    }
}

// Function to fetch and display supply
async function fetchSupply() {
    try {
        const response = await fetch("https://explorer.ultranote.org/q/supply/");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const supply = await response.text();

        const e = document.querySelector('.js-supply');
        if (e) {
            e.textContent = `${parseFloat(supply).toFixed(6)} XUNI`;
        }
    } catch (error) {
        console.error('Error fetching Supply:', error);
    }
}

// Call the fetch functions when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    fetchHashrate();
    fetchHeight();
    fetchReward();
    fetchSupply();
});
