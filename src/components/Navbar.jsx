import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


const Navbar = () => {
  return (
    <div>
      
           {/* <Link to='/'>Home</Link>
           <Link to={'/abc'}>Map1</Link>
           <Link to={'/mapping1'}>Map2</Link>
           <Link to={'useeffect'}>UseEffect</Link> */}
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to='/' style={{textDecoration:'none'}}>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to={'/abc'} style={{textDecoration:'none'}}>Map1</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  <Link to={'/mapping1'} style={{textDecoration:'none'}}>Map2</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">   <Link to={'useeffect'} style={{textDecoration:'none'}}>UseEffect</Link></a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar