export default async function fetchApi(url: string) {
  const response = await fetch(url);
  const result = response.json();
  return result;
}
