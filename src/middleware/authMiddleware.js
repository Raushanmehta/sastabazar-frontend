export const authMiddleware = store => next => action => {
  if (action.type === "api/call") {
    const token = store.getState().auth.token;

    action.payload.headers = {
      ...action.payload.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return next(action);
};