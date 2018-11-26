(function(){
  $('#form').submit(function(e){
    var myForm = $('#form')
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
        myForm.addClass('done');
      }
    })
  });
})();