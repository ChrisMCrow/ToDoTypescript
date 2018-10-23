export class Task {
    done: boolean = false;

    constructor(public description: string, public priority: string) { }

    markDone() {
        this.done = true;
    }
}

// class TaskList {
//     tasksList: Task[] = [];

//     constructor() { };

//     deleteTask(description: string) {
        
//         for (var i: number = 0; i < this.tasksList.length; i++) {
//             console.log("I'm here");
//             console.log(this.tasksList[i].description);
//             if (this.tasksList[i].description === description) {
//                 this.tasksList.splice(i, 1);
//                 break;
//             }
//         }
        
//     }
//     addTask(task: Task) {
//         this.tasksList.push(task);
//     }
//     showAllItems() {
//         for (var task of this.tasksList) {
//             console.log(task);
//         }
//     }
// }



