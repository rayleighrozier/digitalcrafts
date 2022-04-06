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
          <div className="profile-stat">
            <p class="bold">{profile.posts} </p>
            <p>posts</p>
          </div>
          <div className="profile-stat">
            <p class="bold">{profile.followers} </p>
            <p>followers</p>
          </div>
          <div className="profile-stat">
            <p class="bold">{profile.following} </p>
            <p>following</p>
          </div>
        </div>
        <p className="profile-name">
          {profile.firstName} {profile.lastName}
        </p>
      </div>
    </div>
  );
}
