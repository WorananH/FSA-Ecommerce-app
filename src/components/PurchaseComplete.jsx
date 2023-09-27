import complete from "../assets/complete.mp4";

const PurchaseComplete = () => {
  return (
    <div>
      <div>
        <video
          src={complete}
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%" }}
        />
        <div className="content text-orange-900 font-bold">
          <h2>Purchase Completed!</h2>
          <p>
            Thank you for your recent purchase. We are honored to gain you as a
            customer and hope to serve you for a long time.
          </p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 color-blue-800 hover:bg-gray-700 hover:text-white font-bold mt-3 ">
        <a href="/">Continue Shopping!</a>
      </div>
    </div>
  );
};

export default PurchaseComplete;
