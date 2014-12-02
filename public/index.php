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
	
	<link href='http://fonts.googleapis.com/css?family=Amaranth:400,700italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="library/css/style.css">
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="library/js/libs/jquery.cookies.js"></script>
	<script src="library/js/scripts.js"></script>
	
</head>
<body>
	
	<header class="">
		<div class="wrap">
			
			<h1>Get The Brews On</h1>
			
		</div>
	</header>
	
	<section class="">
		<div class="wrap">
			
			<p>Can't decide who's turn it is to make a brew? Add the contenders and let us pick for you!</p>
			<?php /* <p>Not after a cuppa? Why not pick an artist to listen instead!</p> */ ?>
			
			<ul class="brew-list" id="brewList">
				<?php
					$cookies = $_COOKIE;
					$id = 0;
					
					//var_dump($_COOKIE);
						
					if($_COOKIE != '') {
						foreach($cookies as $cookie) {
							$id++;
				?>
				<li class="option-<?php echo $id; ?>"><?php echo $cookie; ?></li>
				<?php
						}
					}
				?>
			</ul>
			
			<?php include 'modules/form-addname.php'; ?>
			
			<a class="btn" id="brews" href="#" title="#">Pick a Brewer</a>
			<?Php /* <a class="btn" id="clear-list" href="#" title="#">Clear my list, start again!</a> */ ?>
			
		</div>
	</section>
	
	<footer>
		<div class="wrap">
			
			<p>Delivered by <a href="http://www.cargocreative.co.uk" title="Visit Cargo Creative's Website">Cargo</a>.</p>
			
		</div>
	</footer>

</body>
</html>