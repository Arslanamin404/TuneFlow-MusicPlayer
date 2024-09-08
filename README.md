# TuneFlow-MusicPlayer Web Application

A user-friendly web-based music player that allows you to enjoy your favorite songs with features like seamless navigation, volume control, and track details. The player also includes on-screen notifications to enhance the user experience.

## Features

- **Play/Pause Control**: Start or pause the currently playing track with a single click.
- **Next/Previous Track**: Navigate between songs in the playlist using the next and previous buttons.
- **Track Information**: Displays song name, artist, and cover image for each track.
- **Volume Control**: Adjust the audio volume via a slider.
- **On-Screen Notifications**: Professional messages are displayed when attempting to navigate beyond the playlist.

## Technologies Used

- **HTML**: Markup structure for the UI.
- **tailwindCSS CDN**: For styling the elements.
- **JavaScript**: For handling functionality like playing songs, navigation, and volume control.

## How to Use

1. Clone this repository or download the project files.
2. Make sure to include your audio files in the `Assets` folder.
3. Open `index.html` in your web browser to start the music player.
4. Use the play, next, and previous buttons to control the playback. Adjust the volume with the slider.

## Customization

### Adding/Editing Songs

Modify the `songList` array in the JavaScript file to add new songs or edit existing ones. Ensure that you provide the correct song URLs, artist names, and poster images.

```javascript
const songList = [
    {
        songName: "Your Song Name",
        songUrl: "Assets/Your Song.mp3",
        artist: "Artist Name",
        poster: "https://example.com/path-to-image.jpg"
    },
    // Add more songs here
];
