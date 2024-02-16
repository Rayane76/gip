import Navbar from "./components/navbar"
import Landing from "./components/landing"
import HomeCategories from "./components/homeCategories"
import Footer from "./components/Footer"




async function getCategories(){
  const res = await import("./api/getAllCategories/route");

  return await (await res.GET()).json()

}


export default async function Home() {

  const categories = await getCategories();


  return (
    <>
        <>
      <Navbar />
      <Landing />
      <HomeCategories categories={categories.data}/>
      <Footer />
      </>
    </>
  )
}
