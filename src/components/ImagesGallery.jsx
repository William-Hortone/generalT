import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import images from '../constants/images';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

const ImagesGallery = () => {
    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    

    const cols = isXs ? 1 : isSm ? 2 : 4;

    return (
        <ImageList
            sx={{ width: '100%', height: 'auto' }}
            variant="quilted"
            cols={cols}
            gap={8}
        >
            {itemData.map((item) => {
                // Limit max cols to avoid too-wide images
                const maxCols = cols;
                const itemCols = Math.min(item.cols || 1, maxCols > 1 ? maxCols - 1 : 1);
                const itemRows = item.rows || 1;

                return (
                    <ImageListItem
                        key={item.img}
                        cols={itemCols}
                        rows={itemRows}
                        sx={{
                            maxWidth: '100%',
                            '& img': {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 2,
                            },
                        }}
                    >
                        <img
                            {...srcset(item.img, 121, itemRows, itemCols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
};

const itemData = [
    { img: images.product29, title: 'Breakfast', rows: 2, cols: 2 },
    { img: images.product7, title: 'Burger' },
    { img: images.product27, title: 'Camera' },
    { img: images.product30, title: 'Coffee', cols: 2 },
    { img: images.product13, title: 'Hats', cols: 2 },
    { img: images.article15, title: 'Honey', rows: 2, cols: 2 },
    { img: images.product14, title: 'Basketball' },
    { img: images.article7, title: 'Fern' },
    { img: images.article13, title: 'Mushrooms', rows: 2, cols: 2 },
    { img: images.article14, title: 'Tomato basil' },
    { img: images.article10, title: 'Sea star' },
    { img: images.article17, title: 'Bike', cols: 2 },
];

export default ImagesGallery;
