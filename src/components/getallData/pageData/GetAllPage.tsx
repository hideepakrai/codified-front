"use client"

import { useAppDispatch } from '@/redux/hooks';
import { fetchFastApiPagesThunk } from '@/redux/slices/pages/pageThunk';
import { RootState } from '@/redux/store';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const GetAllPage = () => {
    const dispatch = useAppDispatch();
    const { isAllPageFetched } = useSelector((state: RootState) => state.pages);

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