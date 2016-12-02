var frame = require("ui/frame")

function onTap(args) {
    var obj = args.object
    var context = obj.bindingContext
    var navigationEntry = {
        moduleName: 'some-other-page', 
        context: context
    }
    frame.topmost().navigate(navigationEntry)
}

exports.onTap = onTap