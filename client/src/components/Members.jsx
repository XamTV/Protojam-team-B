import members from "../services/data";
import github from "../assets/images/github.png";

import "../style/Members.scss";

function Members() {
  return (
    <section className="MembersComponent">
      {members.map((member) => (
        <div key={member.name} className="member">
          <h4>{member.name}</h4>
          <img className="member-img" src={member.photo} alt={member.name} />
          <a href={member.github} target="_blank" rel="noreferrer">
            <img className="github-logo" src={github} alt="github" />
            Check my Github
          </a>
        </div>
      ))}
    </section>
  );
}

export default Members;
