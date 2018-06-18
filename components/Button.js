import "../static/button.sass";
import Link from 'next/link'

const Button = ({btnText, btnClass, btnIcon, onClick}) => (
        <button onClick={onClick} className={btnClass}>
            {btnText}
            <span className={(`${btnIcon} btn-icon`)}></span>
        </button>
)

export default Button;