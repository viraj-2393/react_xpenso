import './css/sidebarstyle.css';
function ProductName(){
    return (
      <>
        <h1 style={{color:'#3547AC'}}>Xpenso</h1>
      </>
    );
  }
  
  function SideBarMenuItem(props){
    return (
      <>
        <div className={props.className}>
          <span class="material-icons">{props.icon}</span>
        </div>
      </>
    );
  }

function SideBar() {
  return (
    <>
     <ProductName/>
          <SideBarMenuItem icon="space_dashboard" className="sidebaritem active_side_menu"/>
          <SideBarMenuItem icon="insights" className="sidebaritem"/>
          <SideBarMenuItem icon="receipt_long" className="sidebaritem"/>
          <SideBarMenuItem icon="military_tech" className="sidebaritem"/>
          <SideBarMenuItem icon="settings_suggest" className="sidebaritem"/>
          <SideBarMenuItem icon="logout" className="sidebaritem"/>
    </>
  );
}

export default SideBar;