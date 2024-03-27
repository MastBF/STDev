import { useSelector } from 'react-redux';

function Success() {
  const showSuccess = useSelector((state) => state.success.showSuccess);

  return (
    <div>
      <div className={`successMessage ${showSuccess ? 'show' : ''}`}>
        <p>Success!</p>
      </div>
    </div>
  );
}

export default Success;
