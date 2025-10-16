import ramyaresume from "../pdf/ramya krishna pitaka resume77.pdf";
function Resume() {
  return (
    <div className="container mt-5">
     
      <iframe
        src={ramyaresume}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Resume"
      ></iframe>
    </div>
  );
}
export default Resume


