import React from 'react';
import { ChefHat } from 'lucide-react';
import RecommendationForm from './components/RecommendationForm';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantCard from './components/RestaurantCard';
import { sampleRestaurants } from './data/sampleData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Restaurant Recommendations</h2>
              <RecommendationForm />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;