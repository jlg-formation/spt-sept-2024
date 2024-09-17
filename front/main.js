console.log("coucou");

const samples = 10;
const multiplicationFactor = 2;

const svgns = "http://www.w3.org/2000/svg";

const r = 1;
const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("zut");
}

for (let i = 0; i < samples; i++) {
  // add a point
  const angle = i * ((2 * Math.PI) / samples);

  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
}

const lineContainer = document.querySelector("g.lines");
if (lineContainer === null) {
  throw new Error("zut");
}

for (let i = 0; i < samples; i++) {
  // add a line
  const angle1 = i * ((2 * Math.PI) / samples);
  const angle2 = angle1 * multiplicationFactor;

  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);

  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);

  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", x1 + "");
  line.setAttributeNS(null, "y1", y1 + "");
  line.setAttributeNS(null, "x2", x2 + "");
  line.setAttributeNS(null, "y2", y2 + "");
  lineContainer.appendChild(line);
}
