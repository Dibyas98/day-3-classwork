import React from 'react'
import './grid.css'
import pro from './pro.avif'

export default function GridCard(props) {
  return (
    <div className='grid-card'>
        <div className="grid-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.</p>
        </div>
        <div className="grid-logo">
            <img src={pro} alt="" />
            <div className="grid-name">
                <h6>hello</h6>
                <p>sdo</p>
            </div>
        </div>
      
    </div>
  )
}
