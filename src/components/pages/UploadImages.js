import React, { Component } from 'react';
import './UploadImages.css';
import AdditionalUpload from './AdditionalUpload';


class UploadImages extends Component {
    render() {
        return (
            <div className="container py-5">

                {/* For demo purpose  */}
                <header className="text-dark text-center">
                    <h1 className="display-4">ONLINE UČITAVANJE SLIKA</h1>
                    <p className="lead mb-0">U formi ispod odaberite slike koje želite da vam budu odrađene</p>
                    <p className="mb-5 font-weight-light">Foto Hollywood
            <a href="https://bootstrapious.com" class="text-dark">
                            
                        </a>
                    </p>
                    <img src="/images/Nikon-D5600.jpg" alt="" width="150" className="mb-4" />
                </header>


                <div className="row py-4">
                    <div className="col-lg-6 mx-auto">


                    <AdditionalUpload />
                    </div>
                </div>
            </div>
        )
    }


    

}
export default UploadImages;
