export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getIsRefreshing = state => state.contacts.isRefreshing;

const contactsSelectors = {
  getContacts,
  getIsLoading,
  getIsRefreshing,
};

export default contactsSelectors;
