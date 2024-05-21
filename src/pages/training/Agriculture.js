import React from 'react'

const Agriculture = () => {
  return (
    <div>
      <section class="hero d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h1 class="display-3 fw-bold">
          Thrive: Cultivate Your Future in Agriculture
        </h1>
        <p class="lead mb-4">
          Empowering individuals with the skills and knowledge to succeed in the
          ever-growing agricultural industry.
        </p>
        <a href="#training-programs" class="btn btn-lg btn-primary">
          Explore Our Programs
        </a>
      </section>

      <section class="training-programs container py-5" id="training-programs">
        <h2 class="text-center mb-4">Agriculture Training Programs</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://www.iiaasd.com/wp-content/uploads/2019/10/Banner-1.jpg"
                class="card-img-top"
                alt="Vegetable Gardening"
              />
              <div class="card-body">
                <h5 class="card-title">Vegetable Gardening Basics</h5>
                <p class="card-text">
                  Learn how to grow your own fresh vegetables at home,
                  regardless of your experience level.
                </p>
                <a href="/register" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFwfticiJjLYg2SIbtvXYD2_X-jimJJTgzLnP60WhODnFT_rjqrsrZPyNzwRVwEVlJMc&usqp=CAU"
                class="card-img-top"
                alt="Livestock Farming"
              />
              <div class="card-body">
                <h5 class="card-title">Sustainable Livestock Management</h5>
                <p class="card-text">
                  Gain the knowledge and skills to raise healthy and productive
                  livestock while caring for the environment.
                </p>
                <a href="/register" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Agriculture
