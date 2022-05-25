import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import { CssBaseline } from "@mui/material";

export default function Layout(){
 return (
 <>
 <CssBaseline />
 <Navbar/>
 <Outlet/>
 
 </>
 )
}