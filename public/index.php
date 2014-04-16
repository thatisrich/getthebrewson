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
		$(document).ready(function() {
		
			$("#addData").click(function() {
				id++;
				if($('#brewers li').length > 1 ) {
					$("#brews").addClass("brewme");
				}
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
		<script type="text/javascript">
		
			var id = 1;
			var oButton = document.getElementById('addData');
			var data = document.getElementById('dataInput');
			var display = document.getElementById('brewers');
			
			oButton.onclick = function() {
				display.innerHTML += "<li class='brewer-" + id + "'>" + data.value + "</li>";
			}
		</script>
		
		<input id="brews" type="submit" value="Get The Brews On Already!" />
		
	</section>
	
	<footer>
		<h3>Designed and built by <a href="http://www.cargocreative.co.uk" title="Visit Cargo Creative's Website">Cargo</a>.</h3>
	</footer>

</body>
</html>