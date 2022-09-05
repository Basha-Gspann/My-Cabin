import React from 'react'
import Products from './Products'
// import abc from '../section/two.jpg'
//  import xyz from './tree.webp'
//  import mno from './nat.webp'

function Home() {
  return (
    <>
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://stylesatlife.com/wp-content/uploads/2020/01/office-cabin-interior-design.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
   
    <h4>"GSPANN offers an environment where you are constantly encouraged to sharpen your abilities and shape your growth path."</h4>
  </div>
          </div>
          <div className="carousel-item">
            <img src="https://thearchitecturedesigns.com/wp-content/uploads/2019/12/office-cabin-1.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
  
    <h4>"This is a background illustration of a personal office cabin for an executive. The background has illustrations of a big shelf with files and books, a table with laptop and a high chair." </h4>
  </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/1e/8c/95/1e8c955685931368e6ad6bd042d4df84.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
  
    <h4>"Our work environment must be conducive to all employees. It is a place where several people work together under one roof with a joint plan."</h4>
  </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <Products/>
    </>
  )
}

export default Home


