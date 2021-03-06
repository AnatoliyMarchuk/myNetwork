export function personFetchDataSuccess(persons) {
	return {
		type: 'PERSONS_FETCH_DATA_SUCCESS',
		persons,
	};
}

export function personFetchData(url) {
	return (dispatch) => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then((persons) => dispatch(personFetchDataSuccess(persons)));
	};
}
