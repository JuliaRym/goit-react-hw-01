// src/components/Profile/Profile.jsx
// import React from 'react';
// import styles from './Profile.module.css';

// const Profile = ({ name, tag, location, image, stats }) => {
//   return (
//     <div className={styles.profile}>
//       <div className={styles.description}>
//         <img src={image} alt="User avatar" className={styles.avatar} />
//         <p className={styles.name}>{name}</p>
//         <p className={styles.tag}>@{tag}</p>
//         <p className={styles.location}>{location}</p>
//       </div>

//       <ul className={styles.stats}>
//         <li>
//           <span>Followers</span>
//           <span>{stats.followers}</span>
//         </li>
//         <li>
//           <span>Views</span>
//           <span>{stats.views}</span>
//         </li>
//         <li>
//           <span>Likes</span>
//           <span>{stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Profile;

// src/components/Profile.js
// import React from 'react';

import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileDescription}>@{tag}</p>
        <p className={styles.profileDescription}>{location}</p>
      </div>
      <ul className={styles.profileStats}>
        <li className={styles.profileItem}>
          <span className={styles.profileStatsName}>Followers</span>
          <span className={styles.profileStatsInfo}>{stats.followers}</span>
        </li>
        <li className={styles.profileItem}> 
          <span className={styles.profileStatsName}>Views</span>
          <span className={styles.profileStatsInfo}>{stats.views}</span>
        </li>
        <li className={styles.profileItem}>
          <span className={styles.profileStatsName}>Likes</span>
          <span className={styles.profileStatsInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired,
};

export default Profile;
