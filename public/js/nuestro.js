"use strict";var open=document.getElementById("open-modal"),modal=document.getElementById("modal"),close=document.getElementById("close-modal");open.addEventListener("click",function(){modal.classList.toggle("zoom-in"),modal.classList.remove("zoom-out")}),close.addEventListener("click",function(){modal.classList.replace("zoom-in","zoom-out")});var mainNav=document.getElementById("mainNav"),openMenu=document.getElementById("openMenu"),closeMenu=document.getElementById("closeMenu");function hideMenu(){mainNav.classList.remove("show-menu")}function showMenu(){mainNav.classList.toggle("show-menu")}function efectos(){$("#up").on("click",function(){$("html, body").animate({scrollTop:0,scrollLeft:0},1e3)})}document.addEventListener("click",function(e){e.target!==mainNav&&e.target!==openMenu&&hideMenu()}),mainNav.addEventListener("mouseleave",hideMenu),openMenu.addEventListener("click",showMenu),closeMenu.addEventListener("click",hideMenu),$(document).ready(efectos);var slider=$("#slider"),next=$("#btnNext"),prev=$("#btnPrev");function moverD(){slider.animate({marginLeft:"-200%"},700,function(){$("#slider section:first").insertAfter("#slider section:last"),slider.css("margin-left","-100%")})}function moverI(){slider.animate({marginLeft:0},700,function(){$("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%")})}function autoplay(){setInterval(function(){moverD()},6e3)}$("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%"),next.on("click",function(){moverD()}),prev.on("click",function(){moverI()}),autoplay();