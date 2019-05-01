class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="bandit"
                    from="kuka"
                    num={3}
                    data={[1, 2, 3, 4, 5]}
                    isFunny={true}
                    bangs={4}
                    img={"https://images.unsplash.com/photo-1556442717-2eb4645c8875?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Hello
                    to="Cher"
                    from="Wakanda"
                    num={15}
                    data={[1, 2, 3, 4, 5]}
                    isFunny={true}
                    bangs={4}
                    img={"https://images.unsplash.com/photo-1556442717-2eb4645c8875?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Hello
                    to="Patito"
                    from="Canarito"
                    num={25}
                    data={[1, 2, 3, 4, 5]}
                    isFunny={false}
                    bangs={4}
                    img={"https://images.unsplash.com/photo-1556442717-2eb4645c8875?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Machine
                    s1={1}
                    s2={1}
                    s3={1}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))