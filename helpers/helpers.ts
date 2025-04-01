export function readingTime(content: any) {
  let minutes = 0;
  const contentAsString = JSON.stringify(content);
  const words = contentAsString.split(" ").length;
  const wordsPerMinute = 200;

  minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}

export function convertDate(date: any) {
  const daTe = new Date(date);
  return daTe.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
