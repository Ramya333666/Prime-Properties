import logo from './logo.svg';
import './App.css';
import './index.css';
import house from './house.png';
import home from './home.png';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
import home3 from './home3.jpg';
import california from './california.jpg';
import chicago from './chicago.jpg';
import newyork from './newyork.jpg';
import avatar from './avatar.png';
import youtube from './youtube.png';
import instagram from './instagram.png';
import github from './github.png';


function App() {
  return (
    <div>
      <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
              <a class="flex item-center py-4 px-2"href="#">
                <img class="h-8 w-8 mr-2" src={home} alt=""></img>
                <span class="font-semibold text-gray-500 text-lg">Prime properties</span>
              </a>
              </div>
            </div>
             <div class="flex space-x-1">
              <a class="py-4 px-2 text-gray-500 border-green-500 border-b-4 hover:text-green-500 transition-duration-5- font-semibold" href="">Home</a>
              <a class="py-4 px-2 text-gray-500 border-green-500  hover:text-green-500 transition-duration-5- font-semibold" href="">Service</a>
              <a class="py-4 px-2 text-gray-500 border-green-500  hover:text-green-500 transition-duration-5- font-semibold" href="">About</a>
              <a class="py-4 px-2 text-gray-500 border-green-500  hover:text-green-500 transition-duration-5- font-semibold" href="">Contact</a>
             </div>
          </div>
        </div>
      </nav>
      <main class="mt-10 px-4 text-center md:mt-16">
        <div class="sm:text-center lg:text-left text-center">
          <h1 class="font-extrabold text-4xl">
            <span class="block">Premium Properties</span>
            <span class="block text-green-500">Non-Premium Properties</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl">
            At Prime properties, we ensure that our clients get the best
            properties at affordable prices. Luxury is our priority
            and budget is our constrain.Pick and choose wise.
          </p>
        </div>
        <div class="mt-5 sm:flex sm:justify-center">
        <div class="md:m-3">
        <a class="flex justify-center bg-green-500 text-white px-8 py-3 border-y-2 rounded-md bg-green-500 text-white"href="">View properties</a>
        </div>
        <div class="md:m-3">
          <a class="flex justify-center bg-green-500 text-white px-8 py-3 border-y-2 rounded-md bg-green-500 text-white" href="">Explore Locations</a>
        </div>
        </div>
      <center>
      <div class="mt-9 justify-center">
        <h2 class="text-3xl text-gray-500 justify-center">Recent properties</h2>
      </div>
      </center>
      <div class="p-10 grid gap-7 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
       <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src={home1} alt=""></img>
        <div class="px-4 py-2">
        <h1 class="font-bold text-xl mb-2">Orchid villa</h1>
        <p class="text-gray-700">
        Step into Orchid Villa, where contemporary design meets timeless elegance. 
        Nestled amidst lush greenery, this luxurious villa offers a serene escape from the hustle
         and bustle of everyday life. With its stunning architecture and meticulously designed interiors, Orchid Villa is a haven of tranquility and beauty.
        </p>
        <div class="px-3 pt-4 ">
            <button class="inline-block bg-green-500 rounded-full px-4 py-1">View Property</button>
       </div>
        </div>
        <br></br>
       </div>
       <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
       <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src={home2} alt=""></img>
        <div class="px-4 py-2">
        <h1 class="font-bold text-xl mb-2">Hill Palace</h1>
        <p class="text-gray-700">
        Welcome to Hill Palace Villa, a sanctuary of luxury and tranquility nestled in the heart of breathtaking natural landscapes. Offering the perfect blend of elegance and comfort, Hill Palace Villa is your ideal retreat for an unforgettable escape.
        </p>
        <div class="px-6 pt-4 pb-10">
            <button class="inline-block bg-green-500 rounded-full px-4 py-1">View Property</button>
            <br></br>
       </div>
        </div>
       </div>
       </div>
       <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
       <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src={home3} alt=""></img>
        <div class="px-4 py-2">
        <h1 class="font-bold text-xl mb-2">Paradise villa</h1>
        <p class="text-gray-700">
        Escape to a world of luxury and tranquility at Paradise Villa, your private haven nestled in a stunning natural setting. Designed for those who seek the ultimate in comfort and privacy, Paradise Villa offers a unique blend of elegance, sophistication, and unparalleled serenity.
        </p>
        <div class="px-6 pt-4 pb-10">
            <button class="inline-block bg-green-500 rounded-full px-4 py-1">View Property</button>
            <br></br>
       </div>
        </div>
       </div>
       </div>
      </div>
      <div class="mt-9 justify-center">
        <h2 class="text-3xl text-gray-500 justify-center">Locations</h2>
      </div>

      <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
       <div class="rounded overflow-hidden shadow-lg">
        <center>
        <img class="w-96 h-96" src={newyork} alt=""></img>
        </center>
        <div class="px-4 py-2">
        <h1 class="font-bold text-xl mb-2">New York</h1>
        <p class="text-gray-700">
        New York City is known for its diverse and vibrant neighborhoods. From the historic brownstones of Brooklyn to the high-rise apartments in Manhattan, each area offers a unique living experience. Popular neighborhoods include:
   <ul>
<li>Manhattan: Known for its iconic skyline, luxury apartments, and proximity to major attractions like Central Park, Times Square, and Wall Street.</li>
<li>Brooklyn: Offers a mix of historic charm and modern amenities, with popular areas like Williamsburg, DUMBO, and Park Slope.</li>
</ul>
        </p>
        </div>
        </div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
       <div class="rounded overflow-hidden shadow-lg">
       <center>
        <img class="w-96 h-96" src={california} alt=""></img>
        </center>
        <div class="px-4 py-2">
        <h1 class="font-bold text-xl mb-2">New York</h1>
        <p class="text-gray-700">
        California, known as the Golden State, is a place of stunning natural beauty, diverse cultural experiences, and a thriving economy. From its breathtaking coastline to its majestic mountains,
         California offers an unparalleled lifestyle that attracts people from all over the world.
        </p>
        </div>
        </div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
       <div class="rounded overflow-hidden shadow-lg">
        <center>
        <img class="w-96 h-96" src={chicago} alt=""></img>
        </center>
        <div class="px-4 py-2">
        <h1 class="font-bold text-xl mb-2">chicago</h1>
        <p class="text-gray-700">
        Chicago, known as "The Windy City," is a vibrant metropolis located on the shores of Lake Michigan. It is renowned for its stunning architecture, rich cultural heritage, and diverse neighborhoods. As the third-largest city
         in the United States, Chicago offers a unique blend of urban excitement and Midwestern charm.
        </p>
        </div>
        </div>
        </div> 
        <div class="mt-20 flex p-10 justify-center">
            <h2 class="text-3xl text-gray-500 mb-2">  What Clients say about us ?</h2>
        </div> 
        <div class="p-10 grid gap-7 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div class="shadow-lg  bg-white rounded-xl p-4">
            <p class="text-gray-600">
              <span class="text-green-500 text-lg font-bold">"</span>
              I recently used Prime Properties to explore real estate options, and my experience has been outstanding.
              The website is incredibly easy to navigate. From searching properties to detailed listings, everything is laid out intuitively.
              Feel free to adjust any details to better fit your personal experience with Prime Properties!
              <span class="text-green-500 text-lg font-bold">"</span>
            </p>
            <div class="flex bg-green-100 items-center rounded-full">
              <a href="" class="block relative">
                <img class="rounded-full mx-auto" src={avatar}></img>
              </a>
              <div class=" justify-between ">
                <span class="text-sm text-green-500 font-semibold">Santhosh</span>
                <br></br>
                <span class="text-xs">Director</span>
              </div>
            </div>
          </div>
          <div class="shadow-lg bg-white rounded-xl p-4">
            <p class="text-gray-600">
              <span class="text-green-500 text-lg font-bold">"</span>
              I recently used Prime Properties to explore real estate options, and my experience has been outstanding.
              The website is incredibly easy to navigate. From searching properties to detailed listings, everything is laid out intuitively.
              Feel free to adjust any details to better fit your personal experience with Prime Properties!
              <span class="text-green-500 text-lg font-bold">"</span>
            </p>
            <div class="flex bg-green-100 items-center rounded-full">
              <a href="" class="block relative">
                <img class="rounded-full mx-auto" src={avatar}></img>
              </a>
              <div class=" justify-between ">
                <span class="text-sm text-green-500 font-semibold">Abishek</span>
                <br></br>
                <span class="text-xs">Director</span>
              </div>
            </div>
          </div>
          <div class="shadow-lg bg-white rounded-xl p-4">
            <p class="text-gray-600">
              <span class="text-green-500 text-lg font-bold">"</span>
              I recently used Prime Properties to explore real estate options, and my experience has been outstanding.
              The website is incredibly easy to navigate. From searching properties to detailed listings, everything is laid out intuitively.
              Feel free to adjust any details to better fit your personal experience with Prime Properties!
              <span class="text-green-500 text-lg font-bold">"</span>
            </p>
            <div class="flex bg-green-100 items-center rounded-full">
              <a href="" class="block relative">
                <img class="rounded-full mx-auto" src={avatar}></img>
              </a>
              <div class=" justify-between ">
                <span class="text-sm text-green-500 font-semibold">Kanna</span>
                <br></br>
                <span class="text-xs">Director</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-20 flex p-10 justify-center">
            <h2 class="text-3xl text-gray-500 mb-2">Contact Us</h2>
        </div>
        <div class="bg-green-300 mt-5 flex p-10 justify-center items-center">
          <form action="w-full max-w-lg">
           <div class="flex gap-56 mb-6">
              <div class="w-full ">
                <label class=" uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">First Name</label>
                <input type="text" class="block w-full border border-green-500 py-3 px-4 rounded" placeholder="ramya"></input>
              </div>
              <div class="w-full">
                <label class=" uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Last Name</label>
                <input type="text" class="block w-full border border-green-500 py-3 px-4 rounded" placeholder="gajasri"></input>
              </div>
            </div> 
            <div class="flex mx-3 mb-6">
            <div class="w-full">
                <label class=" uppercase text-xs text-gray-700  font-bold mb-2 ">Email</label>
                <input type="text" class="block block w-full border border-green-500 py-3 px-4 rounded" placeholder="gajasriramya@gmail.com"></input>
              </div>
              </div>
              <div class="flex mx-3 mb-6">
            <div class="w-full">
                <label class=" uppercase text-xs text-gray-700  font-bold mb-2 ">Message</label>
                <textarea type="text" class="block block w-full no-resize appearance-done resize-none
                  border border-green-500 py-3 px-4 rounded h-48" placeholder="comments"></textarea>
              </div>
              </div>
              <div>
                <div>
                  <button class="shadow bg-green-400 text-white py-2 px-4">Send</button>
                </div>
              </div>
          </form>
        </div>

        <footer class="pt-40 px-4">
          <div class="container flex flex-col justify-between mx-auto space-y-8">
            <div>
              <a href="" class="flex justify-center">
                <div class="flex w-12 h-12">
                  <img src={house} class="h-8 w-8 mr-2"></img>
                </div>
                <span class="font-semibold text-gray-500 text-2xl">
                  Prime Properties
                  </span> 
              </a>
            </div>
            <div class="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4">
              <div class="space-y-3">
                <h3 class="text-green-500 uppercase tracking-wide">Product</h3>
                <ul class="space-y-1">
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Integrations</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                </ul>
                </div>
                <div class="space-y-3">
                  <h3 class="text-green-500 uppercase tracking-wide">Company</h3>
                  <ul class="space-y-1">
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Integrations</a>
                  </li>
                </ul>
                </div>
                <div class="space-y-3">
                  <h3 class="text-green-500 uppercase tracking-wide">Developers</h3>
                  <ul class="space-y-1">
                  <li>
                    <a href="">Public API</a>
                  </li>
                  <li>
                    <a href="">Documentation</a>
                  </li>
                  <li>
                    <a href="">Guides</a>
                  </li>
                </ul>
                </div>
                <div class="space-y-3">
                  <h3 class="text-green-500 uppercase tracking-wide">Social Media</h3>
                  <div class="flex justify-start">
                     <a href="">
                      <center>
                      <ul>
                        <li><img src={instagram}></img></li>
                        <li><img src={youtube}></img></li>
                        <li><img src={github}></img></li>
                      </ul>
                      </center>
                     </a>
                  </div>
                </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
