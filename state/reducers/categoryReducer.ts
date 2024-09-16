
type Action = {
  id: number,
	name: string,
	price: number,
	image: string,
	categorie: string,
}

const reducer = (state : string, action:Action) => {
  state = action.categorie;
  return state;
}

export default reducer;