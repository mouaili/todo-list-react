import { useState } from 'react';
import TextareaField from './TextareaField';
import TextField from './TextField';
import Button from '../buttons/Button';
import { addTask, editTask } from '../../../store/TasksSlice';
import { useDispatch } from 'react-redux';

const TasksForm = ({ closeModal, value, index }) => {
  //const { editTask, addTask } = useContext(TasksContext);
  const [formValue, setformValue] = useState(
    value
      ? value
      : {
          title: '',
          description: '',
        }
  );
  const [invalidFields, setInvalidFields] = useState([]);
  const dispatch = useDispatch({});

  const handleSubmitForm = e => {
    e.preventDefault();

    if (invalidFields.length > 0) {
      alert('There errors in the form');
      return;
    }

    if (value && !isNaN(+index)) {
      dispatch(editTask({ task: formValue, taskIndex: index }));
    } else {
      dispatch(addTask(formValue));
    }

    closeModal();

    console.log(formValue);
  };

  const handleFormError = error => {
    const newInvalidFields = [...invalidFields];
    const invalidFieldsIndex = newInvalidFields.findIndex(
      field => field === error.name
    );

    if (error.error) {
      //si une erreur est rencontrée
      if (invalidFieldsIndex === -1) {
        //si le champ est enregistré comme invalid ou pas
        setInvalidFields([...newInvalidFields, error.name]);
      }
      //Sinon il est déjà enregistré, on ne fait rien
    } else {
      // si aucune erreur n'est rencontrée
      if (invalidFieldsIndex !== -1) {
        //on supprime la erreur
        newInvalidFields.splice(invalidFieldsIndex, 1);
        setInvalidFields(newInvalidFields);
      }
      //Sinon il n'est pas déjà enregistré, on ne fait rien
    }

    //description => invalidFields
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <TextField
        name='title'
        label='Title'
        placeholder='New task title..'
        value={formValue.title}
        onChange={value => setformValue({ ...formValue, title: value })}
        validation={{
          name: 'title',
          required: true,
          type: 'string',
          minLength: 3,
          maxLength: 15,
        }}
        onError={handleFormError}
      />
      <TextareaField
        name='description'
        label='Description'
        placeholder='New task description..'
        value={formValue.description}
        onChange={value => setformValue({ ...formValue, description: value })}
        validation={{
          name: 'description',
          required: true,
          type: 'string',
          minLength: 5,
          maxLength: 50,
        }}
        onError={handleFormError}
      />
      <Button type='submit' variant='primary'>
        Save
      </Button>
    </form>
  );
};

export default TasksForm;
