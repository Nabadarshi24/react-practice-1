import React from 'react'
import Card from './Card'
import CardDetails from './CardDetails'

function CardList() {
  const cards = [
    {
      imgUrl: "/images/blog_image1.jpg",
      detailsImgUrl: "/images/card-details-img-1.jpg",
      linkUrl: "/category/hoverbic/",
      linkText: "Hoverbic",
      title: "The worlds most popular fashion blogger",
      desc: "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri",
      footer: "Last updated 3 mins ago"
    },
    {
      imgUrl: "/images/blog_image2.jpg",
      detailsImgUrl: "/images/card-details-img-2.jpg",
      linkUrl: "/category/fashion/",
      linkText: "Fashion",
      title: "Brand New Fashion Line for 2018",
      desc: "Lorem ipsum dolor sit amet, sed summo dolores torquatos cu. Everti antiopam assentior ea mei, per erant dicant interpretaris ad.",
      footer: "Last updated 3 mins ago"
    },
    {
      imgUrl: "/images/blog_image3.jpg",
      detailsImgUrl: "/images/card-details-img-3.jpg",
      linkUrl: "/category/fashion/",
      linkText: "Fashion",
      title: "Budget Friendly Fashion Blogger",
      desc: "If you’re anything like me, one of your favorite pasttimes, amongst Netflix bingeing and cake baking, is looking at fashion blogs",
      footer: "Last updated 3 mins ago"
    },
    {
      imgUrl: "/images/blog_image4.jpg",
      detailsImgUrl: "/images/card-details-img-4.jpg",
      linkUrl: "/category/fashion/",
      linkText: "Fashion",
      title: "How to Become a Successful Fashion Designer",
      desc: "Want to know how to become a successful fashion designer? If you’ve spent your formative years watching “Project Runway,” reading",
      footer: "Last updated 3 mins ago"
    },
    {
      imgUrl: "/images/blog_image5.jpg",
      detailsImgUrl: "/images/card-details-img-5.jpg",
      linkUrl: "/category/lifestyle/",
      linkText: "Lifestyle",
      title: "How to Be a Good Friend on Social Media",
      desc: "Being a good friend isn’t always easy, but taking the time to nurture a lasting friendship is worth every ounce",
      footer: "Last updated 3 mins ago"
    },
    {
      imgUrl: "/images/blog_image6.jpg",
      detailsImgUrl: "/images/card-details-img-6.jpg",
      linkUrl: "/category/food/",
      linkText: "Food, Restaurant",
      title: "Let’s Cook Some Tasty Things With Chef Charlie",
      desc: "Gieui cu solum dolor iudico, minim omittam dissentiunt eam no, ad mea solum aeque consul. In consequat efficiantur qui, te",
      footer: "Last updated 3 mins ago"
    }
  ]
  const isTrue = false;

  const CardList = cards.map(card =>
    <div className="card cp col-4">
      <Card card={card} />
    </div>
  )

  return (
    <div>
      <div className="header">
        <h1>Famous Blog Template</h1>
      </div>
      <div className="card-sectiom">
        <div className="container">
          <div className="row cm">
            {CardList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardList
