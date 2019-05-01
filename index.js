class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="bandit" from="kuka" />
                <Hello to="Cher" from="Wakanda" />
                <Hello to="Patito" from="Canarito" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))