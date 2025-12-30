import perfil from '../assets/images/perfil.png';


const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-text">
          <h1>Sobre mí</h1>
          <p>
            Estudiante de Ingeniería de Sistemas en la Universidad César Vallejo, con interés en aplicar los 
conocimientos adquiridos durante mis estudios. He participado en proyectos académicos que 
me han permitido desarrollar habilidades. Me considero una persona comprometida, con 
ganas de aprender y mejorar constantemente. Busco realizar mis prácticas preprofesionales 
para ganar experiencia, aportar valor y seguir creciendo como profesional. 
          </p>
        </div>

        <div className="about-image">
          <img
  src={perfil}
  alt="Foto de perfil"
  className="profile-image"
/>

        </div>

      </div>
    </section>
  );
};

export default About;
