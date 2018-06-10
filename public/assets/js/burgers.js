
 $(".change-todo").on("click", function(event) {
			  	event.preventDefault();

			    var id = $(this).data("id");
			    var newTodo = $(this).data("newtodo");

			    var newTodoState = {
			      done: newTodo
			    };

			    // Send the PUT request.
			    $.ajax("/api/buckets" + id, {
			      type: "PUT",
			      data: newTodoState
			    }).then(
			      function() {
			        console.log("changed goal to: ", newTodo);
			        // Reload the page to get the updated list
			        location.reload();
			      }
			    );
			  });

			  $(".create-form").on("submit", function(event) {
			    // Make sure to preventDefault on a submit event.
			    event.preventDefault();

			    var newBucket = {
			      name: $("#bucket").val().trim(),
			      done: $("[name=done]:checked").val().trim()
			    };

			    // Send the POST request.
			    $.ajax("/api/buckets/", {
			      type: "POST",
			      data: newBucket
			    }).then(
			      function() {
			        console.log("created new goal to complete for Bucketlist");
			        // Reload the page to get the updated list
			        location.reload();
			      }
			    );
			  });

			  $(".delete-bucket").on("click", function(event) {
			    var id = $(this).data("id");

			    // Send the DELETE request.
			    $.ajax("/api/buckets/" + id, {
			      type: "DELETE",
			    }).then(
			      function() {
			        console.log("deleted item", id);
			        // Reload the page to get the updated list
			        location.reload();
			      }
			    );
			  });