
      function TxtOverlay(pos, txt, cls, map) {
        this.pos = pos;
        this.txt_ = txt;
        this.cls_ = cls;
        this.map_ = map;
        this.div_ = null;
        this.setMap(map);
      }
      TxtOverlay.prototype = new google.maps.OverlayView();
      TxtOverlay.prototype.onAdd = function() {
        var div = document.createElement('DIV');
        div.className = this.cls_;
        div.innerHTML = this.txt_;
        this.div_ = div;
        var overlayProjection = this.getProjection();
        var position = overlayProjection.fromLatLngToDivPixel(this.pos);
        div.style.left = position.x + 'px';
        div.style.top = position.y + 'px';
        var panes = this.getPanes();
        panes.floatPane.appendChild(div);
      }
      TxtOverlay.prototype.draw = function() {
          var overlayProjection = this.getProjection();
          var position = overlayProjection.fromLatLngToDivPixel(this.pos);
          var div = this.div_;
          div.style.left = position.x + 'px';
          div.style.top = position.y + 'px';
        }
      TxtOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      }
      TxtOverlay.prototype.hide = function() {
        if (this.div_) {
          this.div_.style.visibility = "hidden";
        }
      }
      TxtOverlay.prototype.show = function() {
        if (this.div_) {
          this.div_.style.visibility = "visible";
        }
      }
      TxtOverlay.prototype.toggle = function() {
        if (this.div_) {
          if (this.div_.style.visibility == "hidden") {
            this.show();
          } else {
            this.hide();
          }
        }
      }
      TxtOverlay.prototype.toggleDOM = function() {
        if (this.getMap()) {
          this.setMap(null);
        } else {
          this.setMap(this.map_);
        }
      }