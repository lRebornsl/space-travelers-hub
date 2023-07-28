import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Missions from '../../components/Missions/Missions';
import { useEffect } from 'react';
import { getMissions } from '../../redux/Missions/missionsSlice';

const MissionsPage = () => {
  const missions = useSelector(state => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <section className='container mission-container'>
      <div className='flex flex-container'>
        <h3 className='flex-item'>Mission</h3>
        <h3 className='flex-item-bigger title-description'>Description</h3>
        <h3 className='flex-item'>Status</h3>
        <h3 className='flex-item'></h3>
      </div>
      {missions.map((mission, index) => (
        <Missions
          key={uuid()}
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
          index={index}
          reserved={mission.reserved}
        />
      ))}
    </section>
  );
};

export default MissionsPage;