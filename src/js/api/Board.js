class Board {  
	static getAllBoards() {

		var myInit = { method: 'GET' }

		const myRequest = new Request('http://localhost/api/v1/boards.php', myInit);

		return fetch(myRequest)
						.then(response => {
							return response.json();
						})
						.then(response => {
							console.debug(response);
							// ...
						}).catch(error => {
							console.error(error);
						});
	}
}

export default Board;