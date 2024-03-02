const Todoinput = (props) => {
    const {inputChange, text, changeText} = props;
    return (
        <>
            <section className='text-center'>
            <input onChange={inputChange} type="text" 
            value={text} placeholder="Enter Todo" className="input-class"/>
            <button className="btn-save" onClick={changeText}> Submit </button>
            </section>
        </>
        );
};
export default Todoinput;  