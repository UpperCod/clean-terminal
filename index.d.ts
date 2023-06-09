type Callback = () => any;

type Subscribe = (callback: Callback) => any;

export const subscribe: Subscribe;

export const unsubscribe: Subscribe;

type Default = {
  subscribe: Subscribe;
  unsubscribe: Subscribe;
};

export default Default;
