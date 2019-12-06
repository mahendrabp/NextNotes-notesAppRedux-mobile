const initialState = {
  notes: [],
  totalPage: null,
  isLoading: false,
  searchNotes: [],
  sorted: 'DESC',
  isSearch: false,
  currentPage: null,
  searchKeyword: '',
  selectedCategory: '',
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SORT':
      return {
        ...state,
        sorted: action.sort,
      };
    case 'GET_NOTES_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_NOTES_REJECTED':
      return {
        ...state,
        isLoading: false,
      };
    case 'GET_NOTES_FULFILLED':
      console.log(action.payload.data.data.data);
      return {
        ...state,
        isLoading: false,
        notes: action.payload.data.data.data,
        totalPage: action.payload.data.totalPage,
        currentPage: action.payload.data.page,
        // selectedCategory: action.payload.data.selectedCategory,
      };

    case 'GET_SEARCH_PENDING':
      return {
        ...state,
        isSearch: true,
      };
    case 'GET_SEARCH_REJECTED':
      return {
        ...state,
        isSearch: false,
      };
    case 'GET_SEARCH_FULFILLED':
      return {
        ...state,
        isSearch: false,
        searchKeyword: action.payload.data.search,
        searchNotes: action.payload.data.data,
        totalPage: action.payload.data.totalPage,
        currentPage: action.payload.data.page,
        selectedCategory: action.payload.data.selectedCategory,
      };

    case 'MORE_NOTES_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'MORE_NOTES_REJECTED':
      return {
        ...state,
        isLoading: false,
      };
    case 'MORE_NOTES_FULFILLED':
      return {
        ...state,
        isLoading: false,
        notes: [...state.notes, ...action.payload.data.data.data],
        searchNotes: [...state.searchNotes, ...action.payload.data.data],
        totalPage: action.payload.data.totalPage,
        currentPage: action.payload.data.page,
        selectedCategory: action.payload.data.selectedCategory,
      };

    /// ADD NOTE ------------------
    case 'ADD_NOTE_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_NOTE_FULFILLED':
      console.log(action.payload.data.data[0]);
      return {
        ...state,
        isLoading: false,
        notes: [...state.notes, action.payload.data.data[0]],
      };
    case 'ADD_NOTE_REJECTED':
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default notes;
