$( document ).ready(function() {
  $(".box-drop.conti > a").click(
    function(){
      $(".drop-conti").toggle(500)
    })
    $(".box-drop.prodotti > a").click(
      function(){
        $(".drop-prodotti").toggle(500)
      })
    $(".box-drop.azienda > a").click(
      function(){
        $(".drop-azienda").toggle(500)
      })

});
