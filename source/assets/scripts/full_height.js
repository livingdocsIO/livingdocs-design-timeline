!function(){
  // hack to make sure Iframe Resizer is already loaded
  setTimeout(function(){

    // definitions
    var styleTag;
    var setStyleTag = function(height) {
      styleTag = document.createElement('style')
      styleTag.textContent = '.full-height {min-height: ' + height + 'px}'
      styleTag.textContent += '.half-height {min-height: ' + height / 2 + 'px}'
      document.head.appendChild(styleTag)
    }
    var getViewportHeight = function(cb){
      cb(null)
    }

    // in an Iframe with Iframe Resizer loaded
    if(window.parentIFrame !== undefined) {
      getViewportHeight = function(cb) {
        window.parentIFrame.getPageInfo(function(data){
          cb(data.clientHeight)
        })
      }
    }
    // in a general Iframe
    else if(window.top != window.self) {
      getViewportHeight = function(cb) {
        cb(500)
      }
    }
    // not in an Iframe
    else {
      getViewportHeight = function(cb) {
        cb(window.innerHeight)
      }
    }

    // initial setting of the height
    getViewportHeight(function(viewportHeight){
      setStyleTag(viewportHeight)
    })

    // setting on each resize event
    window.addEventListener('resize', function(){
      getViewportHeight(function(viewportHeight){
        styleTag.remove()
        setStyleTag(viewportHeight)
      })
    })

  }, 10)
}()
