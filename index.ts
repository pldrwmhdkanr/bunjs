const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    return new Response("你好桑老师!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);