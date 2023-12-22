function fetchapi(source) {
    const url = fetch(source)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((response) => (response == 404 ? console.log('Error') : console.log('Success')))
        .catch((error) => console.log(error));
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loopWithSleep(count, span, url) {
    for (let i = 0; i < count; i++) {
        console.log(`test ${i}`);
        fetchapi(url);
        await sleep(span);
    }
}

const result = loopWithSleep(2, 100, 'http://localhost:3000/api?provider=metamusk/');

console.log(result);
