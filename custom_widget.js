(function () {

	// proxy.js
	var _proxy = window.SmaCustomWidget.proxy;

	var _on_load = function () {
		// The proxy ON method is used to subscribe for properties changes.
		// First Parameter: Property name declared in the Engineering Environment.
		// Second Parameter: Javascript function that will be called when the property changes.
		// Third Parameter: Context used to call the JavaScript callback.
		_proxy.on("PropertyName", _callback, this);
	}

	// Implement the callback that will receive the 
	// property changes
	// Info : {propName: "CustomWidgetPropertyName", value:""}
	var _callback = function (info) {
	};

	var write_in_the_property = function () {
		_proxy.set({propName: "PropertyName", value:"New Value"});
	};

	var _fire_event = function () {
		_proxy.executeCommand("EventName");
	};

	_proxy.addOnLoad(_on_load);

	_proxy.ready = true;

}());