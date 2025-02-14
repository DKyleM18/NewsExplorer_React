import "./About.css";
import avatarImage from "../../assets/about-avatar.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about__avatar">
        <img className="about__avatar-image" src={avatarImage} alt="Avatar" />
      </div>
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__info-text">
          <b>Kyle Messersmith</b>: I am a Full Stack Developer from North
          Carolina, currently living in Ohio. I have been learning web
          development with TripleTen&apos;s Software Engineering Bootcamp. I
          have skills in HTML, CSS, JavaScript, React, Node.js, Express.js, and
          MongoDB.
        </p>
        <p className="about__info-text">
          Studying web development at TripleTen has been a great learning
          experience for me. I have learned how to create dynamic and
          interactive web pages using HTML, CSS, and JavaScript, how to build
          client-side and server-side applications using React and Node.js, and
          how to use MongoDB to store and retrieve data. I am excited to
          continue learning and applying these skills in future projects.
        </p>
      </div>
    </section>
  );
}
