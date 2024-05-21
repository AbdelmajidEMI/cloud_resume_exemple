async function get_visitors() {
    try {
        let apiUrl = 'https://x64is1jy70.execute-api.us-east-1.amazonaws.com/api-stage/visitor'; // Placeholder
        let response = await fetch(`${apiUrl}`, {
            method: 'GET',
        });
        let data = await response.json()
        document.getElementById("visitors").innerHTML = data['count'];
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

get_visitors();