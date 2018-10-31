

function renderDate(){
	let dateNow = new Date();
	let hour = dateNow.getHours();
	let minute = dateNow.getMinutes();
	let second = dateNow.getSeconds();
	let amOrPm;

	if (hour > 12) {
		hour -= 12;
		amOrPm = "PM";
	} else  {
		amOrPm = "AM";
	}

	if (hour < 10) {
		hour = "0" + hour;
	}

	hour = hour < 10 ? "0" + hour: hour;
	minute = minute < 10 ? "0" + minute: minute;
	second = second < 10 ? "0" + second: second;

	

	document.getElementById("hours").innerHTML = hour;
	document.getElementById("minutes").innerHTML = minute;
	document.getElementById("seconds").innerHTML = second;
	document.getElementById("amOrPm").innerHTML = amOrPm;
}
renderDate();
setInterval(renderDate, 1000);