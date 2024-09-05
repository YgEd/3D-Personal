import { motion } from "framer-motion";

export default function Interface() {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

const Section = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.25,
        },
      }}
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
    >
      {children}
    </motion.section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-mono">
        Hi
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="italic"
        >
          I'm
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="font-bold"
        >
          Josh
        </motion.span>
      </h1>
      <br />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
        className="text-lg text-gray-400"
      >
        I'm trying to learn
        <br />
        3D Front End things
      </motion.p>
    </Section>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      title: "Next.js",
      level: 50,
    },
    {
      title: "React",
      level: 50,
    },
    {
      title: "Eating Cheezits",
      level: 80,
    },
  ];

  return (
    <Section>
      <h1 className="text-6xl font-mono">Skills</h1>
      <br />
      <p className="text-lg text-gray-400">What I bring to the table</p>
      <motion.div whileInView={"visible"} className="mt-8 space-y-4">
        {/* PROGRESS BAR BELOW */}
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <h3 className="text-lg text-gray-600">{skill.title}</h3>
            {/* PROGRESS BAR SECTION */}
            <div className="h-2 w-full rounded-full mt-2 bg-white">
              <motion.div
                initial={{ scaleX: 0 }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 0.25 + index / 5,
                      type: "spring",
                      stiffness: 125,
                    },
                  },
                }}
                // transformOrigin: left is important as it allows the scaling to happen form left to right and not the middle
                style={{ width: `${skill.level}%`, transformOrigin: "left" }}
                className="h-full bg-purple-700 rounded-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  return (
    <Section>
      <h1>Projects</h1>
    </Section>
  );
};

const LabelInput = ({ name, input = true }) => {
  return (
    <>
      <label for={name} className="font-median text-gray-800 mb-1 block">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {input ? (
        <input
          type="text"
          name={name}
          id={name}
          className="w-full font-median text-gray-800 mb-4 rounded-sm border-none bg-gray-100 ring-2 ring-gray-500 p-1"
        ></input>
      ) : (
        <></>
      )}
    </>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h1 className="px-2 text-4xl font-mono mb-4">Contact Me</h1>
      <div className="p-6 bg-white rounded-lg w-70 h-3/4 max-w-full">
        <form className="px-3">
          <LabelInput name={"name"} />
          <LabelInput name={"email"} />
          <LabelInput name={"message"} input={false} />
          <textarea
            maxLength={100}
            name="message"
            id="message"
            className="w-full h-full font-median text-gray-800 mb-4 rounded-sm border-none bg-gray-100 ring-2 ring-gray-500 p-1 resize-none"
          />
          <button
            disabled={true}
            className="mt-3 font-mono text-xl bg-purple-700 text-white p-3 rounded-md ring-1 ring-gray-400 hover:cursor-pointer"
          >
            Send!
          </button>
        </form>
      </div>
    </Section>
  );
};
