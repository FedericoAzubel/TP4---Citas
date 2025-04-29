import React from 'react'

export const Mensaje = ({ msg }) => {
    return (
        <div className="span_container">
            <span className={msg.type}>{msg.text}</span>
        </div>
    )
}
