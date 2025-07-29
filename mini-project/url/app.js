import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      try {
        const data = await readFile(path.join("public", "index.html"));
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("404 page not found");
      }
    }
  }
});
const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
