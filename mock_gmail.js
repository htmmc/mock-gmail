var highlight = false;

$(".mail_checkbox").on("click", function() { 
	if (highlight == false) {
	row = $(this).closest(".js-msg-row")
	row.addClass("highlight");
	highlight = true;
} else {
	row = $(this).closest(".js-msg-row")
	row.removeClass("highlight");
	highlight = false;
}
});

