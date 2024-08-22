export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) return new Error();

  const data = await response.json();
  return data;
};
