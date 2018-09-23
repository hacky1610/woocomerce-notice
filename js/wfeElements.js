//https://gist.github.com/leolux/c794fc63d9c362013448
var SleepEditor = function(element, options) {
  
  var elem = $("<div>Editor</div>");
  

  // Public method - can be called from client code
  this.getElement = function() {
    return elem;
  };



};

    var WfeElement = function(c)
    {
      this.render = function() {
        frame.empty();
        if(frame.before()[0].className.includes("wfe"))
          frame.append(beforeLine);
        frame.append(content.content())
        if(frame.next().length == 0 )
          frame.append(afterIcon);
      };


      this.content = function()
      {
        return frame;
      };

      this.selected = function(callback)
      {
        selectedCallback = callback;
      };

      this.addAfter = function(element)
      {
          after = element;
          element.content().insertAfter(this.content())
      };

      var createUUID = function () {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
    
        var uuid = s.join("");
        return uuid;
    }
    
    var initEvents = function()
    {
      content.content().click(() => 
      {
        selectedCallback(this);
      });

      afterIcon.on("drop",function(event){
        alert();
      });

      afterIcon.on("dragover", function(event) {
        event.preventDefault();  
        event.stopPropagation();
        $(this).addClass('dragging');
      });
    }

    var guid = createUUID();
    var frame = $(`<li id='${guid}' class='wfeElement'></li>` );
    var beforeLine = $( "<div class='wfeElement vl center'>" )
    var afterIcon = $( "<div class='wfeElement vl center'></div><div class='wfeElement plus center'>+</div>" )
    var content = c;
    var before = null;
    var after = null;
    var selectedCallback = null;
    initEvents();
    
    };


    var Sleep = function() {
  
      var elem = $("<div class='action'></div>");
      var editor = new SleepEditor();
      var time = "10";

      this.content = function()
      {
        return elem;
      }

      this.getEditor = function()
      {
        return editor.getElement();
      }
      
      this.getTime = function()
      {
        return time;
      }

      this.setTime = function(t)
      {
        time = t;
      }

      var updateTime = function()
      {
        elem.html(`Wait ${time} seconds`);
      }
      updateTime();

    };

    var Notify = function() {
  
      var elem = $("<div class='notify'>Notify</div>");

      this.content = function()
      {
        return elem;
      }

      this.getEditor = function()
      {
        return editor.getElement();
      }
      
     

    };