const Question = (props) => {
    return(
        <div>
            <p>Hello World</p>
            <p>Hello World {props.number}</p>
        </div>
    );
}

ReactDOM.render(
    <Hello message="I am Julia."/>,
    document.querySelector('#root')
);


