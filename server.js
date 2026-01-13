const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  const value = Math.floor(Math.random() * 100);

  const svg =`<svg width="300" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="40" rx="20" fill="#374151"/>

  <!-- Segment 1 -->
  <rect height="40"  fill="#22c55e">
    <animate attributeName="width" from="0" to="90" dur="0.6s" fill="freeze"/>
  </rect>

  <!-- Segment 2 -->
  <rect x="90" height="40" fill="#3b82f6">
    <animate attributeName="width" from="0" to="60" dur="0.6s" begin="0.6s" fill="freeze"/>
  </rect>

  <!-- Segment 3 -->
  <rect x="150" height="40" fill="#f59e0b">
    <animate attributeName="width" from="0" to="75" dur="0.6s" begin="1.2s" fill="freeze"/>
  </rect>

  <!-- Segment 4 -->
  <rect x="225" height="40" rx="20"  fill="#ef4444">
    <animate attributeName="width" from="0" to="75" dur="0.6s" begin="1.8s" fill="freeze"/>
  </rect>
  <rect x="225" height="40"   fill="#ef4444">
    <animate attributeName="width" from="0" to="50" dur="0.6s" begin="1.8s" fill="freeze"/>
  </rect>
</svg>
`
rectangle=`<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="10"
    y="10"
    width="180"
    height="100"
    rx="15"
    fill="#3b82f6"
  />
  ${svg}
</svg>
`
  res.end(rectangle);
});

server.listen(3000, () => {
  console.log("SVG server running on http://localhost:3000");
});
