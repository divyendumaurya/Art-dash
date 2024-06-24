import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createArtist } from '../Store/ArtistSlice'
import { useNavigate } from 'react-router-dom';

const CreateArtist = () => {
  const [artistname, setArtistname] = useState('');
  const [image, setImage] = useState(null);
  const [biography, setBiography] = useState('');
  const [artistrole, setArtistRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const artistData = {
      artistname,
      image,
      biography,
      artistroles: artistrole
    };

    console.log("Image file:", image);
    console.log("Sending artist data:", artistData);

    dispatch(createArtist(artistData))
      .then(() => {
        navigate('/artist');
      })
      .catch((error) => {
        console.error("Error creating artist:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
              disabled={isLoading}
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              {isLoading ? (
                <>
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Adding artist...
                </>
              ) : (
                'Add artist'
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateArtist;