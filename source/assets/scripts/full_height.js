!function(){
  var styleTag;

  var setStyleTag = function(height) {
    styleTag = document.createElement('style')
    styleTag.textContent = '.full-height {min-height: ' + height + 'px}'
    styleTag.textContent += '.half-height {min-height: ' + height / 2 + 'px}'
    document.head.appendChild(styleTag)
  }

  window.addEventListener('resize', function(){
    styleTag.remove()
    setStyleTag(window.innerHeight)
  })

  setStyleTag(window.innerHeight)
}()
