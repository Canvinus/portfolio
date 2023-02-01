export const ButtonLink = ({link, text}) => {
    function handleClick() {
        window.open(link, '_blank')
    }
  
    return (
      <button className='button-link' type="button" onClick={handleClick}>
        {text}
      </button>
    );
  }
  