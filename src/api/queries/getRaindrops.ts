export async function getRaindrops(page: number = 0, query: string = '') {
	const apiKey = import.meta.env.VITE_API_KEY;
	const params = new URLSearchParams({
		page: String(page),
		q: query
	})
	const url = `${import.meta.env.VITE_API_URL}/api/raindrops/search?${params}`;
	const res = await fetch(url, {
		method: 'GET',
		headers: { 'x-api-key': apiKey }
	});
	return res.json();
}
