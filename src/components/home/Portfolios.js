import React from 'react';
import weddings from '../../portfolio-pictures/foto-hollywood-weddings.jpg';
import birthdays from '../../portfolio-pictures/foto-hollywood-birthdays.jpg';
import drons from '../../portfolio-pictures/foto-hollywood-drons.jpg';

export default function Portfolios() {
    return (
        <div className="container-fluid text-center bg-grey">
          <h2>Portfolio</h2><br />
          <h4>Usluge koje vršimo</h4>
          <div className="row text-center">
            <div className="col-sm-4">
              <div className="thumbnail">
                <img src={weddings} alt="Wedings" width="400" height="300" />
                <p><strong>Venčanja</strong></p>
                <p>Profesionalna izrada  fotografija i snimaka venčanja</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail">
                <img src={birthdays} alt="birthdays" width="400" height="300" />
                <p><strong>Rođendani</strong></p>
                <p>Profesionalna izrada  fotografija i snimaka rođendana</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail">
                <img src={drons} alt="Drons" width="400" height="300" />
                <p><strong>Snimanje iz vazduha</strong></p>
                <p>Profesionalna izrada slika i snimaka koristeći dron</p>
              </div>
            </div>
          </div>
        </div>
    );
}
