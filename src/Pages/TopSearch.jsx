import React from 'react';
import RootLayout from '../Layout/RootLayout';
import TopSearchCard from '../Components/TopSearchCard';


const TopSearch = () => {
  // Example data for the TopSearchCards
  const routes = [
    { routeFrom: 'Dhaka', routeTO: 'Chittagong', duration: '5h 30m', price: '850', acType: 'AC', travelClass: 'Economy' },
    
    { routeFrom: 'Dhaka', routeTO: 'Coxs Bazar', duration: '6h 45m', price: '1200', acType: 'Non-AC', travelClass: 'Business' },
    { routeFrom: 'Dhaka', routeTO: 'Rangamati', duration: '6h 30m', price: '1100', acType: 'AC', travelClass: 'Economy' },
    { routeFrom: 'Dhaka', routeTO: 'Sylhet', duration: '6h 15m', price: '1400', acType: 'AC', travelClass: 'Business' },
    { routeFrom: 'Sylhet', routeTO: 'Dhaka', duration: '6h 45m', price: '1300', acType: 'Non-AC', travelClass: 'Economy' },
  ];

  return (
    <RootLayout className="space-y-12">
      {/* Tagline */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl text-neutral-800 font-bold">
          Top Searched <span className="text-blue-500">Routes</span>
        </h1>
      </div>

      {/* Top Search Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {routes.map((route, index) => (
          <TopSearchCard
            key={index}
            routeFrom={route.routeFrom}
            routeTO={route.routeTO}
            duration={route.duration}
            price={route.price}
            acType={route.acType}
            travelClass={route.travelClass}
          />
        ))}
      </div>
    </RootLayout>
  );
};

export default TopSearch;
