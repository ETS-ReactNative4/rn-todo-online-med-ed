export const COMPLETE_TASK = "COMPLETE_TASK";
export const REACTIVATE_TASK = "REACTIVATE_TASK";

/**
 * Completes a task
 * @param {Task} task The Task to be completed
 */
export const completeTask = (task) => {
  return {
    task,
    type: COMPLETE_TASK,
  };
};

/**
 * Reactivates a task
 * @param {Task} task The Task to be reactivated
 */
export const reactivateTask = (task) => {
  return {
    task,
    type: REACTIVATE_TASK,
  };
};
