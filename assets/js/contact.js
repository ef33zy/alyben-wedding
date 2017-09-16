/*	$(document).ready(function () {
	"use strict"; 
	// Get the form.
//	var form = $('#contact-form');

    $("#submit").click(function (e) {
//	$(form).submit(function(e) {
        e.preventDefault();

         if ($("#name").val() === "" || $("#email").val() === "" || $("#subject").val() === "" || $("#message").val() === "") {
            $("span#messages").html("Please complete all fields");
            return false;
        } else { 
            $.post($("#contactForm").attr("action"),
                $("#contactForm :input").serializeArray(),
                function (data) {
                     //message from server (php)			
                    //$("span#messages").html(data);

                    //message to replace form
                    $("#formArea").html("<div style='text-align:centre'>Thank you for getting in touch, we will respond to your query very soon!<?div>");
                });
            $("#contactForm").submit(function () {
                return false;
            });
/* 		} 
    });
}); */

$(function() {
	$("#contactForm").submit(function(e) {
		//e.preventDefault();

		var data=$("#contactForm").serialize()
/*     $('#submit').click(function() { */
        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: data,
            error: function() {
               alert("Error sending message, please try again");
            },
            success: function(response) { 
                     //message from server (php)			
/*                     $("span#messages").html(response);
               $("#formArea").html("<div style='text-align:centre'>Thank you for getting in touch, we will respond to your query very soon!</div>"); */
            }
		});
        return false;
    }); 
})


/*    $("#submit").click(function (e) {
        e.preventDefault();

        if ($("#comment").val() === "") {
            $("span#message").html("Please enter comment..");
        } else {
            $.get($("#rating").attr("action"),
                $("#rating :input").serializeArray(),
                function (data) {
                    //message from server (php)			
                    $("span#message").html(data);

                    //button to return to movieOrganiser
                    $(".login").replaceWith(
                    $('div#back2mO').html('<div class="login">' +
                        '<div id="goBack" data-role="button" data-theme="e" onclick="goBack()">back to previous page</div>' +
                        '</div>' +
						
                        '<form method="get" action="https://www.moviesolsys.com/recommend_2.0_Bridge.php" class="dell">' +
                        '<input type="hidden" name="movieID[]" value="' + this.id + '"/>' +
                        '<div class="login">' +
                        '<input data-theme="e" class="login" type="submit" value="recommend"/>' +
                        '</div>' +
                        '</form>').trigger('create')
                    );
                });
            $("#rating").submit(function () {
                return false;
            });
        }
    });


/* $(function() {

	// Get the form.
	var form = $('#contactForm');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

}); */
