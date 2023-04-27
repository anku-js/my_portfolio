export default function Projects() {
  return (
    <div className="projectlist-wrapper">
      <p className="projectlist-p">These are some of my projects...</p>
      <div className="projectlist">
        <a href="" target="_blank" className="project">
          <img className="project-image" src="friends.jpg" />
          <p className="project-title">Friend's List</p>
        </a>
        <a
          href="https://main--luminous-monstera-f0a7de.netlify.app/"
          target="_blank"
          className="project"
        >
          <img className="project-image" src="shopping.jpg" />
          <p className="project-title">Shopping</p>
        </a>
        <a
          href="https://tenzies-wheat-one.vercel.app/"
          target="_blank"
          className="project"
        >
          <img className="project-image" src="tenzies.jpg" />
          <p className="project-title">Tenzies</p>
        </a>
      </div>
    </div>
  );
}
