import React from 'react';

const ImageLinkForm = ({onInputChange, onSubmit})=>{
  return(
    <div>
      <form class="transparent mw7 center pa3 br2-ns ba b--black-10 h-50-ns" id="imglink">
    <fieldset class="cf bn ma0 pa0">
      <legend class="pa0 f4-ns mb3 bodoni b black-80">Let's find faces in your picture! </legend>
      <div class="cf">
        <input class="f6 f5-l input-reset bn  black-80 bg-white pa3 lh-solid w-100 w-75-m w-40-l br2-ns br--left-ns" placeholder="Your picture link here" type="text"
        onChange={onInputChange}/>
        <input class="f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Detect"
        onClick={onSubmit}/>
      </div>
    </fieldset>
      </form>
    </div>

  )
}

export default ImageLinkForm;
