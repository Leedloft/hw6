import React, { useEffect, useState } from 'react'
import Input from "./components/input";

const App = () => {
  return (
    <div>
      <Input
        loginValue={'userName@gmail.com'}
        passValue={'12345'}
      />
    </div>
  );
}

export default App;
