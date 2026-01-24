const svgrect = (items = "") => {
  return `<svg width="350" height="150" x="10" y="10" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="350"
    height="150"
    rx="15"
    fill="#BDB9B3"
  />
  ${items}
</svg>`;
};
const calculatePixelWidths = (percentages, totalWidth) => {
  const exact = percentages.map(p => (p * totalWidth) / 100);
  const floors = exact.map(Math.floor);

  let used = floors.reduce((a, b) => a + b, 0);
  let remaining = totalWidth - used;

  const remainders = exact.map((v, i) => ({
    index: i,
    remainder: v - Math.floor(v)
  }));

  remainders
    .sort((a, b) => b.remainder - a.remainder)
    .slice(0, remaining)
    .forEach(r => floors[r.index]++);

  return floors;
};

const svgprogressbar = (percentage, colors) => {
  const totalWidth = 300;
  const heights = 20;
  const widths = calculatePixelWidths(percentage, totalWidth);

  let x = 0;
  let bars = "";

  for (let i = 0; i < widths.length; i++) {
    bars += `
      <rect
        x="${x}"
        height="${heights}"
        fill="${colors[i]}"
      >
      <animate attributeName="width" from="0" to='${widths[i]}' dur="0.6s" begin="${0.6*i}s" fill="freeze" />
      </rect>
    `;
    x += widths[i];
  }

  return `
    <svg width="320" height="20" x="25" y="55"
      xmlns="http://www.w3.org/2000/svg">

      <defs>
        <clipPath id="roundedBar">
          <rect
            width="${totalWidth}"
            height="${heights}"
            rx="10"
            ry="10"
          />
        </clipPath>
      </defs>

      <!-- background -->
      <rect
        width="${totalWidth}"
        height="${heights}"
        rx="10"
        fill="#374151"
      />

      <!-- clipped segments -->
      <g clip-path="url(#roundedBar)">
        ${bars}
      </g>

    </svg>
  `;
};

const svgtext = (text) => {
  return `
  <text
    x="150"
    y="30"
    font-size="32"
    fill="black"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Tahoma"
  >
    ${text}
  </text>
  `;
};
const svgBullets = (x, y, colour = "#22c55e", text = "Language") => {
  return `
    <svg
    width="75"
    height="20"
    x="${x}"
    y="${y}">
    <rect fill="${colour}" height="10" width="10" rx="5" />
    <text fill="white" font-size="13" y="10" x="12" font-family="Tahoma" >${text}</text>
    </svg>
    `;
};
const BulletPointSection = (languages,colors) => {
  let points = "";
  for (let index = 0; index < languages.length; index++) {
    // first row
    if (index < 4) {
      points += svgBullets(80 * index, 0, colors[index], languages[index]);
    }
    // second row
    else {
      points += svgBullets(80 * (index - 4), 30, colors[index], languages[index]);
    }
  }
  return `
   <svg
    x="25"
    y="80"
    width="300"
    height="60"
    >
${points}
  </svg>
`;
};
export { svgrect, svgprogressbar, svgtext, svgBullets, BulletPointSection };
