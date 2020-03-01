import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {
    render() {
        return (
            <div class="container ">
            <div class="card card-login mx-auto text-center bg-dark">
                <div class="card-header mx-auto bg-dark m-2" >
                    <span> <img  style={{height:'10rem', width:'10rem'}} src="https://scontent.fbeg5-1.fna.fbcdn.net/v/t31.0-8/p960x960/19693458_1511429775567577_8544958486797371473_o.jpg?_nc_cat=109&_nc_ohc=vJLj8TYNvqgAX_KXzri&_nc_ht=scontent.fbeg5-1.fna&_nc_tp=6&oh=b27e25f4018b4e492d79d4150083747c&oe=5EC126C0" className="w-75"  alt="Logo" /> </span><br/>
                                <span class="logo_title  m-5"> Admin  </span>
               <h1>Foto Hollywood</h1>
        
                </div>
                <div class="card-body">
                    <form action="" method="post">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" name="email" class="form-control" placeholder="Korisnicko ime" />
                        </div>
        
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" name="password" class="form-control" placeholder="Lozinka" />
                        </div>
        
                        <div class="form-group">
                            <input type="submit" name="btn" value="Uloguj se" class="btn btn-outline-danger float-right login_btn" />
                        </div>
        
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Login
