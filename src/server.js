import app from './app';

const PORT = process.env.PORTSERVER;

app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
