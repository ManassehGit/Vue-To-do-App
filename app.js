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
            headerText: "Sugerencias",
            titles: [
                new Task("General"),
                new Task("Others")
            ], 
            addCategory: "",
            activeTab: "Welcome to Todo",
            assignee: "",
            currentAssignees: []
        }
    },
    methods: {
        addTitle(name){
            let newTask = new Task(name)
            if(this.addCategory !== "" && this.titles.filter(object => object.name === newTask.name).length < 1){
                //add a new task object
                this.titles.push(new Task(name));
                this.addCategory = "";

            }
            this.addCategory = "";
        },
        setActive(tab){
            if(this.activeTab !== tab){
                this.activeTab = tab;
                console.log(`This tab was click on ${tab}`)
                
            }
        }, 
        addAssignee(){
            let tabIndex = this.titles.findIndex(item => item.name == this.activeTab);
            console.log("The index of the somethinf ", tabIndex);
            if(tabIndex >= 0 && this.assignee !== ""){
                this.titles[tabIndex].assignees.push(this.assignee);
                console.log(this.titles[tabIndex].assignees);
                this.assignee = "";
            }
            this.assignee = ""
        }
    },
    computed: {

    }
})
