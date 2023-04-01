export async function sosMessage(
  {number, name}
) {
    const res = await fetch(`/api/sos-message`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({number, name}),
    });
    const { data, error } = await res.json()
    if (res.ok) {
      if (data) {
        return data;
      } else {
        return Promise.reject(new Error(String(error)));
    }
  }
  throw new Error('No API url set');
}