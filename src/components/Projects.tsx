export default function Projects() {
  return (
    <div className="projectlist-container">
      <p className="projectlist-p" id="projectlist">These are some of my projects</p>
      <div className="projectlist">
        <a
          href="https://stocks-anku-js.vercel.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="Stocks.jpg"
            alt="screenshot of react table project"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Stock Watch
            <span className="code">/&gt;</span>
          </p>
        </a>
        <a
          href="https://emojis-black.vercel.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="Emojis.jpg"
            alt="screenshot of Emojis project"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Emojis
            <span className="code">/&gt;</span>
          </p>
        </a>
        <a
          href="https://friendslist-imt4anqpi-anku-js.vercel.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="friends.jpg"
            alt="screenshot of friend's list project"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Friend's List
            <span className="code">/&gt;</span>
          </p>
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
          <p className="project-title">
            <span className="code">&lt;</span>
            Tenzies
            <span className="code">/&gt;</span>
          </p>
        </a>
        <a
          href="https://edyoda-ypyn.vercel.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="edyoda screenshot.jpg"
            alt="screenshot of assessment project"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            Assessment
            <span className="code">/&gt;</span>
          </p>
        </a>
        <a
          href="https://react-table-three.vercel.app/"
          target="_blank"
          className="project"
        >
          <img
            className="project-image"
            src="react-table.jpg"
            alt="screenshot of react table project"
          />
          <p className="project-title">
            <span className="code">&lt;</span>
            React Table
            <span className="code">/&gt;</span>
          </p>
        </a>
      </div>
    </div>
  );
}
