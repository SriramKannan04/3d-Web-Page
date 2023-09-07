import './main.css';
import './parallax.js';

function Main() {
  return (
    <main>
      {/* <div className="vin"></div> */}
      <img src="./img/background.png" className="parallax bg_img" alt="Background" data-speedx="0.3" data-speedy="0.3" />
      <img src="./img/fog_7.png" className="parallax fog_7" alt="Fog 7" data-speedx="0.29" />
      <img src="./img/mountain_10.png" className="parallax mountain_10" alt="Mountain 10" data-speedx="0.28" data-speedy="0.28" />
      <img src="./img/fog_6.png" className="parallax fog_6" alt="Fog 6" data-speedx="0.27" />
      <img src="./img/mountain_9.png" className="parallax mountain_9" alt="Mountain 9" data-speedx="0.26" data-speedy="0.26" />
      <img src="./img/mountain_8.png" className="parallax mountain_8" alt="Mountain 8" data-speedx="0.25" data-speedy="0.25" />
      <img src="./img/fog_5.png" className="parallax fog_5" alt="Fog 5" data-speedx="0.24" data-speedy="0.24"/>
      <img src="./img/mountain_7.png" className="parallax mountain_7" alt="Mountain 7" data-speedx="0.23" data-speedy="0.23"/>

      <div className="text" data-speedx="0.22" data-speedy="0.22">
        <h2>Championing sustainability</h2>
        <h1>inspiring generations</h1>
      </div>

      <img src="./img/mountain_6.png" className="parallax mountain_6" alt="Mountain 6" data-speedx="0.21" data-speedy="0.21"  />
      <img src="./img/fog_4.png" className="parallax fog_4" alt="Fog 4" data-speedx="0.20" data-speedy="0.20" />
      <img src="./img/mountain_5.png" className="parallax mountain_5" alt="Mountain 5" data-speedx="0.19" data-speedy="0.19" />
      <img src="./img/fog_3.png" className="parallax fog_3" alt="Fog 3" data-speedx="0.18" data-speedy="0.18" />
      <img src="./img/mountain_4.png" className="parallax mountain_4" alt="Mountain 4" data-speedx="0.17" data-speedy="0.17"/>
      <img src="./img/mountain_3.png" className="parallax mountain_3" alt="Mountain 3" data-speedx="0.05" data-speedy="0.05"/>
      <img src="./img/fog_2.png" className="parallax fog_2" alt="Fog 2" data-speedx="0.15" data-speedy="0.15" />
      <img src="./img/mountain_2.png" className="parallax mountain_2" alt="Mountain 2" data-speedx="0.14" data-speedy="0.14"/>
      <img src="./img/mountain_1.png" className="parallax mountain_1" alt="Mountain 1" data-speedx="0.05" data-speedy="0.05"/>
      <img src="./img/sun_rays.png" className="sun_rays" alt="Sun Rays" data-speedx="0.12" data-speedy="0.12" />
      <img src="./img/black_shadow.png" className="black_shadow" alt="Black Shadow" data-speedx="0.11" data-speedy="0.11" />
      <img src="./img/fog_1.png" className="parallax fog_1" alt="Fog 1" data-speedx="0.10" data-speedy="0.10" />
    </main>
  );
}

export default Main;
