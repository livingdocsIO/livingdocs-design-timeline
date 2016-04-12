if(window.liEditorLoaded) {
  window.liEditorLoaded(function(liEditor){
    if(liEditor.interactive) {
      // do nothing
    } else {
      $('.media-gallery-slides').slippry({auto: false, adaptiveHeight: false});
    }
  });
} else {
  $('.media-gallery-slides').slippry({auto: false, adaptiveHeight: false});
}
