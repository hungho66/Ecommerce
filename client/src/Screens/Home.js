import React from 'react'

function Home() {
    return (
    <div className="banner">
        <div className="container-fuild">
          <div className="banner-info animated wow zoomIn" data-wow-delay=".5s">
            <h3>Online Shopping</h3>
            <h4>Up to <span>50% <i>Off/-</i></span></h4>
            <div className="wmuSlider example1">
              <div className="wmuSliderWrapper">
                <article style={{position: 'absolute', width: '100%', opacity: 0}}> 
                  <div className="banner-wrap">
                    <div className="banner-info1">
                      <p>T-Shirts + Formal Pants + Jewellery + Cosmetics</p>
                    </div>
                  </div>
                </article>
                <article style={{position: 'absolute', width: '100%', opacity: 0}}> 
                  <div className="banner-wrap">
                    <div className="banner-info1">
                      <p>Toys + Furniture + Lighting + Watches</p>
                    </div>
                  </div>
                </article>
                <article style={{position: 'absolute', width: '100%', opacity: 0}}> 
                  <div className="banner-wrap">
                    <div className="banner-info1">
                      <p>Tops + Books &amp; Media + Sports</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Home
