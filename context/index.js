import React, { createContext } from 'react';
export const MyContext = createContext();
export const MyProvider = (props) => {
  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[],"provinces":[],"amphures":[],"Tambons":[],"zipcode":[],"open":false,"username":"","password":"" ,"data":[],"btlogin":false,"btchangepass":false,"showPassword":false,});
  return (
    <>
       <MyContext.Provider value={[state, setState]}>
      {/* <LoginText/>
      <Color/> */}
        {children}
      </MyContext.Provider>
    </>
  );
};