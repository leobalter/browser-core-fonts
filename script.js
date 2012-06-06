jQuery(function($) {
	var fontList = document.getElementById('fontlist');
	var contrast = $('.contrast');
	$('#fontSize').on('keyup change', function () {
		fontList.style.fontSize = (this.value + 'px');
	});

	$('#fontColor').on('keyup change', function () {
		fontList.style.color = this.value;
		contrast.css({ backgroundColor : this.value });		
	});

	$('#fontBG').on('keyup change', function () {
		fontList.style.backgroundColor = this.value;
		contrast.css({ color : this.value });		
	});

});
