import React from "react";

export default function Profile({ profile }) {
  return (
    <div className="profile">
      <img src={profile.img} />
      <div className="profile-details">
        <div className="profile-top">
          <p>{profile.handle}</p>
          <button>Edit Profile</button>
          <button>Gear</button>
        </div>
        <div className="profile-count">
          <p>{profile.posts} posts </p>
          <p>{profile.following} following </p>
          <p>{profile.followers} followers </p>
        </div>
        <p>
          {profile.firstName} {profile.lastName}
        </p>
      </div>
    </div>
  );
}
