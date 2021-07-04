let amount = 0;

const button = document.getElementById("button");
const span = document.getElementById("counter");

console.time("⏰");
button.onclick = () => {
    amount = amount + 1;
    span.innerHTML = `Clicks: ${amount}`;
    console.log(`Button clicked ${amount} times.`);
    console.timeEnd("⏰");
    console.time("⏰");
}