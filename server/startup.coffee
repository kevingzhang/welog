Inject.rawHead 'loader-style',
  # Force the initial scale for Android and iOS as our spinner may be
  #  distorted by their default viewport values.
  '<meta name="viewport" content="width=device-width,maximum-scale=1,' +
    'initial-scale=1,user-scalable=no">' +
  # The loading spinner needs some theming.
  '<style>' +
    'html{background-color: #36342e;}' +
    'body{color:#ddd;overflow:hidden;width:100%;}' +
    '.spinner {' +
      'bottom:0;height:80px;left:0;margin:auto;position:absolute;' +
      'color:#fff;font-size:40px;top:0;right:0;width:100%;text-align:center;' +
    '}' +
    '</style>'
# The loading spinner is a CSS animation.
# /!\ WARNING: The trick is to create a fake body by injecting data
# in the HTML's head as Meteor is requesting JS  file in a blocking
# fashion and mobile only allow 1 HTTP request at a time on a GPRS network.
Inject.rawHead 'loader-body2', '<body><div class="spinner">Welog</div></body>'
