function search_ai(query) {
	const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key
	fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`
		},
		body: JSON.stringify({
		prompt: query,
		max_tokens: 100
		})})
	.then(response => response.json())
	.then(data => {
		const result = data.choices[0].text;
		return result;
	})
	.catch(error => {
		console.error('Error:', error);
		return 'An error occurred. Please try again.';
	});
}