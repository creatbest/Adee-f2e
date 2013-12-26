requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "jquery.switchable": ["jquery"]
    }
});

requirejs(["app/main"]);