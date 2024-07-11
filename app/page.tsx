import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="text-white w-full p-4 text-center">
        <h1 className="text-4xl font-bold mt-2">Article Generation Tool</h1>
      </header>
      <main className="flex-grow flex flex-col items-center p-6">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Create Articles Using the 5 W's</h2>
          <p className="text-lg mb-4">
            Generate coherent articles by answering all 5 W questions: What, Who, Why, Where, When, and How.
          </p>
          <img 
            src='https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg' 
            alt="Feature" 
            className="mx-auto rounded shadow-lg shadow-gray-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" 
          />
        </section>
       <Link href={'/dashboard'}>
       <Button className='bg-red-600 '>
          Get Started
        </Button>
       </Link>
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-lg text-white mb-4">
            Our tool uses advanced language models to generate detailed and engaging articles from a single topic input.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-red-600 shadow-2xl rounded-xl p-4">
              <h3 className="font-bold text-xl mb-2">Step 1</h3>
              <p>Enter your topic title.</p>
            </div>
            <div className="bg-white shadow-red-600 shadow-2xl rounded-xl p-4">
              <h3 className="font-bold text-xl mb-2">Step 2</h3>
              <p>Our tool analyzes and generates content.</p>
            </div>
            <div className="bg-white shadow-red-600 shadow-2xl rounded-xl p-4">
              <h3 className="font-bold text-xl mb-2">Step 3</h3>
              <p>Receive your article instantly.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
