$(document).ready(function(){
	var tw=0;
	var vcm=1;
	var antv;
	var cont=0;
	var sec=0;
	var nbom=1;
	var nbom2=1;
	var nbom3=1;
	var nbom4=1;
	var vid=6;
	var tiempo=0;
	var sr=0;
	var sl=0;
	var fin=0;
	var sw=0; 
	var margen= new Object();
		margen.izq=parseFloat($(".campo").css('margin-left').replace("px","")),
		margen.tot=margen.izq+800;
		margen.victizq=margen.izq-10;
		margen.caidader=margen.izq+790;
		margen.movnave1=margen.tot-120;
		margen.movnave2=margen.izq+15;



$.ionSound({
    sounds: [
        "metal_plate_2",
        "mhos:0.2"
    ],
    path: "sounds/",                // set path to sounds
    multiPlay: true,               // playing only 1 sound at once
    volume: "0.8"                   // not so loud please
});
$.ionSound.play("mhos");
function finjuego() {
	clearInterval(juego);
	clearInterval(human);
	clearInterval(fall1);
	clearInterval(fall2);
	clearInterval(fall3);
	clearInterval(fall4);
	efect=((sec*100)/cont).toFixed(2);
	rvict=sec*100;
	rtmp=(tiempo/10)*50;
	punt=rvict+rtmp;
	if(efect>=50 && efect<=69){
		punt=punt+(punt*20)/100;
	}else {
		if(efect>=70 && efect<=89){
			punt=punt+(punt*30)/100;
		}else {
			if(efect>=90 && efect<=100){
				punt=punt+(punt*50)/100;
			}
		}
	}



	document.getElementById('tabla').innerHTML ="<h1>Resultados:</h1>" +
	"<ul>" + 
		"<li>Victimas: " + sec + "</li>" +
		"<li>Efectividad: " + efect + "%</li>" +
		"<li>Tiempo: " + tiempo + " segundos</li>" +
		"<li>Puntuacion: " + punt + " puntos</li>" +
	"</ul>";
}

function victima() { 
	human= setInterval(function(){
		var fn=Math.random() * (3 - 1) + 1;
		fn = Math.round(fn);
		cont=cont+1;
		antv=vcm;
		var iDiv = document.createElement('div');
		iDiv.id = 'vt' + vcm;
		iDiv.className = 'vt';
		document.getElementsByTagName('body')[0].appendChild(iDiv);
		document.getElementById('vt' + vcm).innerHTML = "<img src='img/c" + fn + ".png'>"
		$('.cont').html("Humanos: " + cont);
		$("#vt" + vcm).animate({
			left: margen.victizq
			},2300,function(){
				$(this).remove();
				vcm=vcm+1;
			});

	},2500);
}

function caida1(){
	fall1 = setInterval(function(){
		iDiv6 = document.createElement('div');
		iDiv6.id = 'bom'+ nbom;
		iDiv6.className = 'bomt';
		document.getElementsByTagName('body')[0].appendChild(iDiv6);
		boml=Math.random() * (margen.caidader - margen.izq) + margen.izq;
		$("#bom"+nbom).css({'left':boml});
		$("#bom"+nbom).animate({
			top: "410"
			},1000,function(){
				nave=$("#nst").position();
				bomba=$(this).position();
				tot=bomba.left-nave.left;
				if(tot>=0 && tot<=90){
					vid=vid-1;
					$('.golpe').fadeIn('fast');
					$('.golpe').fadeOut('slow');
					$("#vid" + vid ).remove();
					switch(vid){
						case 1:
							$("#vid0" ).css({"background-color":"red"});
							break;
						case 3:
							$("#vid0" ).css({"background-color":"yellow"});
							$("#vid1" ).css({"background-color":"yellow"});
							$("#vid2" ).css({"background-color":"yellow"});
							break;
						case 0:
							finjuego();
							break;
					}
				}
				$(this).remove();
				nbom=nbom+1;
			});
	},2000);
}

function caida2(){
 fall2 = setInterval(function(){
		var iDiv3 = document.createElement('div');
		iDiv3.id = 'bom2'+ nbom2;
		iDiv3.className = 'bomt';
		document.getElementsByTagName('body')[0].appendChild(iDiv3);
		boml2=Math.random() * (margen.caidader - margen.izq) + margen.izq;
		$("#bom2"+nbom2).css({'left':boml2});
		$("#bom2"+nbom2).animate({
			top: "410"
			},1000,function(){
				nave2=$("#nst").position();
				bomba2=$(this).position();
				tot2=bomba2.left-nave2.left;
				if(tot2>=0 && tot2<=90){
					vid=vid-1;
					$('.golpe').fadeIn('fast');
					$('.golpe').fadeOut('slow');
					$("#vid" + vid ).remove();
					switch(vid){
						case 1:
							$("#vid0" ).css({"background-color":"red"});
							break;
						case 3:
							$("#vid0" ).css({"background-color":"yellow"});
							$("#vid1" ).css({"background-color":"yellow"});
							$("#vid2" ).css({"background-color":"yellow"});
							break;
						case 0:
							finjuego();
							break;
					}
				}
				$(this).remove();
				nbom2=nbom2+1;
			});
	},2500);
}

function caida3(){
 fall3 = setInterval(function(){
		var iDiv4 = document.createElement('div');
		iDiv4.id = 'bom3'+ nbom3;
		iDiv4.className = 'bomt';
		document.getElementsByTagName('body')[0].appendChild(iDiv4);
		boml3=Math.random() * (margen.caidader - margen.izq) + margen.izq;
		$("#bom3"+nbom3).css({'left':boml3});
		$("#bom3"+nbom3).animate({
			top: "410"
			},700,function(){
				nave3=$("#nst").position();
				bomba3=$(this).position();
				tot3=bomba3.left-nave3.left;
				if(tot3>=0 && tot3<=90){
					vid=vid-1;
					$('.golpe').fadeIn('fast');
					$('.golpe').fadeOut('slow');
					$("#vid" + vid ).remove();
					switch(vid){
						case 1:
							$("#vid0" ).css({"background-color":"red"});
							break;
						case 3:
							$("#vid0" ).css({"background-color":"yellow"});
							$("#vid1" ).css({"background-color":"yellow"});
							$("#vid2" ).css({"background-color":"yellow"});
							break;
						case 0:
							finjuego();
							break;
					}
				}
				$(this).remove();
				nbom3=nbom3+1;
			});
	},800);
}

function caida4(){
 fall4=setInterval(function(){
		var iDiv5 = document.createElement('div');
		iDiv5.id = 'bom4'+ nbom4;
		iDiv5.className = 'bomt';
		document.getElementsByTagName('body')[0].appendChild(iDiv5);
		boml4=Math.random() * (margen.caidader - margen.izq) + margen.izq;
		$("#bom4"+nbom4).css({'left':boml4});
		$("#bom4"+nbom4).animate({
			top: "410"
			},500,function(){
				nave4=$("#nst").position();
				bomba4=$(this).position();
				tot4=bomba4.left-nave4.left;
				if(tot4>=0 && tot4<=90){
					vid=vid-1;
					$('.golpe').fadeIn('fast');
					$('.golpe').fadeOut('slow');
					$("#vid" + vid ).remove();
					switch(vid){
						case 1:
							$("#vid0" ).css({"background-color":"red"});
							break;
						case 3:
							$("#vid0" ).css({"background-color":"yellow"});
							$("#vid1" ).css({"background-color":"yellow"});
							$("#vid2" ).css({"background-color":"yellow"});
							break;
						case 0:
							finjuego();
							break;
					}
				}
				$(this).remove();
				nbom4=nbom4+1;
			});
	},1200);
}

$(document).keydown(function(kd) {
	nav=$("#nst").position();
	switch(kd.which) {
	case 68:
		if(sr==0){
			sr=1;
			if(nav.left<=margen.movnave1){
				mov=960-nav.left;
				canm="+=" + mov + "px";
				if(mov>0){
					$("#nst").stop();
					$("#nst").animate({ "left": canm }, 1200 );
				}
			}
		}
		break;
	case 65:
		if(sl==0){
			sl=1;
			if(nav.left>=margen.movnave2){
				mov=nav.left-295;
				canm="-=" + mov + "px";
				if(mov>0){
					$("#nst").stop();
					$("#nst").animate({ "left": canm }, 1200 );
				}
			}
		}	
		break;
	}
});

$(document).keyup(function(hf) {
	switch(hf.which) {
	case 68:
		sr=0;
		$("#nst").stop();
		break;
	case 65:
		sl=0;
		$("#nst").stop();
		break;
	}		
});

$(document).keypress(function(e) {
	d=$("#nst").position();
	vt=$(".vt:last").position();
	if(typeof vt!= 'undefined'){
	switch(e.which) {
		case 13:
		if(sw==0){
			sw=1
			nst=$("#nst").position();
			vt=$(".vt:last").position();
			if(d.top>=370){
			l=d.left-10;
			t=d.top-80;
			$("#ns3").fadeIn('fast');
			$.ionSound.play("metal_plate_2");
			est=vt.left-nst.left;
			if(est>=-40 && est<=40){
				$("#vt" + antv).stop();
				$("#vt" + antv).animate({ "top": "-=50" }, 100 );
				$("#vt" + antv).fadeOut(200);

				setTimeout(function(){
					$(".vt:first").remove();
				}, 500);
				sec=sec+1;
				$('.vict').html("<ul><li><img src='img/c1.png'></li><li>:</li><li>&nbsp;" + sec + "</li></ul>");
			}
			setTimeout(function(){
				sw=0;
				$("#ns3").fadeOut('slow');
			}, 500);

			}
		}
			break;
	}
}
});

var juego=setInterval(function(){
	if(tiempo==0){
		victima()
	}
	if(tiempo==2){
		caida1()
	}
	if(tiempo==8){
		caida2()
	}
	if(tiempo==15){
		caida3()
	}
	if(tiempo==21){
		caida4()
	}
	tiempo=tiempo+1;
},1000);
});