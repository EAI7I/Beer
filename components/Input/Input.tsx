import s from "./Input.module.scss";

import {FC, useContext} from 'react';
import {Context} from '../../hooks/context';


export const Input: FC = () => {

    const {onSearch, inputRef} = useContext(Context);

    return (
        <div>
            <input className={s.input} id="search" type="text" placeholder="I'm searching (◕‿◕)" onKeyPress={onSearch}
                   ref={inputRef}/>
            <label className={s.label} htmlFor="search">Press 'Enter' to search</label>
        </div>
    )
};