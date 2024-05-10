import React from 'react';
import MQTTSubscriber from './componentes/subcriptor';

const App: React.FC = () => {
  return (
    <>
      <main className='w-full h-full flex flex-row'>
        <aside className='bg-gray-800 text-white p-2 basis-[40%] h-screen'>  
          <MQTTSubscriber/>      
        </aside>
        <section className='flex-grow p-2 h-screen basis-[60%] flex flex-col'>
            <div className='flex justify-center'>
                <img src='https://via.placeholder.com/200x200' alt='placeholder' />
            </div>
            <div className='flex justify-center py-2'>
                <div>
                  <video controls width="1080" height="1200">
                    <source src="path/to/video.mp4" type="video/mp4"  />
                    Your browser does not support the video tag.
                  </video>
                </div>
            </div>
            <div className='flex justify-center'>
                Bienvenidos al centro medico
            </div>
        </section>
      </main>
    </>
  );
};

export default App;
