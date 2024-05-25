/** @format */

const SearchBox = ({ onChange }) => {
	return (
		<div>
			<label>
				Find contacts by name
				<input
					type="text"
					onChange={onChange}
				/>
			</label>
		</div>
	);
};

export default SearchBox;
