import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
export const Grandchild = () => {
    return (
        <div>
            <h3>Grandchild Component</h3>
            {/* <p>Theme is {theme}</p> */}
            <button>Toggle Theme</button>
        </div>
    )
}