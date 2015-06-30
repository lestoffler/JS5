$(document).ready(function() {
	

	$(".editable").on('click', function() {
		var clickedBox = $(this);
		clickedBox.hide();
		var edit = clickedBox.next().show();
		edit.addClass('editing');

		$('.editing').blur(function() {
			clickedBox.html($(this).val());
			$(this).hide();
			clickedBox.show();
			$(this).removeClass('editing')
		});

	});

});