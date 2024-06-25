import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArtist, fetchArtist } from '../Store/ArtistSlice';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateArtist = () => {
  const [artistname, setArtistname] = useState('');
  const [image, setImage] = useState(null);
  const [biography, setBiography] = useState('');
  const [artistroles, setArtistRoles] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const artist = useSelector(state => 
    state.artist.artist.find(artist => artist._id === id)
  );

  useEffect(() => {
    if (!artist) {
      dispatch(fetchArtist());
    } else {
      setArtistname(artist.artistname);
      setBiography(artist.biography);
      setArtistRoles(artist.artistrole);
    }
  }, [artist, dispatch, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    const formData = new FormData();
    formData.append('artistname', artistname);
    formData.append('biography', biography);
    formData.append('artistroles', artistroles);
    if (image) {
      formData.append('image', image);
    }

    try {
      await dispatch(updateArtist({ _id: id, artistData: formData })).unwrap();
      navigate('/user/artist');
    } catch (error) {
      console.error("Error updating artist:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Artist</h2>
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                <input
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  required
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
              </div>
            <div className="sm:col-span-2">
              <label htmlFor="artistroles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist Roles</label>
              <input
                value={artistroles}
                onChange={(e) => setArtistRoles(e.target.value)}
                type="text"
                name="artistroles"
                id="artistroles"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter artist roles"
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
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter artist biography"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            disabled={isUpdating}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 disabled:opacity-50"
          >
            {isUpdating ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Updating Artist...
              </>
            ) : (
              'Update Artist'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateArtist;