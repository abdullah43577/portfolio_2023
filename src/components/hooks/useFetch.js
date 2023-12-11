export default async function useFetch(endpoint) {
  try {
    const res = await fetch(endpoint);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}
