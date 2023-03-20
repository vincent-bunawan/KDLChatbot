const tableFeatures = ({features}) => {
  return (
    <div className="w-100">
      <div className="flex-column input-container h-75">
        <textarea
          className="message-input"
          type="text"
          placeholder="What do you want to make..."
        //   value={features}
        //   onChange={handleChange}
        //   disabled={loading}
        />
      </div>
    </div>
  );
};

export default tableFeatures;
