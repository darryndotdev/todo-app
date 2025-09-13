import Add from '../Icons/Add';

const AddTodo = () => {
    return (
        <form>
            <fieldset role='group'>
                <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Write anything and hit enter to add'
                />
                <button>
                    <Add />
                </button>
            </fieldset>
        </form>
    );
};

export default AddTodo;
