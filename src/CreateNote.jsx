import React, { useState } from 'react'


const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setnote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {

        const { value, name } = event.target;

        setnote((old_Data) => {
            return {
                ...old_Data,

                [name]: value,
            };
        });
    }

    const add_Event = (event) => {
        props.passNote(note);
        setnote({
            title: "",
            content: "",
        });
        event.preventDefault();
    };

    const expand_On = () => {
        setExpand(true);
    };

    const expand_Off = () => {
        setExpand(false);
    };

    return (
        <>
            <div className='main_note' onDoubleClick={expand_Off}>
                <form>
                    {
                        expand ?
                            <input type="text"
                                value={note.title}
                                name="title"
                                onChange={InputEvent}
                                placeholder='Title'
                                autoComplete='off'
                            /> : null}

                    <textarea
                        cols="30"
                        rows="10"
                        value={note.content}
                        name="content"
                        onChange={InputEvent}
                        placeholder='Write a note....'
                        onClick={expand_On}>
                    </textarea>

                    {expand ?
                        <button className='plus_sign' onClick={add_Event}>
                            ➕
                        </button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote
