export const COMPLETE_TASK = "COMPLETE_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const EDIT_TASK = "EDIT_TASK";
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
 * Create a new task
 * @param {string} name The name of the task
 * @param {string} description A brief description of the task
 * @param {Date} dueDate The due date for the task
 */
export const createTask = (name, description, dueDate) => {
  return {
    taskDescription: description,
    taskDueDate: dueDate,
    taskName: name,
    type: CREATE_TASK,
  };
};

/**
 * Edit a task
 * @param {Task} task The Task to be edited
 */
export const editTask = (task) => {
  return {
    task,
    type: EDIT_TASK,
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
