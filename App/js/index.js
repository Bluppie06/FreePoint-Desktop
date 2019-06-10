// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper1")
                .setLeft("5.833333333333333em")
                .setTop("1.6666666666666667em")
                .setWidth("52.833333333333336em")
                .setHeight("8.333333333333334em")
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.text")
                .setHost(host,"xui_svg_text1")
                .setSvgTag("Shapes:Text")
                .setAttr({
                    "x":321,
                    "y":58.5,
                    "text":"Welcome to B-Words",
                    "font-size":"50px",
                    "font-weight":"bold"
                })
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button8")
                .setDirtyMark(false)
                .setLeft("13em")
                .setTop("9.5em")
                .setWidth("12.083333333333334em")
                .setHeight("5.416666666666667em")
                .setCaption("Open B-Words")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"page",
                        "target":"App.Writer",
                        "args":[
                            { }
                        ],
                        "method":"open",
                        "event":1
                    },
                    "_xui_ui_button8_onclick"
                ])
                .setCustomStyle({
                    "KEY":{
                        "font-size":"20px"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button8_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});