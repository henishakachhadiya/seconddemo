import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaStar } from "react-icons/fa" 
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Singal() {
  const [set, setval] = useState([]);
  const [status,setstatus]=useState(false);
  const[img,setimg] = useState([]);
  const[mainimg,setmainimg] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get('https://dummyjson.com/products/'+id)
      .then(function (response) {
        console.log(response);
        setval(response.data);
        setimg(response.data.images)
        // console.log(response.data.product);
        setstatus(true);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])

  if (status){
     return (
   <>
   <div>
          <div className='main-head'>
               <div className='container'>
                  <div className='head-wrap'>
                      <div className='wrap'></div>
                     <div className='wrap1' style={{display:'flex'}}>
                        <div className='wrap2'>
                           <div className='logo1'>
                              <a><img src={require('../img/i1.png')} className='img1'></img></a>
                              <a className='logo2'>Explore<span className='logo3'>Plus</span> 
                              <img src={require('../img/i2.png')} className='img2'></img>       
                            </a>
                           </div>
                        </div>
                        <div className='sec-1' style={{display:'flex'}}>
                            <form className='text' action='search'>
                              <div className='col-12-12 text1'>
                                <div className='search'>
                                <p className='icon'><FaSearch/></p>
                                  <input type='text' placeholder='Search product,brand and more' className='search2'></input>  
                                </div>
                              </div>
                            </form>
                        </div>
                     </div>
                     <div className='button'>
                         <div className='btn'>
                            <a className='btn1'>login</a>                       
                        </div>
                     </div>
                     
                     <div className='ex-text'>
                        <div className='text-wrap'>
                           <h2 className='text2'>Become a Seller</h2>
                        </div>
                     </div>
                     <div className='ex-icon'>
                        <div className='text-icon'>
                           <p className='icon2'><FaShoppingCart/></p>
                           {/* <h2 className='text3'>cart</h2> */}
                        </div>
                     </div>
                </div>
            </div>
          </div>
       </div>
     
 <section>
   <div className="header">
           <div className="container">
             <div className="flex">
               <nav className="flex">
                 <ul className="main_menu">
                   <li><a href="">HOME</a></li>
                   <li><a href="">MOBILE</a></li>
                   <li><a href="">FASHION</a></li>
                   <li><a href="">TRAVEL</a></li>
                   <li><a href="">BEAUTY</a></li>
                   <li><a href="">TOYS</a></li>
                   <li><a href="">GROCERY</a></li>
                 </ul>
               </nav>
             </div>
           </div>
         </div>
 
 </section>


<section>
  <container>
    <div className='ps-5'>
               <Row className='pt-5'>
                  <Col className='col-1'>
                              {
                                img.map((image) => {
                                  return (
                                    <img src={image} className='w-100 pb-2' onClick={()=>setmainimg(image)}></img>
                                  )
                                  
                                })
                              }                        
                   </Col>
                  <Col className='p-5'>
                     <img src={mainimg} className='height2 pe-3 p p-0'></img>
                  </Col>                 
                 <Col className='col-5 pt-3 ps-5'>
                  <h2>{set.title}<span style={{ color: '#f43397' }}>({set.brand})</span></h2>
                  <p className='fs-5'>{set.description}</p>
                  <div className='d-flex'>

                    <p className='fs-5 pt-1'>{set.rating}</p>
                    <div className='ps-1 pe-3 mt-0 fs-5'><FaStar className="clr"></FaStar></div>
                    <h5 className='pt-1'>rating</h5>
                  </div>
                  <hr></hr>
                  <h4>Rs.{set.price}<span style={{ color: 'blue' }} className='ps-4'>({set.discountPercentage}%  OFF)</span></h4>
                  <h6 style={{ color: '#f43397' }} >inclusive of all taxes</h6>
                  <h4>{set.stock}<span className='fs-5 ps-2' style={{ color: 'blue' }}>Left</span></h4>
                  <hr></hr>
                  <div className='row'>
                    <Col className='col-7 py-2 ms-4' style={{ backgroundColor: 'green', color: '#000' }}>
                      <input type='button' value="ADD TO BAG" className='fs-5 ip fw-semibold text-white'></input>
                    </Col>           
                    <Col className='col-1   me-5 py-2 '>
                      <input type='button' value="WISHLIST" className='border fs-5 ie fw-semibold'></input>
                    </Col>
                  </div>
            </Col>
            </Row>
                
        
    </div>
  </container>
</section>


</>
);
    }
    else{
      // return(
      //   // <>Data</>
      // )
    }
}

export default Singal;
