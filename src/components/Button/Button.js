import './Button.css'

const Button = ({name}) => {
    return (
       <div className="button-cont"> 
        <button className="button-nav"> {name} </button>
       </div>
    )
}

export default Button;