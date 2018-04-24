$('button').on('click', function (){
  var x = $(this).data("artist");
  console.log(x);
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=L49EH3oucLS9km1SrBfeUb3jzphsKDfy&limit=10";
  $.ajax({url:queryURL, method:"GET"})
    .done(function(response){
      console.log(response)
      for(var i = 0; i < response.data.length; i++){
        var artistDiv = $('<div>');
        var p = $('<p>').text("Rating: "+response.data[i].rating);
        var artistImage = $('<img>');
        artistImage.attr('src', response.data[i].images.fixed_height.url);
        artistDiv.append(p);
        artistDiv.append(artistImage);
        $('#gifs').append(artistDiv);
      }
  })
})