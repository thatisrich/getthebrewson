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
	
	<link rel="stylesheet" href="library/css/style.css">
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="library/js/libs/jquery.cookies.js"></script>
	<script src="library/js/scripts.js"></script>
	
</head>
<body>
	
	<header>
		<h1>Get The Brews On</h1>
	</header>
	
	<section>
		
		<p>Can't decide who's turn it is to make a brew? Add the contenders and let us pick for you!</p>
		
		<p>Not after a cuppa? Why not pick an artist to listen instead!</p>
		
		<ul class="brew-list" id="brewList">
			
			<?php
				
				$cookie = $_COOKIE;
				$id = 0;
				
				if($_COOKIE != '') {
					
					foreach($cookie as $cheb) {
						
						$id++;
			?>
			<li class="option-<?php echo $id; ?>"><?php echo $cheb; ?></li>
			<?php			
					}
					
				} else {

				}
			?>
			
		</ul>
		
		<form>
			<input id="dataInput" placeholder="Add another name" type="text" />
			<input id="addBrewer" type="submit" value="Add it!" />
		</form>
		
		<a id="brews" href="#" title="#">Randomise my list</a>
		
		<a id="clear-list" href="#" title="#">Clear my list, start again!</a>
		
	</section>
	
	<footer>
		<h3>Designed and built by <a href="http://www.cargocreative.co.uk" title="Visit Cargo Creative's Website">Cargo</a>.</h3>
	</footer>

</body>
</html>