import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Now = () => (
  <Layout>

    <div id={"now_container"}>

      <h2 className={"now_page_content"}>August 7th, 2020</h2>

      <p className={"now_page_content"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero neque, lobortis eget interdum non, laoreet id nisi. Cras in arcu non dui blandit efficitur. Etiam ante ex, aliquam blandit auctor ut, consequat a dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>

      <p className={"now_page_content"}>
        Cras eu lectus semper, vestibulum magna id, pellentesque nibh. Phasellus lacinia venenatis facilisis. Aliquam non velit ac risus vestibulum ultricies. Suspendisse porttitor feugiat sodales. Vestibulum eget turpis in leo hendrerit pharetra non a justo. Nulla dictum purus sit amet pretium mollis. Mauris pellentesque metus id lacus blandit luctus.
      </p>

      <p className={"now_page_content"}>
        Integer quis pulvinar dui. Vestibulum posuere urna quis condimentum laoreet. Duis nec consequat nunc. Ut pellentesque, velit eu tempor rutrum, ante diam viverra leo, sit amet dictum nulla neque vitae velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>


    </div>

    <div className={"column_ctr title_container"}>
      <h1>NOW.</h1>
    </div>

  </Layout>
)

export default Now;
