import css from "./Profile.module.css";
import React from "react";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileDescription}>@{tag}</p>
        <p className={css.profileDescription}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.profileItem}>
          <span className={css.profileStatsName}>Followers</span>
          <span className={css.profileStatsInfo}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileStatsName}>Views</span>
          <span className={css.profileStatsInfo}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileStatsName}>Likes</span>
          <span className={css.profileStatsInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
