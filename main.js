
/** Below are code tha showhow react was supposed to be written without jsx, but it is very tidous
  job, that is why react brough JSX(javascript xML it help us to write html in React)
 * ***/
// const element = React.createElement('div', {}, 'Hello World, How is it going',
//     React.createElement("h1", { className: 'header' }, "I am Eric Nkaka"));

const channelName = "Youtube channel";

const getChannelName = () => {
    return channelName === "Youtube channel" ? "Youtube channel" : "Channel not found!"
}

const element = <div>
    <h1>Hello World - {getChannelName()}</h1>
    <h2>My name is Eric Nkaka</h2>
</div>

//the JSX code above is compiled into React.createElement(.....) by babel compile


ReactDOM.render(element, document.getElementById("app"));

console.log(element);