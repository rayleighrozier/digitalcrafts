import React from "react";

export default function Profile({ profile }) {
  return (
    <div className="profile">
      <img src={profile.img} />
      <div className="profile-details">
        <p>{profile.handle}</p>
        <button>Edit Profile</button>
        <button>Gear</button>
        <p>{profile.posts} posts </p>
        <p>{profile.following} following </p>
        <p>{profile.followers} followers </p>
        <p>
          {profile.firstName} {profile.lastName}
        </p>
      </div>
    </div>
  );
}
