"use client"
import { RootState } from '@/lib/store';
import { useAppDispatch } from '@/lib/store/hooks';
import { fetchFastApiPagesThunk } from '@/lib/store/pages/pageThunk';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const GetAllPage = () => {
   const dispatch = useAppDispatch();
    const {isAllPageFetched} = useSelector((state: RootState) => state.app);

    const isApi = useRef<boolean>(false);
    useEffect(() => {
        if (!isAllPageFetched &&
             !isApi.current) {
            isApi.current = true;
            dispatch(fetchFastApiPagesThunk());
        } 
    }, [isAllPageFetched]);
    return (
        null
    )
}

export default GetAllPage