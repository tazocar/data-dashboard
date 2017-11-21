/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//llamo al contenedor de estudiantes
var containerStudents = document.getElementById("container-students");
//Cargar fechas al cargar la pagina
window.onload = addOptions;

//CARGAR CIUDADES DESDE DATA
var country = document.getElementById("country").value;
var year = "2017-1"
var countrySelector = document.getElementById("country");
var yearSelector = document.getElementById("year");
countrySelector.addEventListener("change", function(){
	//Actualizo la Data para actualizar alumnos
	country = document.getElementById("country").value;
	stgoStudents = data[country][year].students;
	//BORRO DIVS VIEJOS, CREO NUEVOS ALUMNOS
	var studentDivDelete = document.getElementsByClassName("student");
	while( containerStudents.hasChildNodes() ){
    containerStudents.removeChild(containerStudents.lastChild);
	};
	if (containerStudents.hasChildNodes() == false) {
		createStudents();
	}
	ticketReset();
});

yearSelector.addEventListener("change", function(){
	year = document.getElementById("year").value
	stgoStudents = data[country][year].students;
	var studentDivDelete = document.getElementsByClassName("student");
	while( containerStudents.hasChildNodes() ){
    containerStudents.removeChild(containerStudents.lastChild);
	};
	if (containerStudents.hasChildNodes() == false) {
		createStudents();
	}
	ticketReset();

});
countrySelector.addEventListener("click", removeOptions);
countrySelector.addEventListener("click", addOptions);

function removeOptions(){
	for (var i = 0; i < yearSelector.options.length; i++) {
		while (yearSelector.options.length > 0) {
			yearSelector.remove(i);
		}
	}
}
function addOptions(){
	for (var i in data[country]) {
		var optionElement = document.createElement("option");
		optionElement.text = (i);
		yearSelector.add(optionElement);	
	}
}

var stgoStudents = data[country][year].students;
var counter = document.getElementById("counter");
var totalActive = 0;

function createStudents(){
	for (var i = 0; i < stgoStudents.length; i++) {
		if (Object.keys(stgoStudents[i]) != "") {
			//Creo Div para estudiantes
			var studentDiv = document.createElement("div");
			//le doy clase a mi div para estudiantes
			studentDiv.className = "student";
			studentDiv.style.display = "block";
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
			//CREO DIV CONTENEDOR DE PUNTAJES GENERALES
			var studentGeneralPoints = document.createElement("div");
			studentGeneralPoints.classList.add("student-points");

			studentDiv.appendChild(studentGeneralPoints);

			// CONTENEDOR DE ASISTENCIA
			var studentAssist = document.createElement("div");
			studentAssist.classList.add("assistance-points");
			var studentAssistNumber = document.createElement("p");
			var scheduleTime = document.createElement("p");

			//CONTENEDOR DE HSE
			var studentHseDiv = document.createElement("div");
			studentHseDiv.classList.add("hse-points")
			var studentHseTitle = document.createElement("p");
			studentHseTitle.appendChild(document.createTextNode("hse"));
			studentHseDiv.appendChild(studentHseTitle);

			//HSE PORCENTAJE
			var studentHseAverage = document.createElement("p");
			studentHseDiv.appendChild(studentHseAverage);

			//HSE PUNTOS
			var studentHsePoints = document.createElement("p");
			studentHseDiv.appendChild(studentHsePoints);

			//CONTENEDOR DE TECH
			var studentTechDiv = document.createElement("div");
			studentTechDiv.classList.add("tecnic-points")
			var studentTechTitle = document.createElement("p");
			studentTechTitle.appendChild(document.createTextNode("técnico"));
			studentTechDiv.appendChild(studentTechTitle);

			//HSE PORCENTAJE
			var studentTechAverage = document.createElement("p");
			studentTechDiv.appendChild(studentTechAverage);

			//TECH PUNTOS
			var studentTechPoints = document.createElement("p");
			studentTechDiv.appendChild(studentTechPoints);

			//DIV DE HSE DENTRO DE DEL DIV GENERAL DE ESTUDIANTES
			studentGeneralPoints.appendChild(studentTechDiv);
			studentGeneralPoints.appendChild(studentHseDiv);
			


			if ((i % 2) === 0) {
				scheduleTime.appendChild(document.createTextNode("turno am"));
				studentDiv.classList.add("am-schedule");
			}else if ((i % 2) !== 0) {
				scheduleTime.appendChild(document.createTextNode("turno pm"));
				studentDiv.classList.add("pm-schedule");
			}
			var activeStudent = document.createElement("h5");
			var activeStudentText = document.createTextNode("Alumna Activa");
			activeStudent.style.color = "#007c4d"
			activeStudent.appendChild(activeStudentText);

			var inactiveStudent = document.createElement("h5");
			var inactiveStudentText = document.createTextNode("Alumna Inactiva");
			inactiveStudent.style.color = "#ba0000"
			inactiveStudent.appendChild(inactiveStudentText);

			////// Checkea status alumnas (activa inactiva) y les asigna una class 
			var assistTitle = document.createElement("p");
			assistTitle.appendChild(document.createTextNode("Asistencia"))
			studentAssist.appendChild(assistTitle);
			if (stgoStudents[i].active == true) {
				studentDiv.classList.add("student-active");
				infoStudent.appendChild(activeStudent);
				totalActive++
				if (i<(stgoStudents.length-5)) {
					//EDITA DIV DE ASISTENCIA POR CADA ESTUDIANTE
					studentAssistNumber.appendChild(document.createTextNode("90%"));
					studentDiv.classList.add("over-assist");
				}else {
					studentAssistNumber.appendChild(document.createTextNode("65%"));
					studentDiv.classList.add("under-assist");
				}
				var hseStudentResult = 0;
				var techStudentResult = 0;
				var numberOfSprints = stgoStudents[i].sprints.length;
				for (var j = 0; j < stgoStudents[i].sprints.length; j++) {
					hseStudentResult += stgoStudents[i].sprints[j].score.hse;
					techStudentResult += stgoStudents[i].sprints[j].score.tech;
					//PUNTAJE POR SPRINT
					 // console.log(stgoStudents[i].sprints[j].number);
					 // console.log(stgoStudents[i].sprints[j].score);
					 // console.log(stgoStudents[i].sprints[j].score.hse);
					 // console.log(stgoStudents[i].sprints[j].score.tech);
					 //PUNTAJE TOTAL POR ESTUDIANTE
					 // console.log("HSE es " + hseStudentResult)
					 // console.log("Tech es " + techStudentResult)
				}
				//PUNTAJE PROMEDIO POR ESTUDIANTE
				// console.log("HSE promedio es " + hseStudentResult/numberOfSprints)
				// console.log("Tech promedio es " + techStudentResult/numberOfSprints)
				//APPEN AL PUNTAJE PORCENTUAL POR ESTUDIANTE
				studentHseAverage.appendChild(document.createTextNode(Math.round((hseStudentResult/numberOfSprints)*100/1000)+ "%"));
				studentHsePoints.appendChild(document.createTextNode(Math.round(hseStudentResult/numberOfSprints)+" pts"));
				if (Math.round((hseStudentResult/numberOfSprints)*100/1000)>69) {
					studentDiv.classList.add("over-hse");
				} else if (Math.round((hseStudentResult/numberOfSprints)*100/1000)<70) {
					studentDiv.classList.add("under-hse");
				}
				studentTechAverage.appendChild(document.createTextNode(Math.round((techStudentResult/numberOfSprints)*100/1600)+ "%"));
				studentTechPoints.appendChild(document.createTextNode(Math.round(techStudentResult/numberOfSprints)+" pts"));
				if (Math.round((techStudentResult/numberOfSprints)*100/1600)>69) {
					studentDiv.classList.add("over-tec");
				}	else if (Math.round((techStudentResult/numberOfSprints)*100/1600)<70) {
					studentDiv.classList.add("under-tec");
				}


				//FIN DE ALUMNA ACTIVA
			}else if (stgoStudents[i].active == false) {
				studentDiv.classList.add("student-inactive");
				infoStudent.appendChild(inactiveStudent);
				studentDiv.removeChild(studentGeneralPoints);
			}
			infoStudent.appendChild(scheduleTime);
			studentAssist.appendChild(studentAssistNumber);
			studentGeneralPoints.appendChild(studentAssist);
		}
	}
	counter.innerHTML = "el total de alumnas es de: " + document.getElementsByClassName("student").length;
}

////////////////////////           CHECKS            /////////////////////////
var checkDivs = document.getElementsByClassName("student");

var activeStudentsNum = document.getElementsByClassName("student-active");
var inactiveStudentsNum = document.getElementsByClassName("student-inactive");

//CHECK ACTIVAS
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
//CHECK INACTIVAS
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
//CHECK SOBRE 70 TÉCNICO
var overTecCheck = document.getElementById("over-tecnic");
overTecCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideUnderTec = document.getElementsByClassName("under-tec");
		for (var j = 0; j < hideUnderTec.length; j++) {
			if (overTecCheck.checked) {
				hideUnderTec[j].style.display = "none";
			}else {
				hideUnderTec[j].style.display = "block";
			}
		}
	} 
});
//CHECK Bajo 70 TÉCNICO
var underTecCheck = document.getElementById("under-tecnic");
underTecCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideOverTec = document.getElementsByClassName("over-tec");
		for (var j = 0; j < hideOverTec.length; j++) {
			if (underTecCheck.checked) {
				hideOverTec[j].style.display = "none";
			}else {
				hideOverTec[j].style.display = "block";
			}
		}
	} 
});
//CHECK SOBRE 70 HSE
var overHseCheck = document.getElementById("over-hse");
overHseCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideUnderHse = document.getElementsByClassName("under-hse");
		for (var j = 0; j < hideUnderHse.length; j++) {
			if (overHseCheck.checked) {
				hideUnderHse[j].style.display = "none";
			}else {
				hideUnderHse[j].style.display = "block";
			}
		}
	} 
});
//CHECK Bajo 70 HSE
var underHseCheck = document.getElementById("under-hse");
underHseCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideOverHse = document.getElementsByClassName("over-hse");
		for (var j = 0; j < hideOverHse.length; j++) {
			if (underHseCheck.checked) {
				hideOverHse[j].style.display = "none";
			}else {
				hideOverHse[j].style.display = "block";
			}
		}
	} 
});
//CHECK SOBRE ASISTENCIA
var overAssistCheck = document.getElementById("over-assist");
overAssistCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideUnderAssist = document.getElementsByClassName("under-assist");
		for (var j = 0; j < hideUnderAssist.length; j++) {
			if (overAssistCheck.checked) {
				hideUnderAssist[j].style.display = "none";
			}else {
				hideUnderAssist[j].style.display = "block";
			}
		}
	} 
});
//CHECK BAJO ASISTENCIA
var underAssistCheck = document.getElementById("under-assist");
underAssistCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideOverAssist = document.getElementsByClassName("over-assist");
		for (var j = 0; j < hideOverAssist.length; j++) {
			if (underAssistCheck.checked) {
				hideOverAssist[j].style.display = "none";
			}else {
				hideOverAssist[j].style.display = "block";
			}
		}
	} 
});
//CHECK HORARIO MAÑANA
var amCheck = document.getElementById("am-student");
amCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hidePm = document.getElementsByClassName("student-active pm-schedule");
		for (var j = 0; j < hidePm.length; j++) {
			if (amCheck.checked) {
				hidePm[j].style.display = "none";
			}else {
				hidePm[j].style.display = "block";
			}
		}
	} 
});
//CHECK HORARIO TARDE
var pmCheck = document.getElementById("pm-student");
pmCheck.addEventListener("click", function(){
	for (var i = 0; i < checkDivs.length; i++) {
		var hideAm = document.getElementsByClassName("student-active am-schedule");
		for (var j = 0; j < hideAm.length; j++) {
			if (pmCheck.checked) {
				hideAm[j].style.display = "none";
			}else {
				hideAm[j].style.display = "block";
			}
		}
	} 
});
// RESET CHECKS
var resetChecksBtn = document.getElementById("reset-checks");
resetChecksBtn.addEventListener("click", ticketReset)
function ticketReset(){
	pmCheck.checked = false;
	amCheck.checked = false;
	overTecCheck.checked = false;
	underTecCheck.checked = false;
	overHseCheck.checked = false;
	underHseCheck.checked = false;
	underAssistCheck.checked = false;
	overAssistCheck.checked = false;
	inactiveCheck.checked = false;
	activeCheck.checked = false;
	counter.innerHTML = "el total de alumnas es de: " + document.getElementsByClassName("student").length;

	for (var i = 0; i < checkDivs.length; i++) {
		checkDivs[i].style.display = "block";
	}
};

////////////////         CONTADOR DE ELEMENTOS          ////////////////////

var studentsState = document.getElementById("state");
var stateInputs = studentsState.getElementsByTagName("input");
for (var i = 0; i < stateInputs.length; i++) {
	stateInputs[i].addEventListener("click", count);
}

function count(){
	var num = 0;
	for (var i = 0; i < checkDivs.length; i++) {
		if (checkDivs[i].style.display == "block") {
			num++;
		}
	}
	counter.innerHTML = "alumnas que cumplen con la selección: " + num + " • " + Math.round((num*100)/totalActive) + "%";
	if ((num*100)/totalActive > 100) {
		counter.innerHTML = "alumnas que cumplen con la selección: " + num
	}
}




//////////////////////Otra forma de mostrar data por estudiante//////////////////

// var activeBtn = document.getElementById("active-btn");
// activeBtn.addEventListener('click', function(){
// 	for (var i = 0; i < checkDivs.length; i++) {
// 		var showActive = document.getElementsByClassName("student-inactive");
// 		for (var j = 0; j < showActive.length; j++) {
// 			showActive[j].style.display = "none";
// 		}
// 	}
// });
// var inactiveBtn = document.getElementById("inactive-btn");
// inactiveBtn.addEventListener('click', function(){
// 	for (var i = 0; i < checkDivs.length; i++) {
// 		var showInctive = document.getElementsByClassName("student-active");
// 		for (var j = 0; j < showInctive.length; j++) {
// 			showInctive[j].style.display = "none";

// 		}
// 	}
// });
// var allBtn = document.getElementById("all-btn");
// allBtn.addEventListener('click', function(){
// 	for (var i = 0; i < checkDivs.length; i++) {
// 		var showAll = document.getElementsByClassName("student");
// 		for (var j = 0; j < showAll.length; j++) {
// 			showAll[j].style.display = "block";

// 		}
// 	}
// });
/////////////////////////////////////////////////////////////////////////////////
console.log(data);
console.log(stgoStudents);
console.log(createStudents());


////////////////////////////////////////////////////////////////////////////

/*Menu profes*/
var newDiv= document.createElement("div");
newDiv.id="img2"; //entregando id a un div

var icono=document.createElement("i");
icono.classList.add("fa","fa-bars","icono");

var nav =document.createElement("nav");
nav.id="opcs-menu";
nav.classList.add("disabled-menu");


var list=document.createElement("ul");

var img = document.createElement("img");
img.classList.add("foto");
img.setAttribute("src","https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdhAAAAJDE4YTUyZGVmLTQzZjEtNDMxYi05NGM4LTA0M2VmNWZiODg4NA.jpg");

var listaA=document.createElement("li");
var arrowA=document.createElement("a");
arrowA.setAttribute("href", "showSignature(xyz)");
listaA.appendChild(arrowA);

var mensajeA=document.createTextNode("Valentina Smith");
arrowA.appendChild(mensajeA);

var listaB=document.createElement("li");
var arrowB=document.createElement("a");
arrowB.setAttribute("href", "showSignature(xyz)");
listaB.appendChild(arrowB);

var mensajeB=document.createTextNode("Agregar Estudiante");
arrowB.appendChild(mensajeB);

var listaC=document.createElement("li");
var arrowC=document.createElement("a");
arrowC.setAttribute("href", "showSignature(xyz)");
listaC.appendChild(arrowC);

var mensajeC=document.createTextNode("Remover Estudiante");
arrowC.appendChild(mensajeC);

var listaD=document.createElement("li");
var arrowD=document.createElement("a");
arrowD.setAttribute("href", "showSignature(xyz)");
listaD.appendChild(arrowD);

var mensajeD=document.createTextNode("Agregar Sprint");
arrowD.appendChild(mensajeD);

list.appendChild(img);
list.appendChild(listaA);
list.appendChild(listaB);
list.appendChild(listaC);
list.appendChild(listaD);

newDiv.appendChild(icono);
newDiv.appendChild(nav);
newDiv.appendChild(list);

nav.appendChild(list);
var superior=document.getElementById("superior-menu");
superior.appendChild(newDiv);

/*función boton*/
var boton = document.getElementById("img2");
function showMenu(){
var menu = document.getElementById("opcs-menu");

if(menu.classList.contains("disabled-menu")){
  menu.classList.remove("disabled-menu");
  menu.classList.add("enabled-menu");
  }
  else{
    menu.classList.remove("enabled-menu");
    menu.classList.add("disabled-menu")
  }
}
  boton.addEventListener("click", showMenu);

  /*Menu Ciudades*/
  /*función boton*/
  var botonA = document.getElementById("desplegable");
  function dropdownMenu (){
  var menuA = document.getElementById("despl-menu");

  if (menuA.classList.contains("disabled-menu")){
  menuA.classList.remove("disabled-menu");
  manuA.classList.add("enabled-menu");
  }
  else{
    menuA.classList.remove("enabled-menu");
    menuA.classList.add("disabled-menu");
   }
  }

////////////////////////////////////////////