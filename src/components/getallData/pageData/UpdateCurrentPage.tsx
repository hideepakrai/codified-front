"use client"

import { useAppDispatch } from "@/lib/store/hooks"
import { fetchFastApiPagesThunk } from "@/lib/store/pages/pageThunk";

import { useEffect, useEffectEvent } from "react"

import { useSelector } from "react-redux";

import { usePathname } from "next/navigation";
import { setCurrentPages } from "@/lib/store/pages/pagesSlice";
import { RootState } from "@/lib/store";
import GetAllPage from "./GetAllPage";

const UpdateCurrentPage = () => {

    const {allPages}=useSelector((state:RootState)=>state.app)
    const pathname=usePathname();
    const segments = pathname.split('/').filter(Boolean);
    const slug = segments[1] || 'home';
    const dispatch=useAppDispatch()
   useEffect(()=>{
if(allPages.length > 0){
  const data=allPages.find((page:any)=>page.slug===slug)
  if(data){ 
    dispatch(setCurrentPages(data))
    return;
  }

  const homePage = allPages.find((page: any) => page.slug === 'home') || null;
  dispatch(setCurrentPages(homePage));
}
   },[allPages,slug, pathname])

    return (
        <GetAllPage
/>
    )
}
export default UpdateCurrentPage
