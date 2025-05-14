import React from 'react';


const Usercard = ({name, age, email}) => {
      return <ul>
           <li>name : {name}</li>
           <li>age : {age}</li>
           <li>email : {email}</li>
      </ul>;
};

export default Usercard;