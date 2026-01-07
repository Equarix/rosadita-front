export function getColorCategory(color: string) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    unknown: "bg-gray-500",
  };

  return colorMap[color] || colorMap["unknown"];
}
