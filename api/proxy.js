export default async function handler(req, res) {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const { method, body } = req.body;

    try {
        const response = await fetch(`https://api.github.com/repos/elimartinhos/eligmao/contents/data.json`, {
            method: method,
            headers: {
                "Authorization": `token ${token}`,
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : null
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}