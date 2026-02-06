import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store/store';
import StickyHeader from './components/layout/StickyHeader';
import MobileBottomNav from './components/layout/MobileBottomNav';
import MobileMenu from './components/layout/MobileMenu';
import Footer from './components/layout/Footer';
import AnnouncementBar from './components/layout/AnnouncementBar';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';

function App() {
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            duration: 3000,
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px'
                            },
                            success: {
                                iconTheme: {
                                    primary: '#10B981',
                                    secondary: '#FFFFFF'
                                }
                            }
                        }}
                    />

                    <StickyHeader
                        onCartOpen={() => setCartOpen(true)}
                        onMenuToggle={() => setMenuOpen(true)}
                    />

                    <AnnouncementBar />

                    <main className="pb-20 lg:pb-0">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop/women" element={<ProductListing />} />
                            <Route path="/shop/men" element={<ProductListing />} />
                            <Route path="/collections/:collection" element={<ProductListing />} />
                            <Route path="/product/:slug" element={<ProductDetail />} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path="/fabric/:fabricType" element={<Home />} />
                            <Route path="/loyalty" element={<Home />} />
                            <Route path="/vip-access" element={<Home />} />
                            <Route path="/size-guide" element={<Home />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </main>

                    <Footer />

                    <MobileBottomNav onCartOpen={() => setCartOpen(true)} />

                    <MobileMenu
                        isOpen={menuOpen}
                        onClose={() => setMenuOpen(false)}
                    />

                    <CartDrawer
                        isOpen={cartOpen}
                        onClose={() => setCartOpen(false)}
                    />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
