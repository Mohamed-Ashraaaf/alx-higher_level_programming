$(document).ready(function() {
  $.ajax({
    url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
    method: 'GET',
    success: function(data) {
      $.each(data.results, function(index, movie) {
        var listItem = $('<li>').text(movie.title);
        $('#list_movies').append(listItem);
      });
    },
    error: function(error) {
      console.log('Error fetching movies data:', error);
    }
  });
});
