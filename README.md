# Resume-App

An application showcasing some of my works

# App description

This application showcases some of my technical skills, as well as some of my past history. The app in itself is built using javascript (react native) and react navigations. The features include stylish fonts, carousel (swipable cards), language translation (french and english) and dark mode

# Code base decription

-App.js: This is more like the root of the application. It enables the drawer and stack navigations andd it controls the properties of each screen as well as the drawer component. It also works with the context.js file which allows it to use state values within the entire application

-The app is structured based on components and assets. Let's look at each one

-Assets folder: It contains the possible language translations, it contains the fonts that would be loaded in the application and it contains images which are used in the application (at the about screen, the splash screen, the carousel, and the works screen)

-Components folder:<br />
~Splash folder:This folder contains the splash.js file. It's main purpose is to welcome the user to the application. It uses a useEffect and settimeout hooks, and a navigation property to load the splash screen and automatically navigate to the carousel <br />
~Portfoli-features folder:This folder is divided into the following components <br />
*About.js: This component displays the image at the top screen, and displays the TEXT component which showcases my skills and my name. At the bottom is a button that can navigate the user to the settings screen <br />
*Carousel.js: This component is responsible for displaying the carousel slides. This component made use of the react native gesture handler to handle user feedback <br />
*Context.js: This component is responsible for holding the state values across multiple components. It works based on the react context API provider. It holds the state for the light and dark mode <br />
*Settings.js: This component is responsible for controlling the themee across the application. It enables and disables the dark and light modes <br />
*Works.js: This component is responsible fordisplaying images which are snapshots of my previous works and text descriptions of each task

# Design description

The design was based on giving the user a pleasant onboarding experience into the application hencen the use of a splash screen as well as carousel slides. The app was based on thhe drawer navigation so as to aid easier navigation between pages. It uses a simple theme of white and pink.

# Library descriptions

-MaterialCommunityIcons: This packahe was used to display the icons because it has a very elegant icon style and has a smooth integration. It is based off of vector icons package <br />
-React navigation: This package was opted for navigation simply because of its high performance and ease of use as well as different features for customization. <br />
-Expo screen orientation: This package was used because it allows for fetching the user's current screen orientation seamlessly and it being an expo package, has a very simple integration process <br />
-Expo localization: This package was used because it allows for asynchronously reading the user's preferred localization and locale. This allows for easy language translation. It comes pre-bundled with the i18n package which is the international standard for language translation <br />
-React native gesture handler: This package was used simply because it allows for reading the user's interaction with the screen. With this package, it becomes easier detecting motion and was implemented in creating the carousel <br />
-Expo google fonts: This package was used because apart from an active support directly from google, it has a plethora of available fonts that can be used <br />

# More features if there was time

-Improve carousel slide <br />
-Improve the work screen user interface <br />
-Integrate filesystem to download resume as a pdf <br />
-Vibration <br />
-Implement camera <br />

# Link to APK

[Link to apk](https://drive.google.com/file/d/1Y4vTu4mvnGq9tlw4aliNIlSTwIJxcBZ8/view)

# Problem description

I had a lot of problems developing the work component. The problem was mainly because the social icons button was being superimposed on the flatlist and flatlist being flatlist doesn't allow a view outside of it. I had to use the prop LISTFOOTERCOMPONENT to display it at the bottom. Also i had a problem with the images. The images are screenshots saved locally and because i was using an object to display my images, i had to use a image to url converter to extract the url from within the jpg image

# Link to Appetitze.io

[Link to Appetize.io](https://appetize.io/app/vyf27p63e76kliou7ylef7rzra)
