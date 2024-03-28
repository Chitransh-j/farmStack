import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="mt-10w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="text-center">
          <span className="grblue_gradient">Tips from Around the</span>🌍{" "}
        </span>
      </h1>
      <p className="desc text-center">
        FarmStack is an Open-Source online community for farmers to discover and
        share farming techniques around the world.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
