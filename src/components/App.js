import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to my website</h1>

      <p style={styles.text}>
        This is the content of my website.
      </p>

      <p style={styles.footer}>
        © 2023 My Website. All rights reserved.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Times New Roman, serif",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  footer: {
    fontSize: "20px",
  },
};

export default App;
