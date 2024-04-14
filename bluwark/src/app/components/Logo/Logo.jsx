import style from "./style.module.css"
import BulwarkBrandLogo from '../Assets/images/BluwarkBrand Logo.png'



export function Logo() {
    return (
      <div className={style.App}>
        <header className={style.Appheader}>
          <img src={BulwarkBrandLogo} className={style.Applogo} alt="logo" />
          
          
        </header>
      </div>
    );
  }
  

