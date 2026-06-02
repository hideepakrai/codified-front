"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { setCurrentPages, setEditMode } from "@/redux/slices/pages/pagesSlice";
import GetAllPage from "./GetAllPage";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import dynamic from 'next/dynamic';

const EditModeToggle = dynamic(() => import('@/components/layout/EditModeToggle/EditModeToggle'), { ssr: false });

const UpdateCurrentPage = () => {

  const {authUser,isAuthenticated}= useSelector((state:RootState)=>state.auth)

  const { allPages } = useSelector((state: RootState) => state.pages)
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const slug = segments[1] || "home";

  const dispatch = useAppDispatch()
  useEffect(() => {

    if (allPages && 
      allPages?.length > 0 
      && slug) {
      const data = allPages.find((page: any) => page.slug === slug)
      if (data) {
        dispatch(setCurrentPages(data))
        return;
      } 
      
    }
  }, [allPages, slug])

  useEffect(() => {
  
    if(isAuthenticated && authUser && authUser?.isTenantOwner ){
        dispatch(setEditMode(true))
    }else{
      dispatch(setEditMode(false))
    }
  }, [authUser,isAuthenticated]);

  return (
    <>
      <GetAllPage />
      <EditModeToggle />
    </>
  )
}
export default UpdateCurrentPage
