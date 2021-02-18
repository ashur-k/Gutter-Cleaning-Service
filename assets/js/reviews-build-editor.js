 
 var version = "6.6.9";
var build = "2021-02-17T22_23_52";
function buildEditorParent() {
    window.isMultiScreen = true;
    window.editorParent = {};
    window.previewParent = {};
    window.assetsCacheQueryParam = "?version=2021-02-17T22_23_52";
    try {
        var _p = window.parent;
        if (_p && _p.document && _p.$ && _p.$.dmfw) {
            window.editorParent = _p;
        }
        else if (_p.isSitePreview) {
            window.previewParent = _p;
        }
    } catch (e) {}
    }

    buildEditorParent();