# Divergence Meter Visitor Counter

![Divergence Meter](https://el-psy-kangoroo.glitch.me/counter?random=123456) 
Welcome to my Divergence Meter Visitor Counter! Inspired by the Steins;Gate anime, this project tracks the number of visitors to my GitHub profile in a fun and visually appealing way.

## Features

- **Dynamic Visitor Count**: Each time you refresh your profile, the visitor count increments.
- **Customizable Design**: The counter is rendered using canvas, allowing for unique visual elements.
- **Cache Busting**: Implemented to ensure the image updates correctly on GitHub.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/defaltastra/divergence.git
   cd divergence
   ```

2. **Install dependencies**:

   ```bash
   npm install express canvas lowdb
   ```

3. **Run the server**:

   ```bash
   node server.js
   ```

4. **Access your counter**:

   Open your browser and go to `http://localhost:3000/counter`.

### Deployment

You can deploy this project on platforms like [Glitch](https://glitch.com/) or [Heroku](https://www.heroku.com/) for public access.

## Usage

To display the visitor counter on your GitHub profile, add the following Markdown to your profile's README:

```markdown
![Divergence Meter](https://your-glitch-url.glitch.me/counter?timestamp=123456)
```

Replace `your-glitch-url` with the URL where your server is hosted. Change the `timestamp` value each time you want to force a refresh.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the Steins;Gate anime.
- Uses [Express](https://expressjs.com/) for the server and [canvas](https://github.com/Automattic/node-canvas) for image rendering.

Feel free to explore my repositories and projects! If you have any questions or suggestions, feel free to open an issue or contact me!
