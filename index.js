const user = "Frank Moon"

function getGreeting(user) {
	if (user) {
		return <h1> Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger.</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);