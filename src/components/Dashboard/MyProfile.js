import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import useUser from '../../hooks/useUser';
import DashNav from './DashNav';

const MyProfile = () => {

    const [authUser, loading] = useAuthState(auth);
    const [user] = useUser(authUser.email);
    let navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const userUpdate = {
            name: e.target.name.value,
            email: e.target.email.value,
            img: e.target.img.value,
            location: e.target.location.value,
            bio: e.target.bio.value,
            profession: e.target.profession.value,
            phone: e.target.phone.value,
            linkedIn: e.target.linkedIn.value
        };

        axios.put("https://wood-peckers.herokuapp.com/users", userUpdate)
            .then(res => {
                //console.log(res.data);
                if (res.data.acknowledged) {
                    toast.success("Profile is updated.");
                    navigate('/dashboard');
                } else {
                    toast.error("Something went wrong.")
                }
            });
    }

    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                {
                    loading ? (
                        <div className="mx-5 spinner-border text-dark" role="status">
                            <span className="visually-hidden"> Loading...</span>
                        </div>
                    ) : (
                        <div className="col-lg-9">
                            <div className="my-3 py-2 bg-dark-pro container rounded-10 text-white">
                                <form onSubmit={handleUpdateProfile} className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-main">
                                    <h3 className="mt-4 mb-0 text-main">Edit Your Profile</h3>
                                    <small className="mb-3 text-second d-block">Please fill up this form to update your profile.</small>
                                    <div className="my-4">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" name="name" defaultValue={user.name} required />
                                    </div>
                                    <div className="my-4 d-block">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="text" className="form-control" name="email" defaultValue={user.email} disabled />
                                    </div>
                                    <div className="my-4">
                                        <label htmlFor="img" className="form-label">Profile Img URL</label>
                                        <input type="text" className="form-control" name="img" defaultValue={user.img} required />
                                    </div>
                                    <div className="my-4">
                                        <label htmlFor="location" className="form-label">Current Address</label>
                                        <input type="text" className="form-control" name="location" defaultValue={user.location} required />
                                    </div>
                                    <div className="my-4">
                                        <label htmlFor="bio" className="form-label">Edit Bio</label>
                                        <textarea type="text" rows="5" className="form-control" name="bio" defaultValue={user.bio} />
                                    </div>
                                    <div className="my-4">
                                        <label htmlFor="profession" className="form-label">Profession/Education</label>
                                        <input type="text" className="form-control" name="profession" defaultValue={user.profession} />
                                    </div>
                                    <div className="my-4">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" name="phone" defaultValue={user.phone} />
                                    </div>
                                    <div className="my-4">
                                        <label htmlFor="linkedIn" className="form-label">LinkedIn Profile</label>
                                        <input type="text" className="form-control" name="linkedIn" defaultValue={user.linkedIn} />
                                    </div>
                                    <button type="submit" className="mt-4 btn btn-main box">Update Profile</button>
                                </form>
                            </div>
                        </div >
                    )
                }
            </div>
        </div>
    );
};

export default MyProfile;