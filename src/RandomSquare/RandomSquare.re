let containerStyle = ReactDOMRe.Style.make(~display="flex", ~alignItems="center",  ());

[@react.component]
let make = () => {
    let colorArr= [|
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "brown",
        "yellow",
        "lightblue"
      |];

    let style = (~children) => {ReactDOMRe.Style.make(
        ~height="80px",
        ~width= "80px",
        ~marginLeft="5rem",
        ~marginTop= "3rem",
        ~marginBottom= "2rem",
        ~display="flex",
        ~backgroundColor=colorArr[children],
        ~alignItems="center",
        ~justifyContent="center",
        (),
        )};


    <div>
        <div style=containerStyle>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
        </div>
        <div style=containerStyle>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
        </div>
        <div style=containerStyle>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
            <div style = style(~children=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0))></div>
        </div>
    </div>;
}