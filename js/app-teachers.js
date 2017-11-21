// document.getElementsByTagName("canvas")[0].style.display = 'inline-block';
// document.getElementsByTagName("canvas")[1].style.display = 'inline-block';
// document.getElementsByTagName("canvas")[2].style.display = 'inline-block';
// document.getElementsByTagName("canvas")[3].style.display = 'inline-block';


window.onload = createTeachers
var teachersSection  = document.getElementById("teachers-section");
function createTeachers(){
	var totalTeacherPoints = 0;
	for (var i = 0; i < 16; i++) {
		var teacherDiv = document.createElement("div");
		teacherDiv.classList.add("teacher");
		var teacherGraph = document.createElement("canvas");
		var teacherClass = "teacher"+i;
		teacherGraph.id = teacherClass;
		teacherGraph.setAttribute("width", "200");
		teacherGraph.setAttribute("height", "200");
		teacherDiv.appendChild(teacherGraph);
		teachersSection.appendChild(teacherDiv);

		var teacherPic = document.createElement("img");
		teacherPic.setAttribute("src", "assets/images/Viki.png");
		teacherPic.classList.add("teacherPhoto");

		teacherDiv.appendChild(teacherPic);
		
		var teacherName = "Susana Horia";

		var grade = Math.floor(Math.random() * 10) + 1;
		var rest = 10 - grade;
		totalTeacherPoints+= grade;
		// Creando gráficos
		var teacherPoints = document.getElementById(teacherClass);
		var pieTeacherPoints = new Chart(teacherPoints, {
			type:"pie",
			data : {
				datasets :[{
					data : [grade,rest],
					backgroundColor: ["#ffbd6e","#686a74"],
				},
				{
					data : [],
				}
				],
				labels : ["Puntos","Resto"]
			},
			options : {
				responsive : false,
				title: {
			        display: true,
			        text: teacherName,
	    	    },
	    	    legend: {
        			display: false,
    			},
			}
		});
	}
	// var divAverage = document.getElementById("average-points");
	// var totalAverage = Math.round(totalTeacherPoints/16)
	// var averageRest = 10 - totalAverage;
	// var averagePoints = document.createElement("canvas");
	// averagePoints.id = "average";
	// averagePoints.setAttribute("width", "300");
	// averagePoints.setAttribute("height", "300");
	// averagePoints.style.display = 'inline-block';

	// divAverage.appendChild(averagePoints);

	// var averageTeacherPoints = document.getElementById("average");
	// var pieAverageTeacherPoints = new Chart(averageTeacherPoints, {
	// 	type:"pie",
	// 	data : {
	// 		datasets :[{
	// 			data : [totalAverage,averageRest],
	// 			backgroundColor: ["#ffbd6e","#686a74"],
	// 		},
	// 		{
	// 			data : [],
	// 		}
	// 		],
	// 		labels : ["Puntos","Resto"]
	// 	},
	// 	options : {
	// 		responsive : false,
	// 		title: {
	// 	        display: true,
	// 	        text: "Promedio de puntos",
 //    	    },
 //    	    legend: {
 //       			display: false,
 //   			},
	// 	}
	// });
};

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
