import { useEffect } from "react";
import "../Styles/About_page.css";

const AboutPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="aboutpage dot_section">
      <div className="top">
        <div className="about_text">
          <div className="section_heading">
            <h3>About Us.</h3>
          </div>
          <div className="about_desc">
            <p>
              HARVIS is a trading and a multi-domain infrastructure project
              development firm. Our project significance focuses on road
              transportation engineering projects, which include the building
              and maintenance of roads, highways, flyovers, and bridges as
              required by the projects. We specialize in providing innovative
              solutions for businesses and organizations in a variety of
              industries.
            </p>

            <p>
              Our trading division deals in a wide range of products and
              services, including commodities, energy, and industrial goods. We
              have a team of experts who have extensive knowledge and experience
              in the global market, ensuring that our clients get the best deals
              and prices.
            </p>

            <p>
              Our multi-domain infrastructure project development division is
              dedicated to creating and implementing sustainable solutions for
              transportation, water management, and renewable energy.We intend
              to expand into new business divisions while reinforcing existing
              ones and investing in infrastructure.
            </p>

            <p>
              We have a proven track record of delivering projects on time and
              within budget, while ensuring the highest quality standards.
            </p>
          </div>
        </div>
        <div className="pg_slider"></div>
      </div>
      <div className="middle">
        <div className="about_text">
          <div className="section_heading">
            <h3>Vision.</h3>
          </div>
          <div className="about_desc">
            <p>
              HARVIS is a trading and a multi-domain infrastructure project
              development firm. Our project significance focuses on road
              transportation engineering projects, which include the building
              and maintenance of roads, highways, flyovers, and bridges as
              required by the projects. We specialize in providing innovative
              solutions for businesses and organizations in a variety of
              industries.
            </p>

            <p>
              Our trading division deals in a wide range of products and
              services, including commodities, energy, and industrial goods. We
              have a team of experts who have extensive knowledge and experience
              in the global market, ensuring that our clients get the best deals
              and prices.
            </p>

            <p>
              Our multi-domain infrastructure project development division is
              dedicated to creating and implementing sustainable solutions for
              transportation, water management, and renewable energy.We intend
              to expand into new business divisions while reinforcing existing
              ones and investing in infrastructure.
            </p>

            <p>
              We have a proven track record of delivering projects on time and
              within budget, while ensuring the highest quality standards.
            </p>
          </div>
        </div>
        <div className="about_text">
          <div className="section_heading">
            <h3>Mission.</h3>
          </div>
          <div className="about_desc">
            <p>
              HARVIS is a trading and a multi-domain infrastructure project
              development firm. Our project significance focuses on road
              transportation engineering projects, which include the building
              and maintenance of roads, highways, flyovers, and bridges as
              required by the projects. We specialize in providing innovative
              solutions for businesses and organizations in a variety of
              industries.
            </p>

            <p>
              Our trading division deals in a wide range of products and
              services, including commodities, energy, and industrial goods. We
              have a team of experts who have extensive knowledge and experience
              in the global market, ensuring that our clients get the best deals
              and prices.
            </p>

            <p>
              Our multi-domain infrastructure project development division is
              dedicated to creating and implementing sustainable solutions for
              transportation, water management, and renewable energy.We intend
              to expand into new business divisions while reinforcing existing
              ones and investing in infrastructure.
            </p>

            <p>
              We have a proven track record of delivering projects on time and
              within budget, while ensuring the highest quality standards.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="section_heading">
          <h3>Our CEO.</h3>
          <div className="ceo_detail">
            <img src={require("../assets/photos/harinath.jpg")} alt="" />
            <div className="ceo_desc">
              <h4>Mr. Harinath</h4>
              <h5>
                "Nesciunt et facilis atque incidunt qui voluptatem non. Facere id
                voluptatem dolore velit a Laborum dolorum"
              </h5>
              <p>
                Numquam quo asperiores impedit aut. Optio dolorem eum
                quia.Nesciunt et facilis atque incidunt qui voluptatem non.
                Facere id voluptatem dolore velit a. Laborum dolorum
                voluptatibus deleniti id id quo ea voluptate incidunt. Laborum
                reiciendis qui aut officia doloribus veniam quidem dignissimos
                id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
