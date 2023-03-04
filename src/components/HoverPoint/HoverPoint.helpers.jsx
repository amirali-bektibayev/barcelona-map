export const xFirstHovCon = (pointBlockAddress) =>
  pointBlockAddress.toString()[0] == 8 && pointBlockAddress.toString()[1] == 1
    ? "x1-hov"
    : "";

export const xSecondHovCon = (pointBlockAddress) =>
  pointBlockAddress.toString()[0] == 8 && pointBlockAddress.toString()[1] == 2
    ? "x2-hov"
    : "";

export const yFirstHovCon = (pointBlockAddress) =>
  pointBlockAddress.toString()[0] == 9 && pointBlockAddress.toString()[1] == 1
    ? "y1-hov"
    : "";

export const ySecondHovCon = (pointBlockAddress) =>
  pointBlockAddress.toString()[0] == 9 && pointBlockAddress.toString()[1] == 2
    ? "y2-hov"
    : "";
