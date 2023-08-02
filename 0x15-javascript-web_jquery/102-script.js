$(document).ready(function () {
  $('#btn_translate').click(function () {
    const languageCode = $('#language_code').val();
    fetchTranslation(languageCode);
  });

  function fetchTranslation(languageCode) {
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;
    $.get(apiUrl, function (data) {
      const translation = data.hello;
      $('#hello').text(translation);
    }).fail(function () {
      $('#hello').text('Error: Language code not found.');
    });
  }
});
