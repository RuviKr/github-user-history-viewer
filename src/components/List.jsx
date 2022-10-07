import Item from "./Item";

const List = (props) => {
    let rows = [];

    props.repos.map((repo, index) => rows.push(
        <Item key={index} repo={repo} />
    ));

    return (
        <div>
            <h4>ללקוח יש {rows.length} ריפוזיוטוריז פתוחים</h4>
            <div className="list-group">
                {rows}
            </div>
        </div>
    );
}

export default List;