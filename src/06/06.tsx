import React, {ChangeEvent, ChangeEventHandler, MouseEvent} from "react";

export function User () {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('User deleted by ' + event.currentTarget.name + '!')
    }
    const addUser = (event : MouseEvent<HTMLButtonElement>) => {
        alert('User added by ' + event.currentTarget.name + '!')
    }
    const change = () => {
        alert('Textarea changed!')
    }
    const blur = () => {
        alert('Textarea blur!')
    }
    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        alert('Input changed - ' + event.currentTarget.value)
    }


    return <>
        <div>Olya</div>

        <button name='delete' onClick={deleteUser}>Delete</button>
        <button name='add' onClick={addUser}>Add</button>

        <div>
            <textarea onChange={change} onBlur={blur}/>
        </div>

        <input onChange={inputChanged} type={"number"}/>
    </>
}