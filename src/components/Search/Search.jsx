import PropTypes from "prop-types";
import style from "./Search.module.css";

const Search = ({ search, setSearch }) => {
    return (
        <div className={style.search}>
            <h2>Pesquisar:</h2>
            <input
                type="text"
                value={search}
                placeholder="Digite para pesquisar..."
                onChange={(e) => setSearch(e.target.value)}
            ></input>
        </div>
    );
};
Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};

export default Search;
