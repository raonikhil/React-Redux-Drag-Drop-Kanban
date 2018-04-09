class Board {  
	static getAllBoards() {

		const myRequest = new Request('http://localhost/api/v1/boards.php', { method: 'POST', body: '{ "method": "get_all_boards" }' });

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