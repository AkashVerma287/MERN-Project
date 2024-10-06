import Alice from "react-alice-carousel"
import 'react-alice-carousel/lib/alice-carousel.css';
export default function Testimonial() {

       
const ab = (e) => e.preventDefault();
const abc = {
  0: {items: 1},
  50: {items:2},
  100: {items:3},
  150: {items:4},
  200: {items:1,}
}
const itemss = [
<div className="col-lg-6">

  <div  onDragStart={ab} role="presentation" className="">
  <div>
  <h6 className="m-0 mb-2 text-danger">TESTIMONIALS</h6>
  <h2 className="m-0 mb-3">What Our Client Says</h2>
  <p className="m-0 mb-3">
    "Make a type specimen book. It has survived not only five
    centurie, but also the leap into electronic typesetting,
    remaining esmake a type specimen"
  </p>
</div>
<div>
  <h3 className="m-0 mb-2">Jenifar Jenny</h3>
  <h6 className="m-0">CEO, PsdBoss</h6>
</div>
  </div>
 </div>,
 <div className="col-lg-6">

 <div  onDragStart={ab} role="presentation">
 <div>
 <h6 className="m-0 mb-2 text-danger">TESTIMONIALS</h6>
 <h2 className="m-0 mb-3">What Our Client Says</h2>
 <p className="m-0 mb-3">
   "Make a type specimen book. It has survived not only five
   centurie, but also the leap into electronic typesetting,
   remaining esmake a type specimen"
 </p>
</div>
<div>
 <h3 className="m-0 mb-2">Jenifar Jenny</h3>
 <h6 className="m-0">CEO, PsdBoss</h6>
</div>
 </div>
</div>
]
return(

     <>
           <Alice  responsive={abc} mouseTracking items={itemss} />
     
     </>
)
     
}