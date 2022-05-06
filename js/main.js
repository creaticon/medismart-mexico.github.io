$(function(){
// Métodos de jquery

$("a").click(function(event){
  if (this.hash !== "") {
  event.preventDefault();
  var gato = this.hash;
  $('html, body').animate({
      scrollTop: $(gato).offset().top -63,
  }, 800, function(){
  window.location.hash = gato;
  });
  }
});

});


$(function () {
    $('[data-toggle="tooltip"]').tooltip();

$('body').on('dblclick','h4', function(){
  $(this).css("color", "red");
});
$('#enviarCorreo').click(function (){
  alert("El correo fue enviado correctamente...")
});

$('.card-title').click(function (){
  $('.card-text').toggle();
});

});

/* var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '5rem',
} );

splide.mount(); */

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#image-slider', {
		type: 'loop',
		perPage: 1,
		autoplay: true,
		pagination: true,
		arrows: true,
		interval: 20000,
	}).mount();

  new Splide('#image-slider-mobile', {
		type: 'loop',
		perPage: 1,
		autoplay: true,
		pagination: true,
		arrows: true,
		interval: 20000,
    height: '700px'
	}).mount();

  new Splide('#slider-clients', {
		type: 'loop',
		perPage: 6,
		autoplay: true,
		pagination: true,
		arrows: true,
		interval: 30000
	}).mount();


  new Splide('#slider-clients-mobile', {
		type: 'loop',
		perPage: 1,
		autoplay: true,
		pagination: true,
		arrows: true,
		interval: 30000
	}).mount();


  new Splide('#slider-programs', {
		type: 'loop',
		perPage: 1,
		autoplay: true,
		pagination: true,
		arrows: true,
		interval: 30000
	}).mount();
});