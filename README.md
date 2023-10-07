# YouTube to MP3 Converter
This is a Progressive Web App (PWA) built with React that allows you to convert YouTube videos to MP3 files using an API.

## Installation
To install the app, run the following command:

```
npm i
```

## Usage
To start the app, run the following command:

```
npm start
```

This will start the app in development mode and open it in your default browser. You can then enter a YouTube URL in the input field and click the "Convert" button to convert the video to an MP3 file.

## Production Build
To create a production build of the app, run the following command:

```
npm run build
```

This will create an optimized build of the app in the build directory.

## Service Worker
This app uses a service worker to provide offline functionality and faster loading times. If you want to disable the service worker, you can do so by commenting out the following line in src/index.js:

## API
This app uses an API to convert YouTube videos to MP3 files. The API is provided by [https://api.vevioz.com/](https://api.vevioz.com/).

## License
This app is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgements
This app was built using the create-react-app tool with the pwa template.
