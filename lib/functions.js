export function shuffleArrayItems(arr1, arr2) {
  const result = [];
  const smallestArrayLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < smallestArrayLength; i++) {
    result.push(arr2[i], arr1[i]);
  }

  result.push(
    ...arr1.slice(smallestArrayLength),
    ...arr2.slice(smallestArrayLength)
  );

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function extractYTVideoId(url) {
  let index = url.indexOf("=");
  let countStart = 1;
  if (index < 0) {
    index = url.indexOf(".be/");
    countStart = 4;
  }
  const id = url.slice(index + countStart);
  return id;
}
