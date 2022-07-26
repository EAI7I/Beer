import s from "./Header.module.scss";

import {FC} from 'react';
import {Input} from '../Input/Input';
import Link from "next/link";

interface HeaderProps {
    type: string,
    showResetBtn?: boolean,
    onResetSearch?: () => void,
}

export const Header: FC<HeaderProps> = ({type, showResetBtn,onResetSearch}) => {
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <Link href="/"><h1>WikiBeer</h1></Link>
                <div className={s.search}>
                    {showResetBtn && <button onClick={() => onResetSearch && onResetSearch()}>Reset search</button>}
                    {type === "list" ? <Input/> : <h4>And you have good taste, Bro 😎</h4>}
                </div>
            </div>
        </div>
    )
};
