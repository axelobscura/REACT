function getMood() {
    const moods = ['Feliz', 'Triste', 'Decepcionado', 'Deprimido'];
    return moods[Math.floor(Math.random() * moods.length)];
}
function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class Hello extends React.Component {
    render() {
        const num = getNum();
        const props = this.props;
        const bangs = "!".repeat(this.props.bangs);
        console.log(this.props);
        return (
            <div>
                <p>Hi {props.to} from {props.from}{bangs}</p>
                <img src={this.props.img} />
                <h1>My Ncurrent mood is: {getMood()}</h1>
                <h2>Your number is: {num}</h2>
                <h3>{num === 7 ? "Lucky!!!" : "Unlucky"}</h3>
            </div>
        )
    }
}
