import members from "../services/data";

import "../style/Members.scss";

function Members() {
  return (
    <section className="MembersComponent">
      {members.map((member) => (
        <div key={member.name} className="member">
          <h4>{member.name}</h4>
          <img src={member.photo} alt={member.name} />
          <a href={member.github}>Check my Github</a>
        </div>
      ))}
    </section>
  );
}

export default Members;
