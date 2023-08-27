// import { React} from 'react';
import './Profile.css';

const Profile = (props) => {
    const pfp = {
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        backgroundColor: props.pfpColor
      };

  return (
    <div className="container">
        <div className="user">
            <div style={pfp}></div>
            <h1>{props.username}</h1>
        </div>
        <p>{props.username} Bio</p>
        <button>Follow Me</button>
    </div>
  );
}

export default Profile;
