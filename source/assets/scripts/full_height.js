!function(){
  var styleTag;

  var setStyleTag = function(height) {
    console.log('setting to height:' + height)
    styleTag = document.createElement('style')
    styleTag.textContent = '.full-height {min-height: ' + height + 'px}'
    document.head.appendChild(styleTag)
  }

  window.addEventListener('resize', function(){
    styleTag.remove()
    setStyleTag(window.innerHeight)
  })

  setStyleTag(window.innerHeight)
}()
