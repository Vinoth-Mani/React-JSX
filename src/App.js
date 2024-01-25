function App() {

    let message ='Hello World';
    if (Math.random() > 0.5) {
        message = 'Hello Universe';
    }
    return (
        <div>
            <h1>{message}</h1>
            <input placeholder='hi vinoth' />
        </div>
    );
}

export default App;