import PropTypes from 'prop-types';

export default function PlusMinus({ data, setData, id, max }) {
  const increment = () => {
    setData(prevCount => (prevCount < max ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setData(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <div className="flex items-center justify-between mt-4 mb-4">
      <span className="text-gray-900 font-bold text-lg pl-5">Quantity</span>
      {max !== 0 ? (
        <div className="border border-black rounded-md w-fit m-auto">
          <button
            onClick={increment}
            className="pr-2 pl-2 p-1 duration-300 hover:bg-gray-300"
          >
            +
          </button>
          <span className="pr-3 pl-3 p-1">{data}</span>
          <button
            onClick={decrement}
            className="pr-2 pl-2 p-1 duration-300 hover:bg-gray-300"
          >
            -
          </button>
        </div>
      ) : (
        <p className="text-red-500">Stok Habis</p>
      )}
    </div>
  );
}

PlusMinus.propTypes = {
  data: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
  id: PropTypes.number, // id sebenarnya tidak dipakai di fungsi increment/decrement
  max: PropTypes.number.isRequired,
};
