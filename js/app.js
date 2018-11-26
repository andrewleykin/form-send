(function(){
  $('#form').submit(function(e){
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      method: 'POST',
      url: "https://webdev-api.loftschool.com/sendmail",
      data: $(this).serialize()
    }).done(function() {
      $( this ).addClass( "done" );
    });
  });
})();