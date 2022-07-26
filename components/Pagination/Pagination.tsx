import s from "./Pagination.module.scss";

import React, { FC } from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import {BeerList} from "../../core/interfaces/beerList";

interface PaginationProps {
    onPageChange: (page: number) => void,
    totalCount: number,
    siblingCount: number,
    currentPage: number,
    pageSize: number,
    search: BeerList[],
    notFound: boolean,
    errors: boolean
};

const Pagination: FC<PaginationProps> = ({ onPageChange, totalCount, siblingCount, currentPage, pageSize, search, notFound, errors }) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    return (
        <>
            {!errors && <ul className={s.ul}>
                {!notFound && <li className={s.btn} onClick={() => currentPage === 1 ? null : onPrevious()}>
                    <div className={s.arrow_left}>←</div>
                </li>}
                {!notFound && paginationRange && paginationRange.map((pageNumber: string | number) => {
                    if (search.length !== 0 && search.length < pageSize) {
                        return <></>
                    } else {
                        if (pageNumber === DOTS) {
                            return <li className={s.dots}>&#8230;</li>;
                        }
                        return (
                            <>
                                <li className={currentPage === +pageNumber ? s.active : s.inactive}
                                    onClick={() => onPageChange(+pageNumber)}>
                                    {pageNumber}
                                </li>
                            </>
                        )
                    }
                })}
                {!notFound && <li className={s.btn}
                                  onClick={() => currentPage === Math.ceil(totalCount / pageSize) ? null : onNext()}>
                    <div className={s.arrow_right}>→</div>
                </li>}
            </ul>}
        </>
    );
};

export default Pagination;