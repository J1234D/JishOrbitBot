require("dotenv").config();

const { App } = require("@slack/bolt");
console.log(process.env.SLACK_BOT_TOKEN);
console.log(process.env.SLACK_APP_TOKEN);
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/orbit-hello", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Hello!\nLatency: ${latency}ms` });
});



(async () => {
  await app.start();
  console.log("bot is running!");
})();