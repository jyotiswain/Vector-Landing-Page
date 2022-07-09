import {icons} from "../styles/global";
import {icon, links, logo, compname, navbar, signs} from "../styles/homeStyle";


const Navbar = () => {
  return (
    <nav style={navbar}>
      <div style = {logo}>
        <h1 style = {compname}>MR</h1>
      </div>

      <div style={links}>
        <span className="link">Vectors</span>
        <span className="link">Photos</span>
        <span className="link">PSD</span>
        <span className="link">Video</span>
        <span className="link">More</span>
      </div>

      <div style={signs}>
        <span style={icon}>{icons.mail}</span>
        <span style={icon}>{icons.facebook}</span>
      </div>
    </nav>
  )
}

export default Navbar