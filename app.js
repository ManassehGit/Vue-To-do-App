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
                console.log(this.titles.filter(item => item.name !== "yello"))
            }
        }, 
        addAssignee(){
            if(Object.keys(this.titles).includes(this.activeTab) && this.assignee !== ""){
                this.titles[this.activeTab].assignees.push(this.assignee);
                // console.log(this.titles[this.activeTab].assignees);
                this.assignee = "";
            }
            this.assignee = ""
        }
    },
    computed: {

    }
})
