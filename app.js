class Task {
    constructor(name){
        this.name = name;
        this.heading = ""
        this.description = "";
        this.assignees = [];
        this.setDate = new Date();
        this.duration = "";
    }
}

let sampleHeading = 'A description for the given title';
let sampleDescription = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ipsa sequi harum sapiente, vitae aspernatur ut vero at culpa 
    fuga eligendi aliquam. Qui, nisi odio magnam odit necessitatibus 
    sunt, esse maiores, quis eligendi dolores at ipsam commodi dicta 
    quo repellendus eius.
`;


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
            initialHeading: sampleHeading,
            initialDescription: sampleDescription,
            headingEdit: false,
            descriptionEdit: false
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
            if(tabIndex >= 0 && this.assignee !== ""){
                this.titles[tabIndex].assignees.push(this.assignee);
                console.log(this.titles[tabIndex].assignees);
                this.assignee = "";
            }
            this.assignee = ""
        }, 
        deleteAssignee(assignee){
            let tabIndex = this.titles.findIndex(item => item.name == this.activeTab);
            if(tabIndex >= 0){
                let newAssigneesList = this.titles[tabIndex].assignees.filter(member => member !== assignee);
                this.titles[tabIndex].assignees = newAssigneesList;
                console.log(this.titles[tabIndex].assignees);
            }
        },
        enableEdit(option){
            if(option === "heading"){
                this.headingEdit = true;
            }
            if(option === "mainDescription"){
                this.descriptionEdit = true;
            }
        },
        handleEdit(){
            let option = this.headingEdit ? "heading" : "mainDescription";
            if(option === "heading"){
                this.headingEdit = false;
            }
            if(option === "mainDescription"){
                this.descriptionEdit = false;
            }
        }
    },
    computed: {

    }
})
