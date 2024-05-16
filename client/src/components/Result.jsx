/* eslint-disable react/prop-types */
function Result({ data }) {
  return (
    <section className="ResultComponent">
      <img src={data.picture} alt={data.name} />
      <h1>{data.name}</h1>
      <p>{data.text}</p>
    </section>
  );
}

export default Result;
