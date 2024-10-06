import Alice from "react-alice-carousel"
import 'react-alice-carousel/lib/alice-carousel.css';
export default function Brands() {
const ab = (e) => e.preventDefault();
const abc = {
  0: {items: 1},
  50: {items:2},
  100: {items:3},
  150: {items:4},
  200: {items:6},
  

}

  const itemss = [
     <div className="row m-0">
     <div className="col-lg-2 mb-lg-0 mb-5">
          <div className="text-center">
               <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/brand6.png" onDragStart={ab} role="presentation" alt="" />
          </div>
     </div>
     <div className="col-lg-2 mb-lg-0 mb-5">
          <div className="text-center">
               <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/brand1.png" className="img-fluid" onDragStart={ab} role="presentation" alt="" />
          </div>
     </div>
     <div className="col-lg-2 mb-lg-0 mb-5">
          <div className="text-center">
               <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/brand2.png" className="img-fluid" onDragStart={ab} role="presentation" alt="" />
          </div>
     </div>
     <div className="col-lg-2 mb-lg-0 mb-5">
          <div className="text-center">
               <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/brand3.png" className="img-fluid" onDragStart={ab} role="presentation" alt="" />
          </div>
     </div>
     <div className="col-lg-2 mb-lg-0 mb-5">
          <div className="text-center">
               <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/brand4.png" className="img-fluid" onDragStart={ab} role="presentation" alt="" />
          </div>
     </div>,
     {/* <div className="col-lg-2">
          <div>
               <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/brand5.png" className="img-fluid" onDragStart={ab} role="presentation" alt="" />
          </div>
     </div> */}
     
</div>

  ]
  
 

       



return(

     <>
              <Alice  responsive={abc} mouseTracking items={itemss} />
       
     
     </>
)
     
}