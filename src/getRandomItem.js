
export function getRandomItem(value) {
  const randomIndex = Math.floor(Math.random() * value.length);
  return value[randomIndex];
}
