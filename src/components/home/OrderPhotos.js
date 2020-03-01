import React, { Component } from 'react';

export class OrderPhotos extends Component {
    render() {
        return (
            <div className="card text-center" style={{ background: '#343a40', color: 'white' }}>

                <div className="card-body m-3" >
                    <h5 className="card-title m-4">Poručite fotografije online</h5>
                    <p className="card-text m-5">Foto studio Hollywood vam pruža mogućnost izrade vaših digitalnih fotografija putem
                               interneta.  Poručite fotografije na našem sajtu, pritiskom na link ispod.<br /><br />

                          Kao što ćete videti na linku, moguća je izrada fotografija svih formata i veličina. Detalje oko cena pojedinih fotografija<br />
                          možete pogledati u našoj sekciji "Proizvodi". Sve fotografije koje odaberete biće Vam dostavljeni u najkraćem mogućem roku <br />
                    </p>

                    <button type="button" class="btn btn-primary btn-lg">Poruči</button>

                </div>

            </div>
        )
    }
}

export default OrderPhotos;
