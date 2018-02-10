const test = (state, action) => {
  switch ( action.type ) {
    case 'TEST':
      return "The King of JavaScript!";
    default:
      return state || "What am I?";
  }
};

export default test;