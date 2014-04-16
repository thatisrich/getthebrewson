<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Get the brews on</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	
	<link rel="stylesheet" href="style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	
	<script type="text/javascript">
		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		}

		function readCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}

		function eraseCookie(name) {
			createCookie(name,"",-1);
		}
		
		$(document).ready(function() {
			
			var id = 1;
			var oButton = document.getElementById('addData');
			var data = document.getElementById('dataInput');
			var display = document.getElementById('brewers');
			var brewerscookie = readCookie("brewmaker");
			
			console.log(readCookie("brewmaker")); 
			
			oButton.onclick = function() {
				display.innerHTML += "<li class='brewer-" + id + "'>" + data.value + "</li>";
				if(brewerscookie){
					createCookie("brewmaker", brewerscookie + "," + data.value, 30);
				}else{
					createCookie("brewmaker", data.value, 30);
				}
				
			}
			
			
			if(brewerscookie){
				var brewers = brewerscookie.split(",");
				var arrayLength = brewers.length;
				for (var i = 0; i < arrayLength; i++) {
				    display.innerHTML += "<li class='brewer-" + id + "'>" + brewers[i] + "</li>";
				    //Do something
					id++;
					if(id >= 3 ) {
						$("#brews").addClass("brewme");
						$("#startover").addClass("startover");
					}
				}
				
			}
			$("#addData").click(function() {
				id++;
				if($('#brewers li').length > 1 ) {
					$("#brews").addClass("brewme");
					$("#startover").addClass("startover");
				}
				//Empty the text field - speeds up adding names
				$('#dataInput').val("");
			});
			
			$("#startover").click(function() {
				eraseCookie("brewmaker");
				location.reload();
			});
			
			$("#brews").click(function() {
				$(".brewerlist").addClass("roll");
				$("#brewers li").css("background", "none");
				$("#brewers li").removeClass("pickme");
				var list = $("#brewers li").toArray();
				var elemlength = list.length;
				var randomnum = Math.floor(Math.random()*elemlength);
				var randomitem = list[randomnum];
				$(randomitem).addClass("pickme");
			});
			
		});
	</script>
	
</head>
<body>
	
	<header>
		<h1>Get The Brews On</h1>
		<?php //<img src="http://placehold.it/100x100/" alt="Teapot" /> ?>
	</header>
	
	<section>
		<header>
			<h2>Who will it be?</h2>
		</header>
		
		<ul id="brewers" class="brewerlist"></ul>
		
		<input id="dataInput" type="text" placeholder="Add another name" /> <button id="addData" type="button">Add it!</button>
		
		<input id="brews" type="submit" value="Get The Brews On Already!" />
		
		<input id="startover" type="submit" value="Start Over" />
		
	</section>
	
	<footer>
		<h3>Designed and built by <a href="http://www.cargocreative.co.uk" title="Visit Cargo Creative's Website">Cargo</a>.</h3>
	</footer>

</body>
</html>