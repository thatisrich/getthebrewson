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
	};



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

	$('#clearbrewers').click(function() {

		clearBrewers();
		//clear the display
		$( ".brew-list" ).empty();

	});

	$('#reRoll').click(function() {

		rollForBrewer();

	});



});

function clearBrewers(){

	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++)
	  eraseCookie(cookies[i].split("=")[0]);

}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}



function rollForBrewer() {

	if(jQuery('.kettle--outer').hasClass('hidden')) {

		jQuery('.brew--action').addClass('push');

		setTimeout(function() {
			jQuery('.kettle').addClass('fall-in');
			jQuery('.kettle--outer').removeClass('hidden');
		}, 500);

		setTimeout(function() {
			getBrewer();
		}, 1000);

		setTimeout(function() {
			jQuery('.kettle').removeClass('fall-in');
		}, 2000);

	} else {

		//jQuery('.kettle').removeClass('boiling');
		jQuery('.kettle').removeClass('boiled');
		jQuery('.kettle--name').removeClass('show');

		getBrewer();

	}

}

function getBrewer() {

	jQuery('.brew-list').addClass('brew-list__active');
	jQuery('.brew-list li').removeClass('itsme');

	var brewlist			= jQuery('.brew-list li').toArray();
	var elemlength			= brewlist.length;
	var randomnum			= Math.floor(Math.random()*elemlength);
	var randomitem			= brewlist[randomnum];
	var brewerName			= jQuery(randomitem).text();

	jQuery(randomitem).addClass('itsme');

	setTimeout(function() {
		jQuery('.kettle--name').text(brewerName);
	}, 500);

	setTimeout(function() {
		jQuery('.kettle').addClass('boiling');
	}, 2000);

	setTimeout(function() {
		jQuery('.kettle').addClass('boiled');
	}, 4000);

	setTimeout(function() {
		jQuery('.kettle--name').addClass('show');
	}, 6000);

}
