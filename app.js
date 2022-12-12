class Task {
    constructor(name){
        this.name = name;
        this.description = "";
        this.assignees = [];
        this.setDate = new Date();
        this.duration = "";
    }
}
let app = new Vue({
    el: "#app",
    data() {
        return {
            headerText: "To Do",
            titles: {
                "General": new Task("General"),
                "Others": new Task("Others")
            }, 
            addCategory: ""
        }
    },
    methods: {
        addTitle(name = this.addCategory){
            if(!Object.keys(this.titles).includes(name)){
                this.titles[this.addCategory] = new Task(name);
                this.addCategory = "";
            }
        }
    }
})
