$(document).ready(function () {
  $('#btn_translate').click(function () {
    fetchTranslation();
  });

  $('#language_code').keypress(function (event) {
    if (event.key === 'Enter') {
      fetchTranslation();
    }
  });

  function fetchTranslation() {
    const languageCode = $('#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;
    $.get(apiUrl, function (data) {
      const translation = data.hello;
      $('#hello').text(translation);
    }).fail(function () {
      $('#hello').text('Error: Language code not found.');
    });
  }
});
