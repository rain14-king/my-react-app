'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_math = require("bs-platform/lib/js/js_math.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

var containerStyle = {
  display: "flex",
  alignItems: "center"
};

function RandomSquare(Props) {
  var x = Props.x;
  var y = Props.y;
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
  var style = function (index) {
    return {
            backgroundColor: Caml_array.get(colorArr, index),
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
  var yourArr = $$Array.make_matrix(x, y, 1);
  for(var i = 0; i < x; ++i){
    for(var j = 0; j < y; ++j){
      Caml_array.set(Caml_array.get(yourArr, i), j, Js_math.floor(Math.random() * 9.0 + 0.0));
    }
  }
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  var count = match[0];
  return React.createElement("div", undefined, Belt_Array.map(yourArr, (function (row) {
                    return React.createElement("div", {
                                style: containerStyle
                              }, Belt_Array.map(row, (function (col) {
                                      return React.createElement("div", {
                                                  style: style(col)
                                                });
                                    })));
                  })), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return count + 1 | 0;
                                  }));
                    })
                }, "Re-generate"));
}

var make = RandomSquare;

exports.containerStyle = containerStyle;
exports.make = make;
/* react Not a pure module */
