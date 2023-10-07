import React from 'react'
import withPreloader from '../../Component/withPreloader';
import PageHeader from '../../Component/PageHeader';
import galleryImage from '../../Images/galleryImage.jpg'

const galleryData = [
  {
    id: 1,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 2,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 3,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 4,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 5,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 6,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 7,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 8,
    title: 'Title',
    imageSrc: galleryImage,
  }, {
    id: 9,
    title: 'Title',
    imageSrc: galleryImage,
  },
];

const Gallery = () => {
  return (
    <>
      <section className="page">
        <PageHeader title="Gallery" subtitle="Explore Our Musical Journey in Pictures." />
        <div className="page-bottom">
          <div className="container">
            <div className="row">
              {galleryData.map((gallery) => (
                <div key={gallery.id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-post">
                    <div className="img">
                      <img src={gallery.imageSrc} alt={`Service: ${gallery.title}`} />
                    </div>
                    <div className="post-content">
                      <h3>{gallery.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withPreloader(Gallery)
