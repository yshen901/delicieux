webpackJsonp([12],{3:function(e,n,t){e.exports=t("Q9J0")},Q9J0:function(e,n){var t=$("#collapseExample");$(document).ready(function(){var e;(e=document.querySelector(".related-examples-container .related-examples"))&&e.addEventListener("click",function(n){e===n.target&&t.length>0&&t.collapse("toggle")}),$(".related-examples-container .nav-pills .nav-item").length>0&&document.querySelectorAll(".related-examples-container .nav-pills .nav-item").forEach(function(e){e.addEventListener("click",function(){t.length>0&&t.is(".collapse:not(.show)")&&t.collapse("show")})})})}},[3]);