jQuery(function($) {
	var fontList = document.getElementById('fontlist');
	var contrast = $('.contrast');
	var fontTextTds = $('td', fontList).not('::first');

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

	$('#fontText').on('keyup change', function () {
		fontTextTds.text(this.value);	
	});

});
