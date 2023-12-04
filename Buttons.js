function Button({ variant = 'primary', text }) {
    return (
        <button type="button" className={`btn btn-${variant}`}>{text}</button>
    )
}

export default Button;