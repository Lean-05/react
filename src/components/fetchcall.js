const fetchCall = async endPoint => {
	let response = await fetch(endPoint).then(response => response.json());
	return response;
}

export default fetchCall;