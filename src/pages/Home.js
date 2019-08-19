import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/Services";

import FeaturedRoom from "../components/FeaturedRooms";

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title='Luxurious rooms' subtitle='deluxe rooms tarting at $299'>
                    <Link to='/rooms' className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
        </>
    );
}
