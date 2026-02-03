import About from "../Component/About";
import BreadCrum from "../Component/BreadCrum";
import Cta from "../Component/Cta";
import Facility from "../Component/Facility";
import Facts from "../Component/Facts";
import Feature from "../Component/Feature";
import Testimonials from "../Component/Testimonial";


export default function HomePage(){
    return(
        <>
        <BreadCrum/>
        <About/>
        <Feature/>
        <Facts/>
        <Facility/>
      <Testimonials/>
      <Cta/>
        </>
    )
}