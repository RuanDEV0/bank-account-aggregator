import './database/index.js';
import app from './app.js';

const PORT = process.env.PORTSERVER;

app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
