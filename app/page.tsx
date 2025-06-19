import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh", padding: "2rem" }}>
      <h1><strong>B.E. Programs (Part-Time)</strong></h1>
      <p>
        IET is presently offering <strong>Part-Time 4-Year B.E. Programs</strong> in the following five branches:
      </p>
      <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc",marginTop: "1rem" }}>
        <li>B.E. (Mechanical Engineering)</li>
        <li>B.E. (Computer Engineering)</li>
        <li>B.E. (Electronics & Instrumentation Engineering)</li>
        <li>B.E. (Information Technology)</li>
        <li>B.E. (Electronics & Telecommunication Engineering)</li>
      </ul>
    </div>
  );
}
