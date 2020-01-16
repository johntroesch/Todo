const ProjectFactory = function Project(title, description, dueDate, priority, notes) {
    const project = {}
    project.title = title;
    project.description = description;
    project.dueDate = dueDate;
    project.priority = priority;
    project.notes = notes;
    project.fullString = (title + ', ' + dueDate + ', ' + priority + ', ' + notes)
    return project;
}
/*
function Project(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.fullString = (title + ', ' + dueDate + ', ' + priority + ', ' + notes)
    }
    */



export {ProjectFactory};
