$(document).ready(() => {
    jQuery("<div>", {
      class: "container",
    }).appendTo("body");
  
    jQuery("<h3>", {
      text: "To-Do List",
    }).appendTo(".container");
  
    jQuery("<ul>", {
      id: "list",
    }).appendTo(".container");
  
    jQuery("<button>", {
      id: "newBtn",
      text: "New",
    }).appendTo(".container");
  
    jQuery("<div>", {
      id: "ft_list",
    }).appendTo("#list");
  
    $(".container").css({
      width: "fit-content",
      padding: "10px 100px 20px 100px",
      border: "2px solid black",
      backgroundColor: "white",
      textAlign: "center",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });
  
    $("#ft_list").css({
      textAlign: "left",
      padding: "10px",
    });
  
    loadTasks();
  
    $("#newBtn").click(function () {
      addTask();
    });
  
    function addTask() {
      const task = prompt("Enter a new task:");
      if (task !== null && task !== "") {
        const taskDiv = $("<li>").text(task).click(removeTask);
        $("#ft_list").prepend(taskDiv);
        saveTasks();
      } else {
        alert("Task cannot be empty!");
      }
    }
  
    function removeTask() {
      const confirmation = confirm("Are you sure you want to remove this task?");
      if (confirmation) {
        $(this).remove();
        saveTasks();
      }
    }
  
    function saveTasks() {
      const tasks = [];
      $("#ft_list li").each(function () {
        tasks.push($(this).text());
      });
      document.cookie = "tasks=" + JSON.stringify(tasks);
    }
  
    function loadTasks() {
        const tasksStr = document.cookie.split('; ').find(row => row.startsWith('tasks='))?.split('=')[1];
      
        if (tasksStr) {
          const tasks = JSON.parse(tasksStr);
          tasks.forEach(task => {
            $("<li>").text(task).click(removeTask).prependTo("#ft_list");
          });
        }
      }
      
  });
  