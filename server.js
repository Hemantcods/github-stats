const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  const value = Math.floor(Math.random() * 100);
  const text=`
  <text
    x="150"
    y="45"
    font-size="32"
    fill="black"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Tahoma"
  >Top Languages</text>
  `
  const bar =`<svg width="320" height="20" x="35" y="65" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="20" ry="20" rx="10"  fill="#374151"/>

  <!-- Segment 1 -->
  <rect height="20" rx="10"  fill="#22c55e">
    <animate attributeName="width" from="0" to="50" dur="0.6s" fill="freeze"/>
  </rect>
   <rect height="20" x="20"  fill="#22c55e">
  <animate attributeName="width" from="50" to="90" dur="0.6s" fill="freeze"/>
  </rect>

  <!-- Segment 2 -->
  <rect x="90" height="20" fill="#3b82f6">
    <animate attributeName="width" from="0" to="60" dur="0.6s" begin="0.6s" fill="freeze"/>
  </rect>

  <!-- Segment 3 -->
  <rect x="150" height="20" fill="#f59e0b">
    <animate attributeName="width" from="0" to="75" dur="0.6s" begin="1.2s" fill="freeze"/>
  </rect>

  <!-- Segment 4 -->
  <rect x="225" height="20" rx="10"  fill="#ef4444">
    <animate attributeName="width" from="0" to="75" dur="0.6s" begin="1.8s" fill="freeze"/>
  </rect>
  <rect x="225" height="20"   fill="#ef4444">
    <animate attributeName="width" from="0" to="50" dur="0.6s" begin="1.8s" fill="freeze"/>
  </rect>
</svg>
`
rectangle=`<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="10"
    y="10"
    width="350"
    height="150"
    rx="15"
    fill="#BDB9B3"
  />
  ${bar}
  ${text}
</svg>
`
  res.end(rectangle);
});

server.listen(3000, () => {
  console.log("SVG server running on http://localhost:3000");
});
