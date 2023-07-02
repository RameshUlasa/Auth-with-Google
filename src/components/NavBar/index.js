import './index.css'

const NavBar = () => {
  const t = null

  return (
    <nav className="navbar">
      <div className="head-with-elements-container">
        <div>
          <h1 className="nav-head">Board.</h1>
          <ul className="list-container">
            <li className="nav-item active">
              <img
                className="nav-icons"
                alt="dashboard"
                src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675720/dashboard_icon_kazq1l.png"
              />
              Dashboard
            </li>
            <li className="nav-item">
              <img
                className="nav-icons"
                alt="dashboard"
                src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675785/transaction_icon_h4ef7t.png"
              />
              Transactions
            </li>
            <li className="nav-item">
              <img
                className="nav-icons"
                alt="dashboard"
                src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675843/schedule_icon_xeyi0o.png"
              />
              Schedules
            </li>
            <li className="nav-item">
              <img
                className="nav-icons"
                alt="dashboard"
                src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675794/user_icon_pxlcly.png"
              />
              Users
            </li>
            <li className="nav-item">
              <img
                className="nav-icons"
                alt="dashboard"
                src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675798/setting_icon_wroi5q.png"
              />
              Settings
            </li>
          </ul>
        </div>
        <ul className="list-container">
          <li className="nav-item">Help</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
