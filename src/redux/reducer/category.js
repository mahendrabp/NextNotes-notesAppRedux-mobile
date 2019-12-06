const initialState = {
  category: [],
  isLoading: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY':
      return {
        category: action.payload.data.data,
      };
    case 'GET_CATEGORY_FULFILLED':
      //   console.log(action.payload.data.data);
      return {
        category: action.payload.data.data,
      };
    /// ADD NOTE ------------------
    case 'ADD_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_CATEGORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        category: [...state.category, action.payload.data.data],
      };
    case 'ADD_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
      };
    /// REMOVE NOTE ------------------
    case 'REMOVE_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'REMOVE_CATEGORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        category: state.category.filter(
          categories => categories.id !== action.payload.data.id,
        ),
      };
    case 'REMOVE_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default category;
