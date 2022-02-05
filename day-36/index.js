const data = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
}
const transcription = (dna) => {
	const result = dna.split("").map(element => data[element]);
    return result.join("");
}