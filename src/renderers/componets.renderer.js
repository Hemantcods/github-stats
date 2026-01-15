const svgrect=(items="")=>{
    return `<svg width="350" height="150" x="10" y="10" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="350"
    height="150"
    rx="15"
    fill="#BDB9B3"
  />
  ${items}
</svg>`
}

const svgprogressbar=()=>{
    return `<svg width="320" height="20" x="25" y="55" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="20"  rx="10"  fill="#374151"/>

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
}
const svgtext=(text)=>{
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
  `
}
const svgBullets=({x,y,colour="#22c55e",text="Language"})=>{
    return `
    <svg
    width="75"
    height="20"
    x="${x}%"
    y="${y}%"
    >
    <rect fill=${colour} height="10" width="10" rx="5" />
    <text fill="white" font-size="13" y="10" x="12" font-family="Tahoma" >${text}</text>
    </svg>
    `
}
const BulletPointSection=`
   <svg
    x="25"
    y="80"
    width="300"
    height="60"
    >
${svgBullets({ x: 0, y: 0 })}
${svgBullets({ x: 25, y: 0 })}
${svgBullets({ x: 50, y: 0 })}
${svgBullets({ x: 75, y: 0 })}
${svgBullets({ x: 0, y: 50 })}
  <svg/>
`
export {svgrect,svgprogressbar,svgtext,svgBullets,BulletPointSection}