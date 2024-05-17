const NumberSelector = ({ setSelectedValue, selectedValue }) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleNumberClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="final">
      <div className="flex justify-end">
        {numbers.map((value) => (
          <div
            key={value}
            onClick={() => handleNumberClick(value)}
            className={`text-black flex justify-center items-center bg-white border border-black w-12 h-12 ${
              selectedValue === value ? 'bg-red-100' : 'bg-red-200'
            }`}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="mr-5 text-end my-0">
        <h1 className="my-4 mb-5">Select Number</h1>
        <h1>The selected value is: {selectedValue}</h1>
      </div>
    </div>
  );
};

export default NumberSelector;
