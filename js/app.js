(function(){
  $('#form').submit(function(e){
    e.preventDefault();
    var fd = new FormData(document.forms.form);
    console.log(fd);
    $.ajax({
      method: 'POST',
      url: "https://webdev-api.loftschool.com/sendmail",
      data: fd,
      processData: false,
      contentType: false,
      success: function(data){
        $(this).addClass('done');
      }
    })
  });
})();