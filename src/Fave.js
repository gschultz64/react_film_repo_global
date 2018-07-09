import React from 'react';

const Fave = props =>  {

  function handleClick(e) {
    e.stopPropagation();
    props.onFaveToggle()
  }

  const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'
  
  return(
    <div className={"film-row-fave " + isFave} onClick={(e) => handleClick(e)}>
      <p className="material-icons">{isFave}</p>
    </div>
  )
}

export default Fave