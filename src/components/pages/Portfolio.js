import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Portfolio.css";



const smallImages = [
  "/gallery/wedding/BR0_0012.jpg",
  "/gallery/wedding/BR0_0017.jpg",
  "/gallery/wedding/BR0_0067.jpg",
  "/gallery/wedding/BR0_0772.jpg",
  "/gallery/wedding/BR0_0740.jpg",
  "/gallery/wedding/BR0_0292 copy.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(148)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.jpg"
];

const images = [
    "/gallery/wedding/BR0_0012.jpg",
  "/gallery/wedding/BR0_0017.jpg",
  "/gallery/wedding/BR0_0067.jpg",
  "/gallery/wedding/BR0_0772.jpg",
  "/gallery/wedding/BR0_0740.jpg",
  "/gallery/wedding/BR0_0292 copy.jpg",
    "https://mdbootstrap.com/img/Others/documentation/img%20(148)-mini.jpg",
    "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.jpg",
    "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.jpg"
  ];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };

  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
       <h1 class="font-weight-light text-center text-lg-left m-4 mb-0">Foto Hollywood Galerija</h1>
       
        <div className="mdb-lightbox m-4">
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>

    );
  }
}

export default Portfolio;