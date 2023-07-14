import React from 'react';
import './UserData.css';


const UserData = ({ user }) => {

   
  return (
    <>
    
    <div key={user.id} className="table_row">
    <div className="table_small">
      <div className="table_cell" >ID</div>
      <div className="table_cell" >{user.id}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">firstName</div>
      <div className="table_cell">{user.firstName}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">ID</div>
      <div className="table_cell">{user.lastName}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">lastName</div>
      <div className="table_cell">{user.maidenName}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">age</div>
      <div className="table_cell">{user.age}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">gender</div>
      <div className="table_cell">{user.gender}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">email</div>
      <div className="table_cell">{user.email}</div>
    </div>
   
    <div className="table_small">
      <div className="table_cell">phone</div>
      <div className="table_cell">{user.phone}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">username</div>
      <div className="table_cell">{user.username}</div>
    </div>
   
    <div className="table_small">
      <div className="table_cell">password</div>
      <div className="table_cell">{user.password}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">birthDate</div>
      <div className="table_cell">{user.birthDate}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">image</div>
      <div className="table_cell"><img src={user.image} alt="User Avatar" /></div>
    </div>
    <div className="table_small">
      <div className="table_cell">bloodGroup</div>
      <div className="table_cell">{user.bloodGroup}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">height</div>
      <div className="table_cell">{user.height}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">weight</div>
      <div className="table_cell">{user.weight}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">eyeColor</div>
      <div className="table_cell">{user.eyeColor}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">hair</div>
      <div className="table_cell"><span> {user.hair.color}</span>{""}
     <span> {user.hair.type}</span></div>
    </div>
    
    <div className="table_small">
      <div className="table_cell">domain</div>
      <div className="table_cell">{user.domain}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">ip</div>
      <div className="table_cell">{user.ip}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">address</div>
      <div className="table_cell"> {user.address && (
   <>
     <span>{user.address.address} , </span>
     <span>{user.address.city} , </span>
     <span>{user.address.postalCode} , </span>
     <span>{user.address.state}. </span>
     {user.address.coordinates && (
       <>
         <span> {user.address.coordinates.lat} ,</span>
         <span>{user.address.coordinates.lng} </span>
       </>
       
     )}
   </>
 )}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">macAddress</div>
      <div className="table_cell">{user.macAddress}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">university</div>
      <div className="table_cell">{user.university}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">bank</div>
      <div className="table_cell">{user.bank && (
       <>
       <span>
        Card Number : {user.bank.cardNumber} , 
       </span>
     
       <span>
          Card type : {user.bank.cardType} ,
       </span>
       <span>
         Expiry : {user.bank.cardExpire} ,
       </span>
       <span>
         Currency : {user.bank.currency} ,
       </span>
       <span>
         <span>IBAN </span>: {user.bank.iban} ,
       </span>
       </>
      )}</div>

    </div>

    <div className="table_small">
      <div className="table_cell">ein</div>
      <div className="table_cell">{user.ein}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">ssn</div>
      <div className="table_cell">{user.ssn}</div>
    </div>
    <div className="table_small">
      <div className="table_cell">userAgent</div>
      <div className="table_cell">{user.userAgent}</div>
    </div>
    

  </div>
  </>
  );
};

export default UserData;
