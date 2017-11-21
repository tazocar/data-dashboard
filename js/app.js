//Activa la función que actualiza los estudiantes al cargar la página
window.onload = actualiceTotalStudents;
//gráficos comiencen en 0
Chart.defaults.scale.ticks.beginAtZero = true;
//llamo canvas para el grafico del total de estudiantes
// var chartCircle = document.getElementById("studentSatisfaction");
document.getElementsByTagName("canvas")[0].style.display = 'inline-block';
document.getElementsByTagName("canvas")[1].style.display = 'inline-block';
document.getElementsByTagName("canvas")[2].style.display = 'inline-block';
document.getElementsByTagName("canvas")[3].style.display = 'inline-block';

var yearColor = ["#FDB45C","#FDB45C", "#FDB45C",];




//Grafico Total Estudiantes
function actualiceTotalStudents(){
	var year = [];
	var totalStudentsStgo = [];
	//ITERA EN LA DATA DE STGO
	for (i in data.SCL){
		//PUSH AL AÑO EN EL QUE ESTAS
		year.push(i);
		var students = data.SCL[i].students;
		var studentCount = 0;
		//ITERA EN ESTUDIANTES
		for (var i = 0; i < students.length; i++) {
			//SUMA 1 AL TOTAL DE ESTUDIANTES
			total++
			//SUMA 1 AL TOTAL DE ESTUDIANTES DE CHILE
			totalChile++
			//SI EL ESTUDIANTE ESTÁ ACTIVO
			if (students[i].active == true) {
			//SUMA 1 A LA CUENTA DE ESTUDIANTES (POR PAÍS)
			studentCount++
			//+1 a estudiantes activos
			activeOnes++
			//+1 a estudiantes activos chile
			activeChile++
			};
		};
		//Ingresa el resultado al array de la data
		totalStudentsStgo.push(studentCount)
	};
	//Repite para los otros países
	var totalStudentsAqp = [];
	for (i in data.AQP){
		var students = data.AQP[i].students;
		var studentCount = 0;
		for (var i = 0; i < students.length; i++) {
			total++;
			if (students[i].active == true) {
			studentCount++
			activeOnes++
			};
		};
		totalStudentsAqp.push(studentCount)
	};

	var totalStudentsMx = [];
	for (i in data.CDMX){
		var students = data.CDMX[i].students;
		var studentCount = 0;
		for (var i = 0; i < students.length; i++) {
			total++;
			if (students[i].active == true) {
			studentCount++
			activeOnes++
			};
		};
		totalStudentsMx.push(studentCount)
	};

	var totalStudentsLim = [];
	for (i in data.LIM){
		var students = data.LIM[i].students;
		var studentCount = 0;
		for (var i = 0; i < students.length; i++) {
			total++;
			if (students[i].active == true) {
			studentCount++
			activeOnes++
			};
		};
		totalStudentsLim.push(studentCount)
	};


	// GRAFICO DE BARRAS TOTAL ESTUDIANTES
	var totalStudentsChartBar = document.getElementById("totalStudentsChart");
	var barChart = new Chart(totalStudentsChartBar, {
		type:"bar",
		data: {
			datasets:[{
				label:"Santiago",
				data: totalStudentsStgo,
				backgroundColor: yearColor,
			},
			{
				label:"Arequipa",
				data: totalStudentsAqp,
				backgroundColor: "#b4bac5",
			},
			{
				label:"Ciudad de México",
				data: totalStudentsMx,
				backgroundColor: "#878d96",
			},
			{
				label:"Lima",
				data: totalStudentsLim,
				backgroundColor: "#686a74",
			}],
			labels: year,
		},
		options : {
			responsive : false,
			title: {
	            display: true,
	            text: 'Total de Estudiantes',
        	}
		},
	});
	desertion();
	overStudents();
};

//-2 pq inventé 2 alumnas inactivas 
var total = -2
var activeOnes = 0;
var totalChile = 0;
var activeChile = 0;

//// Grafico Deserción
function desertion(){
	//Total Mundial
	var inactiveOnes = total-activeOnes;
	var activeOnesPercentaje = Math.round((activeOnes*100)/total);
	var inactiveOnesPercentaje = Math.round((inactiveOnes*100)/total);

	var inactiveChile = totalChile-activeChile;

	var activeOnesChilePercentaje = Math.round((activeChile*100)/totalChile);
	var inactiveOnesChilePercentaje = Math.round((inactiveChile*100)/totalChile);

	var desertionChart = document.getElementById("studentDesertion");
	var pieChartDesertion = new Chart(desertionChart, {
		type:"pie",
		data : {
			datasets :[{
				data : [activeChile, inactiveChile],
				backgroundColor: ["#FFA538","#686a74",],
			},
			{
				data : [],
			}
			],
			labels : ["Egresa","Deserta",]
		},
		options : {
			responsive : false,
			title: {
		        display: true,
		        text: 'Deserción de Estudiantes',
	        }
		}
	});
	var desertionChartTwo = document.getElementById("studentDesertionTwo");
	var pieChartDesertionTwo = new Chart(desertionChartTwo, {
		type:"pie",
		data : {
			datasets :[{
				data : [activeOnesChilePercentaje, inactiveOnesChilePercentaje],
				backgroundColor: ["#ffbd6e","#878d96",],
			},
			{
				data : [],
			}
			],
			labels : ["Egresa","Deserta",]
		},
		options : {
			responsive : false,
			legend: {
        		display: false,
    		},
		}
	});
};


function overStudents(){
	var fulfill = 0;
	var over = 0;
	var under = 0;

	var ratings = data.SCL["2017-2"].ratings
	for (var i = 0; i < ratings.length; i++) {
		fulfill += (ratings[i].student["cumple"])/ratings.length;
		over += (ratings[i].student["no-cumple"])/ratings.length;
		under += (ratings[i].student["supera"])/ratings.length;
	}

	//GRAFICO ESTUDIANTES SUPERAN META PORCENTAJE
	var studentsOverTotalPercent = document.getElementById("overTotalPercent");
	var pieChartDesertionTwo = new Chart(studentsOverTotalPercent, {
		type:"pie",
		data : {
			datasets :[{
				data : [under,fulfill,over],
				backgroundColor: ["#b4bac5","#686a74","#ffbd6e"],
			},
			{
				data : [],
			}
			],
			labels : ["No Cumple","Cumple","Supera"]
		},
		options : {
			responsive : false,
			title: {
		        display: true,
		        text: 'Superación de Metas',
	        },

		}
	});
	var activeStudentsPerYear = 0;
	var totalStudents = data.SCL["2017-2"].students;
	for (var i = 0; i < totalStudents.length; i++) {
		if (totalStudents[i].active == true) {
			activeStudentsPerYear++;
		};
	};

	var overPoints = Math.round(activeStudentsPerYear*(over/100));
	var underPoints = Math.round(activeStudentsPerYear*(under/100));
	var fulfillPoints = Math.round(activeStudentsPerYear*(fulfill/100));

	//GRAFICO ESTUDIANTES SUPERAN META PUNTOS HUMANOS
	var studentsOverTotal = document.getElementById("overTotal");
	var pieChartDesertionTwo = new Chart(studentsOverTotal, {
		type:"pie",
		data : {
			datasets :[{
				data : [underPoints,fulfillPoints,overPoints],
				backgroundColor: ["#b4bac5","#686a74","#ffbd6e"],
			},
			{
				data : [],
			}
			],
			labels : ["No Cumple","Cumple","Supera"]
		},
		options : {
			responsive : false,
	        legend: {
        		display: false,
    		},		
		}
	});

}

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