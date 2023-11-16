<template>
  <main>
    <img class="vectorLeft vector" src="@/assets/Vector 6.svg" />
    <div class="flex flex-column wrapper py-4">
      <h1 class="mb-3 text-uppercase">About me</h1>
      <p class="mb-md-5 title">
        As a passionate Front-end developer keen on mathematics and sports, I embrace this field's challenges and
        constant evolution. With proficiency in React, Redux, JavaScript, HTML, CSS, Sass/Less, BEM, TypeScript, and
        Git/GitHub, I thrive on staying up-to-date with ever-changing technologies, frameworks, and tools. My soft
        skills include effective teamwork, conflict resolution, and self-motivation. Through expanding the client base
        and exploring new markets, I achieved a remarkable 17% increase in sales volumes in recent years. I aim to
        expand my expertise by learning Vue, Angular, and React Native. My English Level is Intermediate, and as I am
        improving my proficiency, I will defenitely enhance client communication, understanding of requirements, and
        confidence articulation of innovative solutions.
      </p>
    </div>

    <div class="flex flex-column mb-4">
      <h2 class="text-center text-uppercase">EXPERIENCE</h2>
      <h5>Frontend Developer</h5>
      <h6>Charity Organization "Project Future"</h6>
      <ol class="list-group list-group-numbered w-75">
        <li class="list-group-item">A list item</li>
        <li class="list-group-item">A list item</li>
        <li class="list-group-item">A list item</li>
        <li class="list-group-item">A list item</li>
        <li class="list-group-item">A list item</li>
      </ol>
    </div>

    <img class="vectorRight vector" src="@/assets/Vector 8.svg" />

    <div class="flex flex-column mb-4">
      <h5>Frontend Developer</h5>
      <h6>Charity Organization "Project Future"</h6>
      <ol class="list-group list-group-numbered w-75">
        <li class="list-group-item">
          Developed 10 diverse React applications, utilizing class components, hooks, and React routers, while
          implementing data processing functionality and client-server communication through APIs
        </li>
        <li class="list-group-item">
          Provided quality code reviews for over 40 projects, offering valuable suggestions and comments to team members
          and colleagues
        </li>
        <li class="list-group-item">
          Ensured clean, maintainable, and easily readable code (2k+ lines) following best practices and utilizing
          professional documentation
        </li>
        <li class="list-group-item">
          Proficient in application state management using Redux and Redux Toolkit for large and complex applications
        </li>
        <li class="list-group-item">
          Demonstrated expertise in creating high-quality webpages (10 HTML/CSS projects) from design to deployment,
          incorporating HTML, CSS, SASS, and JS, including animations and React transitions.
        </li>
      </ol>
    </div>

    <div class="flex flex-column mb-5">
      <h5>TRAINING / COURSES</h5>
      <ul class="list-group list-group w-75">
        <li class="list-group-item">
          <p class="m-0">Mate academy</p>
          <p class="m-0">Frontend Development Course</p>
        </li>
        <li class="list-group-item">
          <p class="m-0">ITVDN</p>
          <p class="m-0">Frontend Development Course</p>
        </li>
        <li class="list-group-item">
          <p class="m-0">Rolling Scopes School</p>
          <p class="m-0">JS / FRONT-END Course</p>
        </li>
        <li class="list-group-item">
          <p class="m-0">MDN Web Docs</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.vectorLeft {
  left: -25%;
}
.vectorRight {
  right: -25%;
}

.wrapper {
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
}

.title {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
  text-transform: capitalize;
}
</style>
