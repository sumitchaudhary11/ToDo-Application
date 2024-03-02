const Todolist = (props) => {
    const {todoList} = props;
    return (
        <>
            <section className='text-center'>
            
                <ul className="list-todo">

                    {todoList.map((value,index)=>{
                            return  <li key={index}>{value.name}</li>;
                            
                    })}
                
                </ul>

            </section>
        </>
    );
};
export default Todolist;