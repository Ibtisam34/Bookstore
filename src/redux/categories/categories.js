export const checkStatus = (category) => ({
  type: 'check Status',
  payload: category,
});

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'check status':
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;
