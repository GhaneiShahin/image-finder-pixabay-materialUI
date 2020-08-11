import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import ZoomIn from 'material-ui/icons/zoom-in';
import { Dialog, Button, IconButton } from '@material-ui/core';

const ImageResults = ({ currentImg, setCurrentImg, open, setOpen, images }) => {
  const handleOpenImg = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const handleCloseImg = () => {
    setOpen(false);
  };

  let imageListContent = null;
  if (images) {
    imageListContent = (
      <GridList cols={3}>
        {images.map((img) => (
          <GridListTile
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton onClick={() => handleOpenImg(img.largeImageURL)}>
                {/* <ZoomIn color="white" /> */}
              </IconButton>
            }
          >
            <img src={img.largeImageURL} alt="" />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    imageListContent = null;
  }

  const actions = [
    <Button
      label="Close"
      color="secondary"
      primary={true}
      onClick={handleCloseImg}
    />,
  ];

  return (
    <div>
      {' '}
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={handleCloseImg}
        >
          <img src={currentImg} alt="" style={{ width: '100%' }} />
        </Dialog>
      </div>
    </div>
  );
};

export default ImageResults;
