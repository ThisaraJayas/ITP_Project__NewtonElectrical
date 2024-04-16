import React from 'react';

const LatestNews = () => {
    return (
        
            <div className="ml-4"> {/* Add ml-4 class here */}
            <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3">Latest News</h3>
            <ol>
                <NewsItem
                    title="New Web Design"
                    date="04 / 02 / 2022"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."
                />
                <NewsItem
                    title="21 000 Job Seekers"
                    date="12 / 01 / 2022"
                    description="Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti."
                />
                <NewsItem
                    title="Awesome Employers"
                    date="21 / 12 / 2021"
                    description="Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo."
                />
            </ol>
        </div>
       
    );
};

const NewsItem = ({ title, date, description }) => {
    return (
        <li className="border-l-2 border-purple-600">
            <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                    <div className="flex justify-between mb-4">
                        <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{title}</a>
                        <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{date}</a>
                    </div>
                    <p className="text-gray-700 mb-6">{description}</p>
                    <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
                    <button type="button" className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
                </div>
            </div>
        </li>
    );
};

export default LatestNews;
