const render = () => {
    const element = `<div>
    <h2>DOM input is place here:</h2>
    <input type="text" placeholder="Enter....." >
    DATE:${new Date().toLocaleTimeString()}
    </div>`

    document.getElementById("app").innerHTML = element;

    const element2 = React.createElement('div', {},
        React.createElement('h2', { className: "label" }, "Virtual DOM related:"),
        React.createElement('input', { type: 'text', placeholder: "Enter.." },),
        React.createElement("div", null, new Date().toLocaleTimeString())
    )

    ReactDOM.render(element2, document.getElementById('app1'));
}

setInterval(render, 1000);