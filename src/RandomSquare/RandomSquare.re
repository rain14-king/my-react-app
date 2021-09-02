let containerStyle = ReactDOMRe.Style.make(~display="flex", ~alignItems="center",  ());

[@react.component]
let make = (~x,~y) => {
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

    let style = (~index) => {ReactDOMRe.Style.make(
        ~height="80px",
        ~width= "80px",
        ~marginLeft="5rem",
        ~marginTop= "3rem",
        ~marginBottom= "2rem",
        ~display="flex",
        ~backgroundColor=colorArr[index],
        ~alignItems="center",
        ~justifyContent="center",
        (),
        )};

    let yourArr = Array.make_matrix(x,y,1);
    for(i in 0 to x-1){
        for(j in 0 to y-1){
            yourArr[i][j]=Js.Math.floor(Js.Math.random() *. 9.0 +. 0.0);
        }
    }

    let (count, setCount) = React.useState(() => 0);


    <div>
        (
          yourArr
          |. Belt.Array.map(row => <div style=containerStyle>{ReasonReact.array((row->Belt.Array.map(col => <div style = style(~index=col)></div>)))}</div>)
          |. ReasonReact.array
        )
        <button onClick={_ => setCount(_ => count + 1)}>{React.string("Re-generate")}</button>
    </div>;
}