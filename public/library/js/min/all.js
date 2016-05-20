$(document).ready(function() {

	$(".add-name").submit(function(e) {
	    e.preventDefault();
	});



	// Set ID based on current number of list items
	var count = $(".brew-list li").length;
	var id = count + 1;
	var oButton = document.getElementById('addBrewer');
	var data = document.getElementById('dataInput');
	var display = document.getElementById('brewList');



	oButton.onclick = function() {
		$.cookie('brewer_number_' + id, data.value);
		$.cookie('brewer_total', id);
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

		rollForBrewer();

	});



	$('#clear-list').click(function() {
		$.removeCookie('brewer_number');
		$.removeCookie('brewer_total');
	});



	$('#reRoll').click(function() {

		$('.kettle').removeClass('boiling');
		$('.kettle--name').removeClass('show');

		setTimeout(function() {
			rollForBrewer();
		}, 1000);


	});



});


function rollForBrewer() {

	jQuery('.brew-list').addClass('brew-list__active');
	jQuery('.brew-list li').removeClass('itsme');

	var brewlist			= jQuery('.brew-list li').toArray();
	var elemlength			= brewlist.length;
	var randomnum			= Math.floor(Math.random()*elemlength);
	var randomitem			= brewlist[randomnum];
	var brewerName			= jQuery(randomitem).text();

	jQuery(randomitem).addClass('itsme');
	jQuery('.brew--action').fadeOut('fast');

	setTimeout(function() {
		jQuery('.kettle--outer').removeClass('hidden');
		jQuery('.kettle--name').text(brewerName);
	}, 500);

	setTimeout(function() {
		jQuery('.kettle').addClass('boiling');
	}, 3000);
	setTimeout(function() {
		jQuery('.kettle--name').addClass('show');
	}, 6000);

}
