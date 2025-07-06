import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Slider from 'react-slick';
import photo1 from '../assets/blog-img-1.jpeg';
import photo2 from '../assets/blog-img-2.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        {
            image: photo1,
            label: 'اشترى الآن - التوصيل مجاناً',
        },
        {
            image: photo2,
            label: 'عروض خاصة على التكييفات',
        },
        {
            image: photo1,
            label: 'استعد للشتاء مع العربي',
        },
    ];

    return (
        <Box sx={{ px: 4, py: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9} size={8}>
                    <Paper sx={{ position: 'relative',border: 'none', boxShadow: 'none'  }}>
                        <Slider {...sliderSettings}>
                            {slides.map((slide, index) => (
                                <Box key={index} sx={{ position: 'relative' }}>
                                    <img
                                        src={photo2}
                                        alt={`slide-${index}`}
                                        style={{
                                            width: '100%',
                                            height: 400,
                                            objectFit: 'cover',
                                            borderRadius: '20px'
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                            // backgroundColor: '#004ba8',
                                            color: '#fff',
                                            px: 2,
                                            py: 1,
                                            borderRadius: 1,
                                        }}
                                    >
                                        {slide.label}
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Paper>
                </Grid>

                {/* Cards - 30% */}
                <Grid item xs={12} md={3} container direction="column" spacing={2} size={4}>
                    <Grid item>
                        <Paper sx={{ height: 240, overflow: 'hidden', borderRadius: '20px' }}>
                            <img
                                src={photo1}
                                alt="Cooling"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper sx={{ height: 140, overflow: 'hidden', borderRadius: '20px' }}>
                            <img
                                src={photo2}
                                alt="Tea"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
