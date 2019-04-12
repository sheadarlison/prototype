// Close branding settings
function backButton() {
	var x = document.getElementById("branding-settings");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	var y = document.getElementById("component-list");
	if (y.style.display === "block") {
		y.style = "none";
	} else {
		y.style.display = "block"
	}
}


//turn branding on 
function brandingOn() {
	if (document.getElementById("logo").src == "https://storage.googleapis.com/risemedialibrary-7fa5ee92-7deb-450b-a8d5-e5ed648c575f/YourLogo.png") {
		document.getElementById("logo").src = "https://s3.amazonaws.com/Rise-Images/UI/logo.svg";
		document.getElementById('brandText').style.color = document.getElementById("primary-text").value;
		document.getElementById('htmlTemplate').style.backgroundColor = document.getElementById("base-color").value;
	} 
	if (document.getElementById("logo").src == "https://www.risedisplay.com/wp-content/uploads/2017/08/rise-logo.png") {
		document.getElementById("logo").src = "https://s3.amazonaws.com/Rise-Images/UI/logo.svg";
		document.getElementById('brandText').style.color = document.getElementById("primary-text").value;
		document.getElementById('htmlTemplate').style.backgroundColor = document.getElementById("base-color").value;
	} 
}

function brandingOff() {
	if (document.getElementById("logo").src == "https://s3.amazonaws.com/Rise-Images/UI/logo.svg") {
		document.getElementById('logo').src = "https://storage.googleapis.com/risemedialibrary-7fa5ee92-7deb-450b-a8d5-e5ed648c575f/YourLogo.png";
		document.getElementById('brandText').style.color = 'rgb(77,77,77)';
		document.getElementById('htmlTemplate').style.backgroundColor = 'rgb(230, 100, 101)';
	}
	if (document.getElementById("logo").src == "https://www.risedisplay.com/wp-content/uploads/2017/08/rise-logo.png") {
		document.getElementById('brandText').style.color = 'rgb(77,77,77)';
		document.getElementById('htmlTemplate').style.backgroundColor = 'rgb(230, 100, 101)';
	}
}

// function for uploading logo
function logoOn() {
	if (document.getElementById("logo").src == "https://storage.googleapis.com/risemedialibrary-7fa5ee92-7deb-450b-a8d5-e5ed648c575f/YourLogo.png") {
		document.getElementById("logo").src = "https://s3.amazonaws.com/Rise-Images/UI/logo.svg";
	} 
}

// function for font color 
function saveBranding() {
	var x = document.getElementById("primary-text");
	var defaultVal = x.defaultValue;
	var currentVal = x.value;

	if (defaultVal = currentVal) {
		document.getElementById('brandText').style.color = currentVal;		
	}

	var y = document.getElementById("base-color");
	var defaultValBase = y.defaultValue;
	var currentValBase = y.value;

	if (defaultValBase = currentValBase) {
		document.getElementById('htmlTemplate').style.backgroundColor = currentValBase;		
	}
}

function overrideBranding() {
	if (document.getElementById("logo").src == "https://s3.amazonaws.com/Rise-Images/UI/logo.svg") {
		document.getElementById('logo').src = "https://www.risedisplay.com/wp-content/uploads/2017/08/rise-logo.png";
	}
}

