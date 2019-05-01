function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
function prize(a, b, c) {
    if (a == b == c) {
        return "Thats it baby!!!"
    } else {
        return "No luck bondy..."
    }
}
class Machine extends React.Component {
    static defaultProps = {
        from: "Joel",
    }
    render() {
        const { s1, s2, s3 } = this.props;
        var s1a = s1 * getNum();
        var s2a = s2 * getNum();
        var s3a = s3 * getNum();
        const messages = [
            {
                id: 1,
                text: "Greetings"
            },
            {
                id: 2,
                text: "Aleluya"
            }
        ];
        const colors = { fontSize: '20px', backgroundColor: 'purple' };
        return (
            <div className="Machine">
                <h1>Machine component</h1>
                <p style={colors}>{s1a}</p>
                <p>{s2a}</p>
                <p>{s3a}</p>
                <h2>{prize(s1a, s2a, s3a)}</h2>
                <ul>
                    {messages.map(m => <li>{m.text}</li>)}
                </ul>
            </div>
        )
    }
}