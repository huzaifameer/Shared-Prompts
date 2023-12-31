import Feed from "@Components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden"/>
            <span className="darkBlue_gradient">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            SollydZAi is an open source AI prompting tool for modern worls to discover,
            create and share creative prompts.
        </p>
        <Feed/>
    </section>
  )
}

export default Home