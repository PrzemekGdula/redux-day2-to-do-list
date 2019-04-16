import uuidv1 from 'uuid/v1'

const ADD = 'todo/ADD'
const DELETE = 'todo/DELETE'
const NEW_TASK_CHANGED = 'toDo/NEW_TASK_CHANGED'

export const addActionCreator = (newTaskText) => ({
    type: ADD,
    newTaskText,
})
export const deleteActionCreator = (taskKey) => ({
    type: DELETE,
    taskKey,
})
export const newTaskChangedActionCreator = (newTaskText) => ({
    type: NEW_TASK_CHANGED,
    newTaskText,
})

const initialState = {
    tasks: [],
    newTaskText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                tasks: state.tasks.concat({
                    text: action.newTaskText,
                    key: uuidv1(),
                })
            }
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.key !== action.taskKey)

            }

        case NEW_TASK_CHANGED:
        return {
            ...state,
            newTaskText: action.newTaskText,
        }



        default:
            return state
    }
}