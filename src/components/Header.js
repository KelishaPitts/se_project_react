import '../blocks/header.css'


const Header =()=>{
    


    return (
        <div>
          <header className='header'>
            <div  className='header__logo'>
            <div><img src= {require("../images/logo.svg").default} alt="logo"/> 
            </div>
            <div>
              Date
            </div>
            </div>
            <div className='header__avatar-logo'>
            <div>
              <button type="text"> Add New Clothes
              </button>
            </div>
            <div>Name</div>
            <div><img src={require("../images/avatar.svg").default}alt="avatar"/></div>
            </div>
          </header>
        </div>
      );



}

export default Header;