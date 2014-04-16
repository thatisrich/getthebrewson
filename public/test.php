<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="js/modernizr-2.6.1-respond-1.1.0.min.js"></script>
</head>
<body>

	<?php
	function weighted_random_simple($values, $weights){ 
	    $count = count($values); 
	    $i = 0; 
	    $n = 0; 
	    $num = mt_rand(0, array_sum($weights)); 
	    while($i < $count){
	        $n += $weights[$i]; 
	        if($n >= $num){
	            break; 
	        }
	        $i++; 
	    } 
	    return $values[$i]; 
	}
	
	if(isset($_GET['names']))
	{
		$values = $_GET['names'];
		$values = explode(',',$values);
	}
	else
	{
		$values = array('Paul', 'Sid', 'Erin', 'Rich', 'Nuge', 'Ross');
	}
	
	$weights = array();
	for($i=0;$i<sizeof($values);$i++)
	{
		array_push($weights,1);
	}
	
	echo '<h2>It looks like its</h2>';
	echo '<h1>'.weighted_random_simple($values, $weights).'</h1>';
	echo '<h3>turn to make the brews.</h3>';
	?>

</body>
</html>