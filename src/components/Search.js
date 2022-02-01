import React, { useEffect, useRef, useState } from 'react'

const Search = ({ data, setShips }) => {
    const [text, setText] = useState()
    const [update, setUpdate] = useState()
    const iElement = useRef()

    const searchFilter = () => data && data.filter(dt=>dt.name.toLowerCase().match(text.toLowerCase()))

    useEffect(()=>{
        setShips(searchFilter())
        // setText('')
    },[update])

    useEffect(()=>{
        iElement.current.focus()
    },[])

    return (
        <div className='search__section'>
            <input type="text" className='search__input' onChange={(e)=>setText(e.target.value)} value={text} placeholder="Search ships" ref={iElement}/>
            <button className='search__button' onClick={()=>setUpdate(!update)}>
                <img className='search__logo' src="https://firebasestorage.googleapis.com/v0/b/mystore-51bd6.appspot.com/o/image%2Fmagnifying-glass.png?alt=media&token=16a5f0d8-ece6-4354-b2d5-09d547cfd012" />
            </button>
        </div>
    )
}

export default Search