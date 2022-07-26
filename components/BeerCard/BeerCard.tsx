import s from "./BeerCard.module.scss";

import {FC} from 'react';
import React from 'react';
import Link from "next/link";

interface BeerCardProps {
    id: number,
    src: string,
    name: string,
    description: string
}

export const BeerCard: FC<BeerCardProps> = React.memo(({id, src, name, description}) => {

    return (
        <Link href={`/beer/${id}`}>
            <div className={s.card}>
                {src ? <img src={src}/> : <img src="/assets/no-photos.png"/>}
                <h3>{name}</h3>
                <h4>{description.length > 140 ? `${description.substring(0, 140)}...` : description}</h4>
            </div>
        </Link>
    )
});