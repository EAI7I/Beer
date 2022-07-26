import s from "./BeerPost.module.scss";
import React, {FC} from "react";

interface BeerPostProps {
    image_url: string,
    name: string,
    tagline: string,
    abv: number,
    description: string,
    food_pairing: string[],
}


export const BeerPost: FC<BeerPostProps> = ({image_url, name, tagline, abv, description, food_pairing}) => {
    return (
        <div className={s.short_info}>
            {image_url ? <img src={image_url}/> : <img src="/beer/assets/no-photos.png"/>}
            <div className={s.text}>
                <h2 className={s.name}>{name}</h2>
                <h5 className={s.tagline}>{tagline}</h5>
                <h3 className={s.abv}>Abv: {abv}</h3>
                <h3 className={s.description}>{description}</h3>
                <h3 className={s.food}>Food pairing:</h3>
                <ul>
                    {food_pairing.map(food => (
                        <li>{food}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};