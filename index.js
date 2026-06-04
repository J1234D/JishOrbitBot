require("dotenv").config();

const { App } = require("@slack/bolt");
console.log(process.env.SLACK_BOT_TOKEN);
console.log(process.env.SLACK_APP_TOKEN);
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/orbit-status", async ({ ack, respond }) => {
  await ack();

  await respond("🟢 JishOrbit systems operational");
});

app.command("/orbit-hello", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Hello!\nLatency: ${latency}ms` });
});

app.command("/orbit-vibe", async ({ ack, respond }) => {
  await ack();

  const vibes = [
    "🌌 Cosmic productivity detected",
    "🚀 Locked in and coding hard",
    "☕ Running on caffeine and hope",
    "🐛 Fighting bugs heroically",
    "🎧 Synthwave coding mode activated"
  ];

  const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];

  await respond(randomVibe);
});

app.command("/orbit-ship", async ({ ack, respond }) => {
  await ack();

  const ideas = [
    "🌌 Build an AI-powered plant tracker for astronauts",
    "🚀 Create a mood-based music bot",
    "🤖 Make a bot that roasts bad code",
    "🛰️ Build a space weather dashboard",
    "🎮 Create a multiplayer browser game",
    "🌱 Make a smart garden assistant",
    "☕ Build a caffeine tracker for coders"
  ];

  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];

  await respond(randomIdea);
});



(async () => {
  await app.start();
  console.log("bot is running!");
})();