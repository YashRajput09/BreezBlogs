export function parseValue(value) {
  if (value.includes("K")) return { num: parseFloat(value) * 1000, suffix: "K+" };
  if (value.includes("M")) return { num: parseFloat(value) * 1000000, suffix: "M+" };
  return { num: parseFloat(value), suffix: "+" };
}

export function formatValue(num, suffix) {
  if (suffix === "M+") return (num / 1000000).toFixed(1) + "M+";
  if (suffix === "K+") return Math.floor(num / 1000) + "K+";
  return Math.floor(num) + "+";
} 