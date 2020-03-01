import React, { Component } from 'react';
import { InfoConsumer} from '../context';

class Details extends Component {
    render() {
        return (
            <div>
               <InfoConsumer>
                   {data => {
                       const {
                           id,
                           headerTitle,
                           headerSubTitle,
                           headerText,
                           img,
                           title,
                           maps,
                           description
                       } = data.detailInfo;

                       return (
                           // same like div container
                           <React.Fragment> 
                             <div className="container-fluid align-items-center">
                                <h1 className="diplay-1 font-weight-bold"> {headerTitle} </h1>
                                <h4 classNAme="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>
                                {/*Social Icons */}
                                <div className="container mt-5">
                                  <div className="row justify-content-center">
                                      <div className="col-2">
                                         <i class="fab fa-facebook-f"></i> 
                                      </div>
                                      <div className="col-2">
                                         <i class="fab fa-twitter"></i> 
                                      </div>
                                      <div className="col-2">
                                         <i class="fab fa-google-plus-g"></i> 
                                      </div>
                                      <div className="col-2">
                                         <i class="fab fa-reddit"></i> 
                                      </div>
                                      <div className="col-2">
                                         <i class="fab fa-whatsapp"></i> 
                                      </div>
                                      <div className="col-2">
                                         <i class="fab fa-facebook-messenger"></i> 
                                      </div>
                                  </div>  
                                </div>
                             </div>
                             {/* Nav Link */}
                        
                           </React.Fragment>
                       );
                   }}
               </InfoConsumer>
            </div>
        )
    }
}

export default Details;
