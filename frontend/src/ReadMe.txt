Responsive navbar design by IT22322876 ======================================================================

Please follow these steps before integrating this into main project.

1) To use this navbar, you have to install following packages via npm:
  
  react-icons - https://www.npmjs.com/package/react-icons
  command ==> npm install react-icons --save
  # This package is used for icons

  @headlessui/react - https://www.npmjs.com/package/@headlessui/react
  command ==> npm install @headlessui/react
  # Used for menus, dropdowns and transitions

  @heroicons/react - https://www.npmjs.com/package/@heroicons/react
  command ==> npm install @heroicons/react
  # This too is used for icons

  react-intersection-observer - https://www.npmjs.com/package/react-intersection-observer
  command ==> npm install react-intersection-observer --save
  # Tells when an element enters or leaves the viewport

2) HeaderV2.jsx is the main component.
   DO NOT delete these files: Dropdown.jsx, DropdownV2.jsx (dependencies)

3) This is fixed to the top and automatically adjusts (responsive) between 500px and 1536px screen sizes.

4) Services and  Careers are dropdown menus, which contains set of related links.
   You can add or modify items in the list, their names and hrefs, just under the function 'Header' in HeaderV2.jsx.

5) You can switch between how navbar looks when user logged in or not, simply by changing a variable:
   Guest user - userLoggedIn = false
   Logged in user - userLoggedIn = true

6) You have to make necessary changes in your App.jsx and tailwind.config.js.

   App.jsx - copy and paste all necessary code, which is already implemented to detect when header changes its height and to automatically set top padding for all the pages. This is demonstrated in all added dummy pages (you have to delete all dummy pages, add real pages and modify routes as required), you are passing header's height (dynamically) + 24px as top padding for all the pages. otherwise page content will overlap the navbar.

   tailwind.config.js - copy and paste this file to your project, overwrite existing. Custom screen breakpoints are added for responsive design.
   xsm - 540px, mdsm - 730px, mid2 - 900px, mid1 - 1200px

7) You can change colors too if you like, but DO NOT touch responsive code unless you are faimilar. It may break the layout and make this appear weird. Please contact me if you have any doubts 😁😁.