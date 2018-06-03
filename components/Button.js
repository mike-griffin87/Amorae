import "../static/button.sass";
import Link from 'next/link'

const Button = ({btnText, btnClass, btnIcon, link}) => (
    <Link href={link}>
        <button className={btnClass}>
            {btnText}
            <span className={(`${btnIcon} btn-icon`)}></span>
        </button>
    </Link>
)

export default Button;