import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import {  deleteArtist } from '../Store/ArtistSlice';



const ArtistDrawer = ({ artist, onClose, visible }) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
  
    useEffect(() => {
      const drawer = document.getElementById('artistDrawer');
      if (drawer) {
        if (visible) {
          drawer.classList.remove('translate-x-full');
          drawer.classList.add('translate-x-0');
        } else {
          drawer.classList.remove('translate-x-0');
          drawer.classList.add('translate-x-full');
        }
      }
    }, [visible]);
  
    if (!artist) return null;
    
    
    const handleEdit = () => {
      navigate(`/artist/update/${artist._id}`);
      onClose(); // Close the drawer after navigating
    };
    
    const handleDelete = (_id) => {
        dispatch(deleteArtist(_id));
        onClose(); // Close the drawer after navigating
      };


  return (
    <div id="artistDrawer" className="overflow-y-auto fixed top-0 right-0 z-40 p-4 w-full max-w-xs h-screen bg-white transition-transform duration-300 ease-in-out translate-x-full dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-label" aria-hidden="true">
      <h4 id="drawer-label" className="mb-1.5 text-xl font-semibold text-gray-900 dark:text-white">Artist Details</h4>
      <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="mt-4">
        <div className="mb-4">
          <img 
            src={`https://test.solz.me/${artist.image}`}
            alt={artist.artistname} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <dl>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Artist Name</dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{artist.artistname}</dd>
          
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Artist Role</dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{artist.artistrole}</dd>
          
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{artist.biography}</dd>

          
          
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Joined</dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            {new Date(artist.date).toLocaleDateString()}
          </dd>
        </dl>
      </div>
      <div className="flex bottom-0 left-0 justify-center pb-4 space-x-4 w-full md:px-4 md:absolute">
        <button onClick={handleEdit}  type="button" className="text-white w-full inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
          Edit
        </button>
        <button onClick={() => handleDelete(artist._id)} type="button" className="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
          <svg aria-hidden="true" className="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ArtistDrawer;