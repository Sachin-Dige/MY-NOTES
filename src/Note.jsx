import React from 'react'

const Note = (props) => {
    const delete_Icon = () => {
        props.delete_Item(props.id)
    }
return (
    <>
        <div className='note'>
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>

            <button className='btn' onClick={delete_Icon}>❌</button>
        </div>
    </>
)
}

export default Note
