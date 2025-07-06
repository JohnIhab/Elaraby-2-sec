import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    InputBase,
    Badge,
    Button,
} from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';

export default function Navbar() {
    return (
        <>
            {/* Top bar */}
            <AppBar position="static" sx={{ bgcolor: '#074189', fontSize: '14px' }}>
                <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Button color="inherit">المدونة</Button>
                        <Button color="inherit">اتصل بنا</Button>
                        <Button color="inherit">الدعم والمساعدة</Button>
                        <Button color="inherit">المفضلة</Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography>مرحباً</Typography>
                        <Button color="inherit" startIcon={<Person />}>
                            تسجيل الدخول
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Middle nav */}
            <Box sx={{ display: 'flex', alignItems: 'center', px: 4, py: 2, bgcolor: '#004ba8', gap: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    ELARABY
                </Typography>
                <InputBase
                    placeholder="ابحث في المتجر بالكامل هنا..."
                    sx={{
                        bgcolor: '#f1f1f1',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        flexGrow: 1,
                        color: 'black',
                    }}
                    fullWidth
                />
                <IconButton>
                    <Badge
                        badgeContent={0}
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: 'white',
                                color: '#004ba8',
                                border: '1px solid #004ba8', 
                            },
                        }}
                    >
                        <ShoppingCart sx={{ color: 'white' }} />
                    </Badge>
                </IconButton>
                <Typography sx={{ color: 'white' }}>سلة التسوق</Typography>
            </Box>

            {/* Category bar */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 4,
                    px: 4,
                    py: 1,
                    bgcolor: '#e3f2fd',
                    fontWeight: '500',
                    color: '#004ba8',
                    borderTop: '1px solid #ccc',
                }}
            >
                <Button color="inherit">جميع الأقسام</Button>
                <Button color="inherit">عروض و خصومات</Button>
                <Button color="inherit">بطاقات هدايا العربي</Button>
                <Button color="inherit">منتجات العربي AR</Button>
                <Button color="inherit">العلامات التجارية ⬇</Button>
            </Box>
        </>
    );
}
