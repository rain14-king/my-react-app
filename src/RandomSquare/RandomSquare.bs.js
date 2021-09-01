'use strict';

var React = require("react");
var Js_math = require("bs-platform/lib/js/js_math.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

var containerStyle = {
  display: "flex",
  alignItems: "center"
};

function RandomSquare(Props) {
  var colorArr = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "brown",
    "yellow",
    "lightblue"
  ];
  var style = function (children) {
    return {
            backgroundColor: Caml_array.get(colorArr, children),
            display: "flex",
            height: "80px",
            marginTop: "3rem",
            marginBottom: "2rem",
            marginLeft: "5rem",
            width: "80px",
            alignItems: "center",
            justifyContent: "center"
          };
  };
  return React.createElement("div", undefined, React.createElement("div", {
                  style: containerStyle
                }, React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    }), React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    }), React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    })), React.createElement("div", {
                  style: containerStyle
                }, React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    }), React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    }), React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    })), React.createElement("div", {
                  style: containerStyle
                }, React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    }), React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    }), React.createElement("div", {
                      style: style(Js_math.floor(Math.random() * 9.0 + 0.0))
                    })));
}

var make = RandomSquare;

exports.containerStyle = containerStyle;
exports.make = make;
/* react Not a pure module */
