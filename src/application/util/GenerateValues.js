class GenerateValues {
	generateAgencyNumber() {
		const flex = Math.floor(1 + Math.random() * 9);
		return `000${flex}`;
	}
}

export default new GenerateValues();
