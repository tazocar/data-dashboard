/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
var stgoStudents = data.SCL["2017-2"].students;


function createStudents(){
	for (var i = 0; i < stgoStudents.length; i++) {
		if (Object.keys(stgoStudents[i]) != "") {
			//llamo al contenedor de estudiantes
			var containerStudents = document.getElementById("container-students");
			//Creo Div para estudiantes
			var studentDiv = document.createElement("div");
			//le doy clase a mi div para estudiantes
			studentDiv.className = "student";
			//creo el div para su informacion
			var infoStudent = document.createElement("div");
			infoStudent.className = "info-student";
			//creo un h4 para el nombre de mi estudiante
			var studentName = document.createElement("h4");
			//creo el nombre de mi estudiante con el índice 
			var studentNameText = document.createTextNode(stgoStudents[i].name);
			studentName.appendChild(studentNameText);
			infoStudent.appendChild(studentName);
			//creo un div para la foto de mi estudiante
			var studentPhoto = document.createElement("div");
			studentPhoto.className = "img-student";
			studentPhoto.style.backgroundImage = 'url('+stgoStudents[i].photo+')';
			studentPhoto.style.backgroundPosition = "50% 50%";
			//agrego la foto de mi estudiante
			studentDiv.appendChild(studentPhoto);
			studentDiv.appendChild(infoStudent);
			containerStudents.appendChild(studentDiv);

			var activeStudent = document.createElement("h5");
			var activeStudentText = document.createTextNode("Alumna Activa");
			activeStudent.style.color = "#007c4d"
			activeStudent.appendChild(activeStudentText);

			var inactiveStudent = document.createElement("h5");
			var inactiveStudentText = document.createTextNode("Alumna Inactiva");
			inactiveStudent.style.color = "#ba0000"
			inactiveStudent.appendChild(inactiveStudentText);

			if (stgoStudents[i].active == true) {
				studentDiv.classList.add("student-active");
				infoStudent.appendChild(activeStudent);
			}else if (stgoStudents[i].active == false) {
				studentDiv.classList.add("student-inactive");
				infoStudent.appendChild(inactiveStudent);
			}
		}
	}
}
var checkDivs = document.getElementsByClassName("student");
var activeCheck = document.getElementById("active-check");

activeCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideInactives = document.getElementsByClassName("student-inactive");
		for (var j = 0; j < hideInactives.length; j++) {
			if (activeCheck.checked) {
				hideInactives[j].style.display = "none";
			}else {
				hideInactives[j].style.display = "block";
			}
		}
	} 
});

var inactiveCheck = document.getElementById("inactive-check");
inactiveCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideActives = document.getElementsByClassName("student-active");
		for (var j = 0; j < hideActives.length; j++) {
			if (inactiveCheck.checked) {
				hideActives[j].style.display = "none";
			}else {
				hideActives[j].style.display = "block";
			}
		}
	} 
});

console.log(createStudents());
console.log(stgoStudents);
