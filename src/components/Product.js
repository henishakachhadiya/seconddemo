 // import logo from './logo.svg';
 import { useEffect, useState } from 'react';
 import axios from 'axios';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { Row,Col } from 'react-bootstrap';


 
 function Product() {
   const [set, setval] = useState([])
   useEffect(() => {
     axios.get('https://dummyjson.com/products')
       .then(function (response) {
         setval(response.data.products)
         console.log(response.data.products);
       })
       .catch(function (error) {
         console.log(error);
       })
 
   }, [])
     const [set1, setval1] = useState([])
      useEffect(() => {
        axios.get('https://dummyjson.com/products')
       .then(function (response) {
         setval(response.data.products)
         console.log(response.data.products);
       })
       .catch(function (error) {
         console.log(error);
       })
      })

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
                   <li><a href="">BEAUTY</a></li>
                   <li><a href="">TOYS</a></li>
                   <li><a href=''>Category</a></li>
                   <li><a href="">GROCERY</a></li>
                 </ul>
               </nav>
             </div>
           </div>
         </div>
 
 </section>
     <div className='detail1'>
         <div className='container'>
           <div className='row g-4'>
             {
               set.map((data) => {
                 return (
                   <div className=' col-4 d-flex p p-0 pe-3 height'>
                     <figcaption>
                       <div className='img'>
                         <img src={data.thumbnail} className='height2 pe-3 p p-0'></img>
                         <div className='set p-4 height3'>
                           <p className='text-black ps-3 size'>ID : {data.id}</p>
                           <h5 className='p-0 size ps-3'>TITLE : {data.title}</h5>
                           <p className=' size ps-3'>DESCRIPTION : {data.description}</p>
                           <h5 className='size ps-3'>PRICE : {data.price}</h5>
                           <p className=' size ps-3 '>DISCOUNTPERCENTAGE : {data.discountPercentage} %</p>
                           <p className='size5 ps-3'>RATING : {data.rating}</p>
                           <h5 className='size ps-3'>STOCK : {data.stock}</h5>
                           <h5 className='size ps-3'>BRAND : {data.brand}</h5>
                           <p className='ps-3 size5'>CATEGORY : {data.category}</p>
                           <p className='size6'><Link to={`/Singal/${data.id}`}>veiw details</Link></p>
                         </div>
                       </div>
                     </figcaption>
                   </div>
                 )
               })
             }
           </div>
         </div>
       </div>
 
       
     </>
   );
 }
 
 export default Product;
 