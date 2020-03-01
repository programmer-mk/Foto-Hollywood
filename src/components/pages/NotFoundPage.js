import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class NotFoundPage extends Component {
  render() {
    return (
      <ComponentNotFound className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Ops!</h1>
              <div style={{height: '1.5rem'}}> </div>
              <h2>Greška 404! Stranica nije pronađena.</h2>
              <div style={{height: '1rem'}}> </div>
              <div className="error-details">
               Izvinite, greška se pojavila. Zatražena stranica nije pronađena!
              </div>
              <div style={{height: '1rem'}}> </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-home" />
                  &nbsp;Povratak na početnu
                </Link>
                <Link className="btn btn-outline-secondary btn-lg">
                  <i className="fas fa-envelope" />
                  &nbsp;Podrška
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{height: '20rem'}}>

        </div>
      </ComponentNotFound>
     
    );
  }
}

export default NotFoundPage;

const ComponentNotFound = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }
  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .btn {
    margin-right: 10px;
  }
`;