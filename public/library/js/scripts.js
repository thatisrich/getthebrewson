$(document).ready(function() {
	
	$(".add-name").submit(function(e) {
	    e.preventDefault();
	});
	
	var id = 1;
	var oButton = document.getElementById('addBrewer');
	var data = document.getElementById('dataInput');
	var display = document.getElementById('brewList');
	
	oButton.onclick = function() {
		$.cookie('brewer_number_' + id, data.value);
		//$.cookie('brewer_total', id);
		display.innerHTML += '<li class="option-' + id + '">' + data.value + '</li>';
	}


	$('#addBrewer').click(function() {
		id++;
		if($('.brew-list li').length > 1 ) {
			$('#brews').addClass('brewme');
		}
		$('#dataInput').val('');
	});
	
	$('#brews').click(function() {
		$('.brew-list').addClass('brew-list__active');
		$('.brew-list li').removeClass('itsme');
		var brewlist = $('.brew-list li').toArray();
		var elemlength = brewlist.length;
		var randomnum = Math.floor(Math.random()*elemlength);
		var randomitem = brewlist[randomnum];
		$(randomitem).addClass('itsme');
		console.log(randomnum);
	});
	
	$('#clear-list').click(function() {
		$.removeCookie('brewer_number');
		//$.removeCookie('brewer_total');
	});
	
});