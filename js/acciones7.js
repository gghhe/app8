// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //escuchador de eventos
		$('#izquierda').on("swipeleft",function(){ //deslizar a la izquierda
			navigator.notification.alert("Deslizó hcaia la izquierda",function(){"aplicacion 7", "ok"}); //aparece mensaje alert
		}); //cierre swipe izquierda
		$('#derecha').on("swiperight",function(){ //deslizar derecha
			navigator.notification.confirm("¿qué quieres hacer?",function(op){ //aparece mensaje para confirmar
				switch(op) //variable op para las opciones
				{
					case 1:
					navigator.notification.beep(1); //suena dispositivo
					break;
					
					case 2:
					navigator.notification.vibrate(3000); //vibra dispositivo
					break;
				}
			},"aplicacion7","beepear vibrar,cancelar");
			});
	},false);
});
