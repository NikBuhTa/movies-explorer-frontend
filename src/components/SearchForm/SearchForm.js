import React, { useEffect, useState } from "react";
import path from '../../images/search.svg'
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SearchForm({onSubmit, type = false}){
    const { values, handleChange, resetForm, setValues } = useFormAndValidation({film: ''});
    const [ isShort, setIsShort ] = useState(false);

    const handleClick = () => {
        setIsShort(!isShort)
        onSubmit(values.film, !isShort);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values.film, isShort)
    }

    useEffect(() => {
        resetForm()
        setValues({film: ''})
        if (localStorage.getItem('data') && (!type)) {
            setIsShort(JSON.parse(localStorage.getItem('data')).short)
            setValues({film: JSON.parse(localStorage.getItem('data')).keyWord})
        }
    }, [])

    return(
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__container">
                <label className="search__input">
                    <input className="search__input-item" name="film" type="text" onChange={handleChange} required value={values?.film} placeholder="Фильм" />
                </label>
                <button type="submit" className="search__button link-active"><img src={ path } alt='кнопка поиска'/></button>
            </div>
            <div className="search__choice">
                <label className="search__thumb-label link-active">
                    <input className="search__thumb" type="checkbox" checked={isShort} onChange={handleClick}/>
                    <span className="search__thumb-icon"></span>
                </label>
                <p className="search__short-text">Короткометражки</p>
            </div>
        </form>
    );
};

export default SearchForm;