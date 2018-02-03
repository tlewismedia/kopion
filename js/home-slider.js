// JavaScript Document
$('.carousel').carousel({
interval: 7000
})
$('#carousel-nav a').click(function(q){
q.preventDefault();
targetSlide = $(this).attr('data-to')-1;
$('#myCarousel').carousel(targetSlide);
$(this).addClass('active').siblings().removeClass('active');
});
