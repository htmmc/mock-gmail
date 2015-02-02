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

$(".header_checkbox").click(function(){
	    	var newButtons = $('<button type="button" class="btn btn-default mail-button-selected"><span class="glyphicon glyphicon-download-alt"></span></button><button type="button" class="btn btn-default mail-button-selected"><span class="glyphicon glyphicon-info-sign"></span></button><button type="button" class="btn btn-default mail-button-selected"><span class="glyphicon glyphicon-trash"></span></button>');
        
            if($(this).prop("checked")){
                $(newButtons).appendTo(".header_btn_js");
                $(".js-button").hide();
            } else {
            	$(".js-button").show();
            	console.log($("newButtons"));
            	$(".mail-button-selected").hide();
            }
});

var compose_page = false;
$(document).ready(function() {
    $(".compose_window").hide(); 

    $('.compose_btn').click(function() {
    	if (compose_page == false){
        $('.compose_window').show();
        compose_page=true;
    } else {
    	$('.compose_window').hide();
    	compose_page=false;
    }
    });
});