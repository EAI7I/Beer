import s from "./Preloader.module.scss";


export const Preloader = () => {
    return (
        <div className={s.box}>
            <div className={s.container}>
                <span className={s.circle}></span>
                <span className={s.circle}></span>
                <span className={s.circle}></span>
                <span className={s.circle}></span>
            </div>
        </div>
    )
};