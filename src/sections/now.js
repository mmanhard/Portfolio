import React from "react"

const Now = () => (
  <section id={'now'}>

    <div id={"now_container"}>

      <h2 className={"now_page_content"}>August 7th, 2020</h2>

      <h5 className={"now_page_small_header"}>WORKING</h5>

      <p className={"now_page_content"} style={{marginBottom: 10}}>
        I left the field of structural engineering in January to pursue software engineering. Since then, I’ve been working part-time with Calibrate Consulting while I study and build the projects you’ve seen in this portfolio.
      </p>

      <p className={"now_page_content"}>
        I’m now focused on getting a full-time role as a software engineer.
      </p>

      <h5 className={"now_page_small_header"}>STUDYING</h5>

      <p className={"now_page_content"}>
        Reading and taking online classes about databases, particularly PostgreSQL, and system design.
      </p>

      <h5 className={"now_page_small_header"}>LIVING</h5>

      <p className={"now_page_content"}>
        Still in Chicago. Buckling down since March.
      </p>

      <h5 className={"now_page_small_header"}>DOING</h5>

      <p className={"now_page_content"} style={{marginBottom: 10}}>
        My decision to grow peppers last summer spiraled into a full rooftop garden this year. Just made a batch of salsa verde and started some pepper ferments this past weekend.
      </p>

      <p className={"now_page_content"}>
        Also:
        <ul>
          <li>Training our new puppy, Plato.</li>
          <li>Riding my bike to swim in Lake Michigan.</li>
          <li>Learning how to cut my own hair (terribly).</li>
        </ul>
      </p>



    </div>

    <div className={"column_ctr title_container"}>
      <h1>NOW.</h1>
      <a id={"now_anchor"} href={"https://nownownow.com/about"}>What is this?</a>
    </div>

  </section>
)

export default Now;
