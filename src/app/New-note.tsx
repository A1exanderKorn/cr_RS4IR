'use client';
import { FormEvent } from "react";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useRef } from "react";


const NewNote = () => {
    const { register, handleSubmit } = useForm();
    const noteRef = useRef();
    
    const onSubmit = async (data) => {
        const { note } = data;
        
        await fetch('http://localhost:3000/api/talents_overview', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ note }),
        });
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className="text-black" {...register('note', { required: true })} />
            <button type="submit" className="cursor-pointer mx-3 min-h-150 p-5"> Send </button>
        </form>
    );
};

export default NewNote;
// export default async function NewNote() {
// return(
//     <form onSubmit={handleSubmit}>
//             <input type="text" name="row" className="text-black"/>
//             <input type="submit" value="Send" className="cursor-pointer mx-3 min-h-150 p-5"/>
//         </form>
// )
// }