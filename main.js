$(document).ready(function() {
    $("#addTaskButton").click(function() {
        var taskInput = $("#taskInput").val();
        if (taskInput === "") {
            alert("Por favor, insira uma tarefa!");
            return;
        }
        $("#taskList").append("<li>" + taskInput + "</li>");
        $("#taskInput").val("");
    });

    $("#taskList").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    $("#clearTasksButton").click(function() {
        $("#taskList").empty();
    });
});
