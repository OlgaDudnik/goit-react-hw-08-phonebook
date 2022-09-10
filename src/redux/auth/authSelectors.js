const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.IsFetchingCurrent;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
};

export default authSelectors;
