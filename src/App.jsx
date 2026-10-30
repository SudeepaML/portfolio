import profile from "./assets/portfolio.jpeg";

function App() {
  return (
    <div style={{
      backgroundColor: "#081b29",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial"
    }}>

      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px",
        alignItems: "center"
      }}>

        <h2 style={{
          color: "#00abf0",
          fontSize: "32px"
        }}>
          Portfolio
        </h2>

        <div style={{
          display: "flex",
          gap: "30px",
          fontSize: "18px"
        }}>

          <p style={{
            cursor: "pointer",
            transition: "0.3s"
          }}>
            Home
          </p>

          <p style={{
            cursor: "pointer",
            transition: "0.3s"
          }}>
            About
          </p>

          <p style={{
            cursor: "pointer",
            transition: "0.3s"
          }}>
            Skills
          </p>

          <p style={{
            cursor: "pointer",
            transition: "0.3s"
          }}>
            Projects
          </p>

          <p style={{
            cursor: "pointer",
            transition: "0.3s"
          }}>
            Contact
          </p>

        </div>

      </nav>

      {/* Hero Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px 80px",
        minHeight: "80vh",
        gap: "40px"
      }}>

        {/* Left Content */}
        <div style={{
          maxWidth: "600px"
        }}>

          <h1 style={{
            fontSize: "65px",
            lineHeight: "90px",
            marginBottom: "20px"
          }}>
            Hi, I'm <br />

            <span style={{
              color: "#00abf0"
            }}>
              Sudeepa M L
            </span>

          </h1>

          <h2 style={{
            fontSize: "42px",
            marginBottom: "10px"
          }}>
            Full Stack Developer
          </h2>

          <h3 style={{
            fontSize: "26px",
            color: "#00abf0",
            marginBottom: "20px"
          }}>
            Cloud & Android Enthusiast
          </h3>

          <p style={{
            fontSize: "20px",
            color: "#b0b0b0",
            lineHeight: "35px",
            marginBottom: "30px"
          }}>
            I build modern websites and Android applications
            using React, Java, Firebase and modern technologies.
          </p>

          {/* Buttons */}
          <div style={{
            display: "flex",
            gap: "20px"
          }}>

           <button
  style={{
    padding: "14px 30px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(90deg,#00abf0,#8a2be2)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.4s ease"
  }}

  onClick={() => window.open("https://www.linkedin.com/in/sudeepa-ml-4575372aa/git remote add origin https://github.com/itzsudeep/portfolio.git")}

  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.08)"
    e.currentTarget.style.boxShadow = "0 0 25px #8a2be2"
  }}

  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)"
    e.currentTarget.style.boxShadow = "none"
  }}
>
  Hire Me
</button>

           <button
  style={{
    padding: "14px 30px",
    borderRadius: "30px",
    border: "2px solid #00abf0",
    background: "transparent",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.4s ease"
  }}

  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#00abf0"
    e.currentTarget.style.transform = "scale(1.08)"
  }}

  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "transparent"
    e.currentTarget.style.transform = "scale(1)"
  }}
>
  View Work
</button>

          </div>

        </div>

        {/* Right Image */}
        <div>

          <img
            src={profile}
            alt="profile"
            style={{
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid #00abf0",
              boxShadow: "0 0 40px #00abf0"
            }}
          />

        </div>

      </div>

      {/* Skills Section */}
     <div id="skills" style={{
        padding: "80px 60px",
        textAlign: "center",
        marginTop: "50px"
      }}>

        <h1 style={{
          fontSize: "50px",
          marginBottom: "50px",
          color: "#00abf0"
        }}>
          My Skills
        </h1>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>

          {["Java", "React", "Firebase", "JavaScript", "Python", "MySQL"].map((skill) => (

            <div
              key={skill}
              style={{
                backgroundColor: "#112e42",
                padding: "30px",
                width: "220px",
                borderRadius: "20px",
                fontSize: "24px",
                fontWeight: "bold",
                boxShadow: "0 0 15px rgba(0,171,240,0.3)",
                cursor: "pointer",
                transition: "0.4s ease",
                transform: "translateY(0px)"
              }}
               onMouseOver={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)"
    e.currentTarget.style.boxShadow = "0 0 25px #00abf0"
  }}

  onMouseOut={(e) => {
    e.currentTarget.style.transform = "translateY(0px)"
    e.currentTarget.style.boxShadow = "0 0 15px rgba(0,171,240,0.3)"
  }}
            >
              {skill}
            </div>

          ))}

        </div>



      </div>

{/* Projects Section */}

<div style={{
  padding: "80px 60px",
  textAlign: "center"
}}>

  <h1 style={{
    fontSize: "50px",
    marginBottom: "50px",
    color: "#00abf0"
  }}>
    My Projects
  </h1>

 <div id="projects" style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  }}>

    {[
  {
  title: "KMPL Cricket Fund Management",
  tech: "Kotlin | Jetpack Compose | Firebase Realtime Database",
  desc: "Developed a cricket fund management platform with admin-controlled player management, monthly contribution tracking, paid and pending payment status, and Baddi Chitti principal and interest calculations.",
  link: "https://kmpl-cricket.vercel.app/"
},
  
      {
        title: "Loan Risk Analyzer",
        tech: "Java | Spring Boot | React | MySQL",
        desc: "Built a full stack web application for analyzing applicant loan risks using REST APIs and React dashboard."
      },

      {
        title: "Diabetic Retinopathy Detection",
        tech: "TensorFlow | OpenCV | Flask",
        desc: "Developed an AI-based system for early detection of diabetic retinopathy using CNN and retinal image analysis."
      },
      {
        title: "Kalavidara Balaga",
        tech: "Android | Firebase | Java",
        desc: "Developed an Android platform to support saree weavers with product showcase, image upload and pricing features."
      },
      {
        title: "Portfolio Website",
        tech: "React | JavaScript | CSS",
        desc: "Created a responsive personal portfolio website with modern UI and project showcase."
      }

    ].map((project) => (
      {project.link ? (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "12px 20px",
      borderRadius: "10px",
      backgroundColor: "#00abf0",
      color: "white",
      textDecoration: "none",
      cursor: "pointer"
    }}
  >
    View Live Project
  </a>
) : (
  <button
    style={{
      padding: "12px 20px",
      border: "none",
      borderRadius: "10px",
      backgroundColor: "#00abf0",
      color: "white",
      cursor: "pointer"
    }}
  >
    View Project
  </button>
)}

      <div
        key={project.title}
        style={{
          backgroundColor: "#112e42",
          padding: "30px",
          width: "320px",
          borderRadius: "20px",
          boxShadow: "0 0 15px rgba(0,171,240,0.3)",
          textAlign: "left",
           transition: "0.4s ease",
           transform: "translateY(0px)",
            cursor: "pointer"
        }}
          onMouseOver={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)"
    e.currentTarget.style.boxShadow = "0 0 25px #00abf0"
  }}

  onMouseOut={(e) => {
    e.currentTarget.style.transform = "translateY(0px)"
    e.currentTarget.style.boxShadow = "0 0 15px rgba(0,171,240,0.3)"
  }}
      >

        <h2 style={{
          marginBottom: "15px",
          color: "#00abf0"
        }}>
          {project.title}
        </h2>

        <p style={{
          color: "#b0b0b0",
          marginBottom: "15px",
          lineHeight: "28px"
        }}>
          {project.desc}
        </p>

        <h4 style={{
          marginBottom: "20px"
        }}>
          {project.tech}
        </h4>

        <button style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#00abf0",
          color: "white",
          cursor: "pointer"
        }}>
          View Project
        </button>

      </div>

    ))}

  </div>

</div>
{/* Contact Section */}

<div style={{
  padding: "80px 60px",
  textAlign: "center"
}}>

  <h1 style={{
    fontSize: "50px",
    marginBottom: "50px",
    color: "#00abf0"
  }}>
    Contact Me
  </h1>

 <div id="contact" style={{
    maxWidth: "600px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>

    <input
      type="text"
      placeholder="Enter your name"
      style={{
        padding: "18px",
        borderRadius: "10px",
        border: "none",
        fontSize: "18px",
        backgroundColor: "#112e42",
        color: "white"
      }}
    />

    <input
      type="email"
      placeholder="Enter your email"
      style={{
        padding: "18px",
        borderRadius: "10px",
        border: "none",
        fontSize: "18px",
        backgroundColor: "#112e42",
        color: "white"
      }}
    />

    <textarea
      placeholder="Enter your message"
      rows="6"
      style={{
        padding: "18px",
        borderRadius: "10px",
        border: "none",
        fontSize: "18px",
        backgroundColor: "#112e42",
        color: "white"
      }}
    ></textarea>

    <button style={{
      padding: "16px",
      border: "none",
      borderRadius: "10px",
      backgroundColor: "#00abf0",
      color: "white",
      fontSize: "18px",
      cursor: "pointer"
    }}>
      Send Message
    </button>

  </div>

</div>
{/* Footer */}

<footer style={{
  marginTop: "80px",
  padding: "30px",
  textAlign: "center",
  backgroundColor: "#06141f",
  color: "#b0b0b0",
  borderTop: "1px solid rgba(255,255,255,0.1)"
}}>

  <h2 style={{
    color: "#00abf0",
    marginBottom: "10px"
  }}>
    Sudeepa M L
  </h2>

  <p style={{
    marginBottom: "10px"
  }}>
    AI Full Stack Developer | cloud Enthusiast
  </p>

  <p>
    © 2026 All Rights Reserved
  </p>

</footer>
    </div>
  )
}

export default App
