import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ filter, setFilter }) => {
    return (
        <div className={style.filter}>
            <h2>Filtrar por categoria:</h2>
            <div>
                <div>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Concluídas</option>
                        <option value="Incomplete">Pendentes</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
    setSort: PropTypes.func.isRequired,
};

export default Filter;
