const task = new Set();
// clean up asynchronous tasks
["SIGINT", "exit"].map((event) => {
  process.on(event, () => {
    task.forEach((callback) => {
      callback();
      unsubscribe(callback);
    });
  });
});

/**
 * @param {()=>any} callback
 */
export function subscribe(callback) {
  task.add(callback);
}

/**
 * @param {()=>any} callback
 */
export function unsubscribe(callback) {
  task.delete(callback);
}

export default { subscribe, unsubscribe };
