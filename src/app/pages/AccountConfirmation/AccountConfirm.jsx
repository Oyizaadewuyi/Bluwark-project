import clip from  "../../components/Assets/images/Clip path group.svg"
import '../AccountConfirmation/AccountConfirm.css'


const AccountConfirm = () => {
    
  return (
    <div className="AccountConfirmContainer">
      
      <img src={clip} alt="" />
      <h1>Your BULWARK<br/>account is ready</h1>
      <a href="/#"><h4>Contine</h4></a>
    </div>


        
   )
}

export default AccountConfirm