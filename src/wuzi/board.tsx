interface SquareProps {
    value: string; 
    onClick: () => void;
}

const Square = (props: SquareProps) => (
    <button className="square" onClick={() => props.onClick()}>
        {props.value}
    </button>
);

interface BoardProps {
    squares: string[];
    onClick: (num: number) => void;
}

const Board = (props: BoardProps) => {
    const renderRow = (i: number) => {
        return (
            <div key={i} className="board-row">
                {[...new Array(15).keys()].map(num =>
                    <Square key={num + i}
                        value={props.squares[num + i]}
                        onClick={() => props.onClick(num + i)} />)}
            </div>
        );
    };

    return (
        <div>
            {[...new Array(15).keys()].map(num => renderRow(num * 15))}
        </div>
    );
}

export default Board;