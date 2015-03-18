<?php

	include 'XmltoJson.php';

	// assembly filename
	$ass_arr = array('jhr.a','kdh.a','ktn.a','kul.a','lbn.a','mlk.a','nsn.a','phg.a','prk.a','pls.a','png.a','pjy.a','sbh.a','swk.a','sgr.a','trg.a');

	foreach ($ass_arr as $state) {
		// parsing xml file to json
		// $jsonData = XmltoJson::Parse("http://data.astroawani.com/tvtech/xml/2013/".$state.".xml");
		$jsonData = XmltoJson::Parse("http://data.astroawani.com/tvtech/xml/2008/".$state.".xml");

		// renaming as per filename convention
		$state = str_replace('.a', '', $state);
		// $filename = "ge13_assembly_".$state.".json";
		$filename = "ge08_assembly_".$state.".json";

		// create new file, write data to file
		$file = fopen($filename, 'w') or die("can't open file");
		fwrite($file, $jsonData);
		fclose($file);
	}

?>