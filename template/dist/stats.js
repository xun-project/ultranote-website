// stats.js
import fetch from 'node-fetch';
import https from 'https';
import Pusher from 'pusher';

const pusher = new Pusher({
    appId: "1649144",
    key: "d0e03326515d43703ca2",
    secret: "54038ead6b647c8ebc64",
    cluster: "us2",
    useTLS: true
});
const agent = new https.Agent({
    rejectUnauthorized: false
});
// Function to fetch and display hashrate

async function fetchHashrate() {
    // // try {
    //     // const response = await fetch("https://explorer.ultranote.org/q/hashrate/", {headers: {"Accept": "application/json"}, mode: 'no-cors'});
    //     const response = await axios.get('https://explorer.ultranote.org/q/hashrate/');
    //     // const responseData = await response.json(); 
    //     console.log("hashrate--->", response, response.body);
    //     // if (!response.ok) {
    //     //     throw new Error('Network response was not ok');
    //     // }

    //     // // Use response.text() if the data is in text format, otherwise, use response.json() for JSON data
    //     // // const responseData = await response.json(); // Assuming the response is JSON data

    //     // // Extract the hashrate from the JSON response (modify as needed)
    //     // const hashRate = responseData.hashrate;

    //     // const e = document.querySelector('.js-hashrate');
    //     if (e) {
    //         e.textContent = `${hashRate.toFixed(2)} MH/s`;
    //     }
    // // } catch (error) {
    // //     console.error('Error fetching Hashrate:', error);
    // // }
    
    fetch('https://explorer.ultranote.org/q/hashrate/', { agent })
    .then(async response => {
        let data = await response.text();
        // console.log(data);
        pusher.trigger("Dragon","hash-rate", {
            message: data
        });
    })
    .catch(error => {
        // Handle errors
    });

}

// Function to fetch and display height
async function fetchHeight() {

    fetch('https://explorer.ultranote.org/q/height/', { agent })
    .then(async response => {
        let data = await response.text();
        
        pusher.trigger("Dragon","height", {
            message: data
        });


    })
    .catch(error => {
        // Handle errors
    });
}

// // Function to fetch and display reward
async function fetchtotalsupply() {
    fetch('https://explorer.ultranote.org/q/totalsupply/', { agent })
    .then(async response => {
        let data = await response.text();

        pusher.trigger("Dragon","totalsupply", {
            message: data
        });


    })
    .catch(error => {
        // Handle errors
    });
}

// // Function to fetch and display supply
async function fetchSupply() {

    fetch('https://explorer.ultranote.org/q/supply/', { agent })
    .then(async response => {

        let data = await response.text();
        pusher.trigger("Dragon","supply", {
            message: data
        });


    })
    .catch(error => {
        // Handle errors
    });
}

async function fetchtotalbanked() {

    fetch('https://explorer.ultranote.org/q/totalbanked/', { agent })
    .then(async response => {
        let data = await response.text();
        
        pusher.trigger("Dragon","totalbanked", {
            message: data
        });


    })
    .catch(error => {
        // Handle errors
    });
}



    setInterval(() => {
        setTimeout(() => {
            fetchHashrate();
        },400)
        setTimeout(() => {
            fetchHeight();
        },800)
        setTimeout(() => {
            fetchtotalsupply();
        },1200)
        setTimeout(() => {
            fetchSupply();
        },1600)
        setTimeout(() => {
            fetchtotalbanked();
        },2000)
    },2000)
    