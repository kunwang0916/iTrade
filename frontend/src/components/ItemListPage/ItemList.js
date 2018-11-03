import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
import {
  withStyles
} from 'material-ui/styles';
import GridList, {
  GridListTile,
  GridListTileBar
} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: '100vh',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


const tileData = [{
    img: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 2,
    featured: true,
  },
  {
    img: '/static/images/grid-list/burgers.jpg',
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    img: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '/static/images/grid-list/morning.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: '/static/images/grid-list/hats.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '/static/images/grid-list/honey.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '/static/images/grid-list/vegetables.jpg',
    title: 'Vegetables',
    author: 'jill111',
    cols: 2,
  },
  {
    img: '/static/images/grid-list/plant.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: '/static/images/grid-list/mushroom.jpg',
    title: 'Mushrooms',
    author: 'PublicDomainPictures',
  },
  {
    img: '/static/images/grid-list/olive.jpg',
    title: 'Olive oil',
    author: 'congerdesign',
  },
  {
    img: '/static/images/grid-list/star.jpg',
    title: 'Sea star',
    cols: 2,
    author: '821292',
  },
  {
    img: '/static/images/grid-list/bike.jpg',
    title: 'Bike',
    author: 'danfador',
  },
];

class ItemList extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          {tileData.map(tile => (
              <GridListTile key={tile.img}>
               <Link to='/itemDetail'>
                <img src = {"https://material-ui-next.com" + tile.img} alt={tile.title}/>
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
                </Link>
              </GridListTile>
            
          ))}
        </GridList>
      </div>
  );
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);
