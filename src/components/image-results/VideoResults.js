import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Like from 'material-ui/svg-icons/action/thumb-up'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Player } from 'video-react';


class VideoResults extends Component {
    state = {
        open: false,
        currentVid:''
    }

    handleOpen = vid => {
        this.setState({open: true, currentVid: vid });
    }

    handleClose = () => {
        this.setState({open: false});
    }

  render() {
      let videoListContent;
      const { videos } = this.props;

      if(videos) {
        videoListContent = (
            <GridList cols={3}>
                {videos.map(vid => (
                    <GridTile
                        title={vid.tags}
                        key={vid.id}
                        subtitle={
                            <span>
                                By : <strong>{vid.user}</strong> | 
                                Views: <strong>{vid.views}</strong> |
                                <i><Like color='white'/> {vid.likes}</i>
                                
                            </span>
                            
                        }

                        actionIcon={
                            
                            <IconButton onClick={() => this.handleOpen(vid.videos.large.url)}>
                             <ZoomIn color='white'/> 
                            </IconButton>
                            

                        }
                    >
                        <Player playsInline src={vid.videos.medium.url}/>
                    </GridTile>
                ))}
            </GridList>
        )
      } else {
        videoListContent = null;
      }

      const actions = [
          <FlatButton label="Close" primary={true} onClick={this.handleClose} />
      ]

    return (
      <div>
        {videoListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
        <Player
            playsInline
            src={this.state.currentVid}
            style={{ width: '100%' }}
        />
        </Dialog>
      </div>
    )
  }
}

VideoResults.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default VideoResults;