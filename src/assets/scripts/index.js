//add text for checkbox

$("#myonoffswitch1").click(function () {
	if ($(this).is(':checked')) {
		$('.switch1').text("Активна");
	} else {
		$('.switch1').text("Неактивна");
	}
});

$("#myonoffswitch2").click(function () {
	if ($(this).is(':checked')) {
		$('.switch2').text("Активна");
	} else {
		$('.switch2').text("Неактивна");
	}
});

$("#myonoffswitch3").click(function () {
	if ($(this).is(':checked')) {
		$('.switch3').text("Активна");
	} else {
		$('.switch3').text("Неактивна");
	}
});

//counter for checkbox

var count = 0;
$(function () {
	updateCount();
	$('input[type=checkbox]').change(function () {
		updateCount(this.checked ? 1 : -1);
	});
});

function updateCount(a) {
	count = a ? count + a : $('input[type=checkbox]:checked').length;
	$('#count').text(count);
}

//delete row

$('.btn-delete').click(function () {
	$(this).parent().parent().parent().parent().remove();
});
