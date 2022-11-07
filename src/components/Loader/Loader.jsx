import { PulseLoader } from 'react-spinners';

const Loader = () => {
  return (
    <PulseLoader
      color="#7c36d6"
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        left: '50%',
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50% , -50%)',
      }}
      margin={8}
      size={20}
      speedMultiplier={1}
    />
  );
};

export default Loader;
