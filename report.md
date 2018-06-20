# 9994086 5209 Assignment 3 Report

## Frameworks Researched

### Semantic-UI
The frameworks I looked into included Semantic-UI, which I was interested in due to its reputation for being easy to use and versatile, offering many ready made themes for free that could be used as a starting point to cut down development time.

### Bootstrap
Bootstrap is the most popular framework and the one I am most familiar with which would cut down on the learning curve reducing development time, it also makes it easy to create a responsive layout and my layout varies a lot between desktop and mobile. 

### Foundation
Foundation interested me because of its use on so many popular websites and the ability to make heavily customized, good looking websites, it is considered more complex than other frameworks but would perhaps be suited to a design like mine.

### Pure
Pure is a much more lightweight framework that is designed to be styled by the developer while offering tools to make layout simple, this could be useful due to the heavily stylised nature of my design as I will likely have to do a certain amount of styling regardless of what framework I work with. 

## Framework Chosen

### Pure - First Attempt
I have decided to develop my website with Pure for several reasons. One of Pure’s main selling points is its small footprint, touting a total size of just 3.8KB when compressed. Loading times are always important in web applications and in my situation even more so as my application is designed for natural disasters and emergencies. Users will want to be able to quickly access the application and make use of its functionality, not to mention that there is a good chance than in such emergencies internet access will not be reliable and bandwidth will need to be conserved. 

Pure does not offer as much out of the box functionality as a more meaty framework like Bootstrap but for that reason I think it is well suited to my design due to my design not necessarily being cookie cutter and requiring much configuration regardless of the framework chosen. Pure is therefore just as useful as Bootstrap to me while being far less bloated. 

Pure’s forms will be easily configured to suit my design, which is quite heavy on forms due to the nature of the application. Out of the frameworks I looked into, none of the buttons quite matched my design visually but this is another case where Pure being designed for customisation means it is well suited to my application.


## Bootstrap - Final Choice
Once I had started developing with Pure, I decided to switch to Bootstrap. A big factor in my decision was Bootstrap’s polished navbars. Pure offers menu functionality that can be used to construct a custom navbar but I found it wasn’t up to scratch for my design. I found myself having to use flexbox to make changes to the layout, which itself is easier done with Bootstrap which offers flexbox functionality as classes for the html. Bootstrap’s navbar is also inherently responsive in a way that was well suited to my design. I still had to customise the Bootstrap navbar to meet my needs but it definitely saved me a lot of development time.

## Framework Components Used

### Navbar

https://getbootstrap.com/docs/4.0/components/navbar/

This is the documentation for Bootstrap’s navbar. This page was my main point of reference for my navbar but I did run into some issues that I needed other help with.

https://getbootstrap.com/docs/4.0/utilities/flex/

I had an issue where my navbar links weren’t aligning to the right properly. Initially to solve this I used Bootstrap’s inbuilt flexbox functionality. However, in the end I decided to give the .navbar-brand class explicit width instead to solve layout issues I was having with how the logo and page title were displayed.

https://stackoverflow.com/questions/18529274/change-navbar-color-in-twitter-bootstrap

I had issues with my navbar colours not changing when I changed them in CSS. Several answers from this Stackoverflow page were useful for realising I had to change some of the classes on my navbar or my colours would be overwritten with Bootstrap’s themes. After that, it just took trial and error with my CSS file to get things how I wanted them.

### Buttons

https://getbootstrap.com/docs/4.0/components/buttons/

I used a lot of Bootstrap buttons in my website. I really only referenced the official documentation for this as all the changes I made to the buttons were through custom CSS and Javascript but the documentation itself was very useful, especially learning that I can use the button classes on \<a> tags to turn a whole button into a link.

### Forms

https://getbootstrap.com/docs/4.0/components/forms/

The only other Bootstrap functionality I used in my website were forms. Bootstrap forms are really well designed and though it took some customisation to get them to act as responsively as I needed, the official documentation was sufficient for learning how to implement them in my website.

### Layout

It’s also notable that I chose not to use Bootstrap’s grids or columns for my layout. I found that CSS Grid gave me the amount of control I wanted over my layout, allowing me to fine tune how the site displays on different screen sizes. This is not a slight to Boostrap’s layout functionality but more a testament to the power of CSS Grid and how CSS now brings powerful layout potential out of the box.

## Parts Not Completed

My map does not function as intended. I intended to have an overlay when a marker is clicked that shows the person's information and allows to message them. I did research how to implement this but using CSS it would not be dynamic like I intended and wouldn't make sense. There seemed to be a way to use the Google Maps API to implement this but I found the Javascript to be beyond my level of programming knowledge. Instead I have relied on the inbuilt functionality of Google Maps so that when a marker is clicked the person's information is shown in a sidebar. 
