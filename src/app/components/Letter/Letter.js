"use client"
import { useState } from "react"

export default function Letter({letter, key, answer}) {
    const [letterState, setLetterState] = useState('');
    
    return (
        <input
            class="bg-gray-50 border border-gray-300 
            text-gray-900 text-center text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-10 p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="P"
            maxLength={1}
            value={letterState} 
            onChange={e => setLetterState((e.target.value).toUpperCase())}
        />
    )
}