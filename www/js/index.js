document.addEventListener('deviceready', this.onDeviceReady, false);

function onDeviceReady() {
    console.log('App ready');
    $( "#qrScanBtn" ).click(function() {
  		doScan();
	});
}

function doScan(){
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			alert("We got a barcode\n" +
				"Result: " + result.text + "\n" +
				"Format: " + result.format + "\n" +
				"Cancelled: " + result.cancelled);
	  	},
	  	function (error) {
			alert("Scanning failed: " + error);
	  	}
	);
}
