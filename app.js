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
            addCategory: "",
            activeTab: "Welcome to Todo"
        }
    },
    methods: {
        addTitle(name = this.addCategory){
            if(!Object.keys(this.titles).includes(name)){
                this.titles[this.addCategory] = new Task(name);
                this.addCategory = "";
            }
        },
        setActive(title){
            if(this.activeTab !== title){
                this.activeTab = title;
                console.log(`This tab was click on ${title}`)
            }
        }
    }
})
