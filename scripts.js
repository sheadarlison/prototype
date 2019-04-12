function backButton() {
	var x = document.getElementById("branding-settings");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function brandingOn() {
	if (document.getElementById("logo").src == "https://storage.googleapis.com/risemedialibrary-7fa5ee92-7deb-450b-a8d5-e5ed648c575f/YourLogo.png") {
		document.getElementById("logo").src = "https://s3.amazonaws.com/Rise-Images/UI/logo.svg";
		document.getElementById('brandText').style.color = 'blue';
		document.getElementById('logo').style.background = 'white';
	} 
	if (document.getElementById("logo").src == "https://www.risedisplay.com/wp-content/uploads/2017/08/rise-logo.png") {
		document.getElementById("logo").src = "https://s3.amazonaws.com/Rise-Images/UI/logo.svg";
		document.getElementById('brandText').style.color = 'blue';
	} 
}

function brandingOff() {
	if (document.getElementById("logo").src == "https://s3.amazonaws.com/Rise-Images/UI/logo.svg") {
		document.getElementById('logo').src = "https://storage.googleapis.com/risemedialibrary-7fa5ee92-7deb-450b-a8d5-e5ed648c575f/YourLogo.png";
		document.getElementById('brandText').style.color = 'black';
		document.getElementById('logo').style.background = 'none';
	}
	if (document.getElementById("logo").src == "https://www.risedisplay.com/wp-content/uploads/2017/08/rise-logo.png") {
		document.getElementById('brandText').style.color = 'black';
	}
}

function overrideBranding() {
	if (document.getElementById("logo").src == "https://s3.amazonaws.com/Rise-Images/UI/logo.svg") {
		document.getElementById('logo').src = "https://www.risedisplay.com/wp-content/uploads/2017/08/rise-logo.png";
	}
}