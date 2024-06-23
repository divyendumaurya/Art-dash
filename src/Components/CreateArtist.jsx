
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createArtist } from '../Store/ArtistSlice'
import { useNavigate } from 'react-router-dom';

const CreateArtist = () => {
  const [artistname, setArtistname] = useState('');
  const [image, setImage] = useState(null);
  const [biography, setBiography] = useState('');
  const [artistrole, setArtistRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  const artistData = {
    artistname,
    image,
    biography,
    artistroles: artistrole
  };

  console.log("Image file:", image); // Add this line
  console.log("Sending artist data:", artistData);

  dispatch(createArtist(artistData))
    .then(() => {
      navigate('/artist');
    })
    .catch((error) => {
      console.error("Error creating artist:", error);
    });
};

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new artist</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="artistname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist Name</label>
                <input
                  value={artistname}
                  onChange={(e) => setArtistname(e.target.value)}
                  type="text"
                  name="artistname"
                  id="artistname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter artist name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist Image</label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="artistrole" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist Role</label>
                <input
                  value={artistrole}
                  onChange={(e) => setArtistRole(e.target.value)}
                  type="text"
                  name="artistrole"
                  id="artistrole"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter artist role"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="biography" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                <textarea
                  value={biography}
                  onChange={(e) => setBiography(e.target.value)}
                  id="biography"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter artist biography"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add artist
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateArtist;