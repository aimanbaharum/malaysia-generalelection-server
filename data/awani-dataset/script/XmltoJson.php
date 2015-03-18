<?php

	class XmltoJson {
		public function Parse($url) {
			$filecontents = file_get_contents($url);

			// if (empty($filecontents)) return '';

			$filecontents = str_replace(array('\n','\r','\t'), '', $filecontents);
			$filecontents = trim(str_replace('"', "'", $filecontents));
			$simpleXml = simplexml_load_string($filecontents);
			$json = json_encode($simpleXml);

			return $json;
		}
	}
?>