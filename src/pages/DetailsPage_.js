import React, { useCallback, useEffect } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm_";
import FeaturedImage from "parts/FeaturedImage";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "store/actions/page";

function DetailsPage_() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const dispatch = useDispatch();

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const fnLoadPage = useCallback(
    async (id) => {
      if (!page[id]) {
        const response = await dispatch(fetchPage(`/detail-page/${id}`, id));

        document.title = `Staycation | ${response.title}`;
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    fnLoadPage(id);
  }, [id]);

  if (!page[id]) return null;

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} />
      <FeaturedImage />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetailDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm />
            </Fade>
          </div>
        </div>
      </section>

      <Activities data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />
      <Footer />
    </>
  );
}

export default DetailsPage_;
