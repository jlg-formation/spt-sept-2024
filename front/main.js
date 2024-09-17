console.log("coucou");

const samples = 10;

const svgns = "http://www.w3.org/2000/svg";

const r = 1;

const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("zut");
}

for (let i = 0; i < samples; i++) {
  // add a point
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", "50");
  circle.setAttributeNS(null, "cy", "50");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
}
