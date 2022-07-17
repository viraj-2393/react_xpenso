import './css/navmenu.css';
function NavMenu(){
    return (
      <>
        <div className='nav_container'>
          <div className='nav_left'>
            <h1>Overview</h1>
            <p>Hey Viraj, Get your monthly transaction history here!</p>
          </div>
          <div className='nav_right'>
            <span class="material-icons">markunread</span>
            <span class="material-icons">circle_notifications</span>
            <div>
              <img src={require('.././assets/images/profile_pic.jpg')}></img>
            </div>
            
          </div>
        </div>
      </>
    );
  }

  export default NavMenu;