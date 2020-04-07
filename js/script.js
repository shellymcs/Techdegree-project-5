$(document).ready( function(){
let images = document.getElementsByTagName('a');
$('.search').on('keyup', function(){
    let search = $('.search').val().toLowerCase();
    for (var i =0; i< images.length; i++) {
        let searchVal = images[i].getAttribute('data-caption');
    
    if (searchVal.toLowerCase().indexOf(search) > -1){
    images[i].style.display ="";
}else {
    images[i].style.display = "none";
}
    }
});
});


$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});