export async function endJourney(
  {duration, number, name}
) {
    const res = await fetch(`/api/end-journey`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({duration, number, name}),
    });
    const { data, error } = await res.json()
    if (res.ok) {
      if (data) {
        return data;
      } else {
        console.log("something went wrong")
        return Promise.reject(new Error(String(error)));
    }
  }
  throw new Error('No API url set');
}