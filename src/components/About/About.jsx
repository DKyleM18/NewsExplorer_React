import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__avatar">
        <img
          className="about__avatar-image"
          src="/src/assets/about-avatar.png"
          alt="Avatar"
        />
      </div>
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__info-text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__info-text">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}
