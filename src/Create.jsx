import {useParams} from 'react-router-dom';

function Create() {
    const {id} = useParams();
  return (
    <div>Create: {id}</div>
  )
}

export default Create;