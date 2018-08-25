import React from 'react';
import Logo from '../logo/logo.jsx';

const Navigation = ({onRouteChange, isSignedIn})=>{
  if (isSignedIn) {return(
    <nav class="db dt-l w-100 border-box pa1 mb1 ph5-l">
      <Logo />
  <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
    {/* <a
      onClick={()=>onRouteChange("home")}
      class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="" title="Home">Home</a>
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="" title="How it Works">How it Works</a> */}
    <p
      onClick={()=>onRouteChange("signin")}
      className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer grow">Sign Out</p>
  </div>
</nav>

  );} else {
    return (
      <nav className="fr-ns pa3">
        <p
          onClick={()=>onRouteChange("signin")}
          className="f3 link dim items-end-m pointer grow">Sign In</p>
          <p
            onClick={()=>onRouteChange("register")}
            className="f3 link dim items-end-m pointer grow">Register</p>
      </nav>
    )
  }
}

export default Navigation;
