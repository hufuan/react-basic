const Header = (props) => {
    return (
        <header className="Header">
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default "
}
export default Header
