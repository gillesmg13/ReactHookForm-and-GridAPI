import React from 'react'
import '../styles/Headers.css'

function Headers ({renderCount, description}) {
    return (
        <div className='banner'>
            <span className='compteur'>Render Count: {renderCount}</span>
            <div className="demoTitle">React Hook Form</div>
            <span className='desc'>{description}</span>
        </div>
    )
}

export default Headers