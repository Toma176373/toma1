/* function named toma1 */

function toma1() {
	var t1l = document.getElementById("toma1list").value;
	var t1d = document.getElementById("toma1div").value;
	if (t1l == "background")
		document.getElementById(t1d).style.background = document.getElementById("toma1color").value;
	else
		document.getElementById(t1d).style.color = document.getElementById("toma1color").value;
	// document.getElementbyId(t1d).style.t1l = document.getElementbyId(toma1color).value;
}
