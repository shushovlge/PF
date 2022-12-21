//Desactivar en la pagina completa
$("body").bind('cut copy paste', function(e){
    e.preventDefault();
})