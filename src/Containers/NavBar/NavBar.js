function NavBar({ logo, user }) {
    return (
        <div className="navbar">
            <div className="navbar__logo">{logo}</div>
            <div className="navbar__user">Logged in as: {user}</div>
        </div>
    );
}

export default NavBar;