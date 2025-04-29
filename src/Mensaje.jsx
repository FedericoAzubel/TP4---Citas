import React from 'react'

const Mensaje = ({ msg }) => {
    return (
        <div className="span_container">
            <span className={msg.type}>{msg.text}</span>
        </div>
    )
}

export default Mensaje