import React from 'react';
import styled from 'styled-components';


function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4> Kontaktiraj nas</h4>
                            <ul className="list-unstyled">
                                <li><i class="fas fa-mobile"></i> &nbsp;  Nedeljko : +381655198888</li>
                                <li><i class="fas fa-mobile"></i> &nbsp;  Vuk : +381655198887</li>
                                <li><i class="fas fa-phone"></i>  Užice radnja : 031519888</li>
                                <li><i class="fas fa-phone"></i>  Zlatibor radnja : 031519888</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4> O Nama</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Nedeljko Papić</a></li>
                                <li><a href="/">Vuk Papić</a></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4> Poslovi</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Svadbe</a></li>
                                <li><a href="/">Rođendani</a></li>
                                <li><a href="/">Mature</a></li>
                                <li><a href="/">Spotovi</a></li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4> Ostalo</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Poruči sliku</a></li>
                                <li><a href="/">Kupi proizvod</a></li>
                                <li><a href="/">Ostavi komentar</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Foto Hollywood App - All Rights Reserved
                   </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}

`