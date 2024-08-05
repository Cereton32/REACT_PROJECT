import React from "react";

const Sidenav = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row h-screen bg-gray-200">
        <div class="w-full md:w-64 bg-gray-800 text-white">
          <div class="p-4">
            <h1 class="text-2xl font-bold">DosomoCoding</h1>
          </div>

          <nav class="p-2">
            <ul>
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-700">
                  About
                </a>
              </li>
            
            </ul>
          </nav>
        </div>

        <div class="flex-1 p-4">
          <h1>Main Content</h1>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
