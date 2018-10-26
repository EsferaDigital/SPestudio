"use strict";var mainNav=document.getElementById("mainNav"),openMenu=document.getElementById("openMenu"),closeMenu=document.getElementById("closeMenu");function hideMenu(){mainNav.classList.remove("show-menu")}function showMenu(){mainNav.classList.toggle("show-menu")}function efectos(){$("#up").on("click",function(){$("html, body").animate({scrollTop:0,scrollLeft:0},1e3)})}document.addEventListener("click",function(e){e.target!==mainNav&&e.target!==openMenu&&hideMenu()}),mainNav.addEventListener("mouseleave",hideMenu),openMenu.addEventListener("click",showMenu),closeMenu.addEventListener("click",hideMenu),$(document).ready(efectos);var slider=$("#slider"),next=$("#btnNext"),prev=$("#btnPrev");function moverD(){slider.animate({marginLeft:"-200%"},700,function(){$("#slider section:first").insertAfter("#slider section:last"),slider.css("margin-left","-100%")})}function moverI(){slider.animate({marginLeft:0},700,function(){$("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%")})}function autoplay(){setInterval(function(){moverD()},6e3)}$("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%"),next.on("click",function(){moverD()}),prev.on("click",function(){moverI()}),autoplay();var formulario=document.getElementById("formulario"),body=document.getElementById("body"),modalErrores=document.createElement("div");function validar(e){var n="";if(0==formulario.nombre.value&&(e.preventDefault(),n+="<p>Escriba un nombre</p>"),0==formulario.email.value&&(e.preventDefault(),n+="<p>Ingrese un correo</p>"),0==formulario.mensaje.value&&(e.preventDefault(),n+="<p>Ingrese un mensaje</p>"),""==n==0){var t='\n      <div class="modal-errores-content">\n       <h3>Error</h3>\n        '.concat(n,'\n        <span id="btnClose">Cerrar</span>\n      </div>\n    ');modalErrores.innerHTML=t,body.appendChild(modalErrores)}document.getElementById("btnClose").addEventListener("click",function(){body.removeChild(modalErrores)})}modalErrores.classList.add("modal-errores"),formulario.addEventListener("submit",validar);