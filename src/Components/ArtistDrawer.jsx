import React from 'react';
import { Drawer } from 'flowbite-react';

const ArtistDrawer = ({ artist, onClose, visible }) => {
  return (
    <Drawer open={visible} onClose={onClose}>
      <Drawer.Header>
        <h2 className="text-xl font-semibold text-primary-700 dark:text-primary-500">
          {artist.artistname}
        </h2>
      </Drawer.Header>
      <Drawer.Body>
        <div className="space-y-4">
          <div>
            <img 
              src={artist.image} 
              alt={artist.artistname} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-primary-600 dark:text-primary-500 font-medium mb-2">
              Biography:
            </p>
            <p className="text-gray-800 dark:text-gray-300">{artist.biography}</p>
          </div>
          <div>
            <p className="text-primary-600 dark:text-primary-500 font-medium mb-2">
              Role:
            </p>
            <p className="text-gray-800 dark:text-gray-300">{artist.artistrole}</p>
          </div>
          <div>
            <p className="text-primary-600 dark:text-primary-500 font-medium mb-2">
              Joined:
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              {new Date(artist.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Drawer.Body>
    </Drawer>
  );
};

export default ArtistDrawer;