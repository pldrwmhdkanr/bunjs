// server.mjs (适用于部署的版本)
import { createServer } from 'node:http';

// 从环境变量获取端口，如果不存在则默认为 3000 (用于本地开发)
const port = process.env.PORT || 3000;

// 为了部署，我们通常不指定 host，让它默认为 '0.0.0.0'
const host = '0.0.0.0'; 

const resp = {
  code: 200,
  message: '在吗, 小桑。',
}

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(resp));
});

server.listen(port, host, () => {
  console.log(`Server running and listening on host ${host}, port ${port}`);
});