const suggestions = [
  "Where is my order?",
  "Track my shipment",
  "Estimated delivery time for my order",
  "Can I change my delivery address?",
  "Why hasn’t my order arrived yet?",
  "How do I return a product?",
  "What is your return policy?",
  "When will I get my refund?",
  "Can I exchange an item?",
  "Suggest products for me",
];

const Hero = ({ setMessages, setChatBegin }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[70vw]">
      <img className="w-[5%]" src="logo.png" alt="logo" />
      <h1 className="font-semibold text-(--text-main) text-2xl">
        Welcome to BagBot
      </h1>
      <p className="text-(--text-light)">Your shopping assistant</p>
      <div className="flex justify-center items-center flex-wrap m-12 gap-4">
        {suggestions.map((suggestion, index) => (
          <button
            className="border border-(--text-light) rounded-full px-3 py-2 cursor-pointer transition duration-200 ease-in-out hover:text-white hover:bg-(--text-main)"
            key={index}
            onClick={() => {
              setMessages((prev) => [
                ...prev,
                { role: "user", text: suggestion },
              ]);
              setChatBegin(true);
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
