import { types, Instance } from 'mobx-state-tree';
import Task from './task';

const Tasks = types
    .model('Tasks', {
        tasks: types.array(Task),
    })
    .actions(self => ({
        addTask(task: Instance<typeof Task>) {
            self.tasks.push(task);
        },
        deleteTask(taskId: string) {
            self.tasks = self.tasks.filter(task => task.id !== taskId) as typeof self.tasks;
        },
    }));

const tasksStore = Tasks.create({ tasks: [] });

export default tasksStore;
