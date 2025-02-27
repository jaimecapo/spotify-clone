export function convertSeconds(seconds: number) {
  return {
    mins: String(Math.floor(seconds / 60)).padStart(2, "0"),
    secs: String(seconds % 60).padStart(2, "0"),
  };
}
