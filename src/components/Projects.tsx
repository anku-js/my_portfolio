export default function Projects() {
  return (
    <div className="projectlist-container" id="projectlist-container">
      <p className="projectlist-p">These are some of my projects...</p>
      <div className="projectlist">
        <a href="" target="_blank" className="project">
          <img
            className="project-image"
            src="friends.jpg"
            alt="screenshot of friend's list project"
          />
          <p className="project-title">Friend's List</p>
        </a>
        <a
          href="https://main--luminous-monstera-f0a7de.netlify.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="shopping.jpg"
            alt="screenshot of shopping app project"
          />
          <p className="project-title">Shopping</p>
        </a>
        <a
          href="https://tenzies-wheat-one.vercel.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="tenzies.jpg"
            alt="screenshot of tenzies game project"
          />
          <p className="project-title">Tenzies</p>
        </a>
        <a
          href="https://edyoda-ypyn.vercel.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="edyoda screenshot.jpg"
            alt="screenshot of tenzies game project"
          />
          <p className="project-title">Tenzies</p>
        </a>
      </div>
    </div>
  );
}
