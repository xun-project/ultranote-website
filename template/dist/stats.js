// stats.js

// Function to fetch and display hashrate
async function fetchHashrate() {
    try {
        const response = await fetch("https://explorer.ultranote.org/q/hashrate/", { mode: 'no-cors' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Use response.text() if the data is in text format, otherwise, use response.json() for JSON data
        const responseData = await response.json(); // Assuming the response is JSON data

        // Extract the hashrate from the JSON response (modify as needed)
        const hashRate = responseData.hashrate;

        const e = document.querySelector('.js-hashrate');
        if (e) {
            e.textContent = `${hashRate.toFixed(2)} MH/s`;
        }
    } catch (error) {
        console.error('Error fetching Hashrate:', error);
    }
}

// Function to fetch and display height
async function fetchHeight() {
    try {
        const response = await fetch("https://explorer.ultranote.org/q/height/", { mode: 'no-cors' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Use response.text() if the data is in text format, otherwise, use response.json() for JSON data
        const responseData = await response.json(); // Assuming the response is JSON data

        // Extract the height from the JSON response (modify as needed)
        const height = responseData.height;

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
        const response = await fetch("https://explorer.ultranote.org/q/reward/", { mode: 'no-cors' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Use response.text() if the data is in text format, otherwise, use response.json() for JSON data
        const responseData = await response.json(); // Assuming the response is JSON data

        // Extract the reward from the JSON response (modify as needed)
        const reward = responseData.reward;

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
        const response = await fetch("https://explorer.ultranote.org/q/supply/", { mode: 'no-cors' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Use response.text() if the data is in text format, otherwise, use response.json() for JSON data
        const responseData = await response.json(); // Assuming the response is JSON data

        // Extract the supply from the JSON response (modify as needed)
        const supply = responseData.supply;

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