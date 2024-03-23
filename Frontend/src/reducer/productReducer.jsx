const ProductReducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING": 
        return {
            ...state, 
            isLoading: true
        }

        case "SET_API_DATA":
          return {
              ...state,
              isLoading: false,
              products : action.payload
          }
    }
}

 export default ProductReducer;