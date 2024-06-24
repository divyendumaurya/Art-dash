import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtist, deleteArtist } from '../Store/ArtistSlice';
import { Link } from 'react-router-dom';
import ArtistDrawer from './ArtistDrawer';

const ArtistList = () => {
  const dispatch = useDispatch();
  const { artist, loading, error, currentPage, totalPage } = useSelector((state) => state.artist);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchArtist({ page: 1, limit: 5 }));
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(fetchArtist({ page, limit: 5 }));
  };

  const handleDelete = (_id) => {
    dispatch(deleteArtist(_id));
  };

  const handleOpenDrawer = (artist) => {
    setSelectedArtist(artist);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
  setDrawerVisible(false);
  // Wait for the closing animation to finish before clearing the selected artist
  setTimeout(() => {
    setSelectedArtist(null);
  }, 300); // Adjust this timeout to match your transition duration
};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-2/3 max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">Artist List</h5>
          <Link to="/createArtist" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Create Artist
          </Link>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {artist && artist.length > 0 ? (
              artist.map((artist) => (
                <li key={artist._id} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src= {`https://test.solz.me/${artist.image}`} alt={artist.artistname} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {artist.artistname}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {artist.artistrole}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleOpenDrawer(artist)} className="text-gray-400 hover:text-gray-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <Link to={`/artist/update/${artist._id}`}>
                        <button className="text-blue-600 hover:text-blue-800">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(artist._id)} className="text-red-600 hover:text-red-800">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="py-3 sm:py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">No artists found</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {selectedArtist && (
            <ArtistDrawer
                artist={selectedArtist}
                onClose={handleCloseDrawer}
                visible={drawerVisible}
                            />
                            )}


    {/* Pagination component */}
    <nav aria-label="Page navigation example" className="mt-4 absolute right-[685px]  bottom-10 ">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {[...Array(totalPage).keys()].map((page) => (
            <li key={page + 1}>
              <button
                onClick={() => handlePageChange(page + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === page + 1
                    ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                {page + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPage}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>                   

    </div>
  );
};

export default ArtistList;