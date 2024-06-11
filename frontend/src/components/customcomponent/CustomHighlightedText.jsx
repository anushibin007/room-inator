import Highlighter from "react-highlight-words";

export default function CustomHighlightedText({ text }) {
	return (
		<>
			<Highlighter
				highlightClassName="highlighted-text"
				searchWords={["right", "left", "straight"]}
				autoEscape={true}
				textToHighlight={text}
			/>
		</>
	);
}
