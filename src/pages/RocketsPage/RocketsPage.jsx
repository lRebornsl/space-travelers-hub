import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { fetchRockets } from '../../redux/Rockets/rocketsSlice'
import Rockets from '../../components/Rockets/Rockets';

const RocketsPage = () => {
  const rockets = useSelector((state) => state.rocketsSlice.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch])

  return (
    <section className='container'>
      {rockets.map((rocket) => (
        <Rockets
          key={uuid()} 
          rocket={rocket}
        />
      ))}
    </section>
  )
}

export default RocketsPage;

