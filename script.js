
function renderTime(){
	let timeNow = new Date();
	let hour = timeNow.getHours();
	let minute = timeNow.getMinutes();
	let second = timeNow.getSeconds();
	let amOrPm;

	if (hour > 12) {
		hour -= 12;
		amOrPm = "PM";
	} else  {
		amOrPm = "AM";
	}
	
	hour = hour < 10 ? "0" + hour: hour;
	minute = minute < 10 ? "0" + minute: minute;
	second = second < 10 ? "0" + second: second;

	document.getElementById("hours").innerHTML = hour;
	document.getElementById("minutes").innerHTML = minute;
	document.getElementById("seconds").innerHTML = second;
	document.getElementById("amOrPm").innerHTML = amOrPm;


}
renderTime();
setInterval(renderTime, 1000);



// analog clock
function renderClock(){
	let timeNow = new Date();
	let hour = timeNow.getHours();
	let minute = timeNow.getMinutes();
	let second = timeNow.getSeconds();
	let amOrPm;

	let sDegree = second *6 + 90 ;
	let mDegree = minute *6 +90;
	let hDegree = hour*30 +90;
	
	document.getElementById('s-hand').style.transform = `rotate(${sDegree}deg)`
	document.getElementById('m-hand').style.transform = `rotate(${mDegree}deg)`
	document.getElementById('h-hand').style.transform = `rotate(${hDegree}deg)`



}

renderClock();
setInterval(renderClock, 1000);