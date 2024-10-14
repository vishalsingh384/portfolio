import { easeIn, easeInOut, easeOut, motion } from 'framer-motion'

const About = (props) => {
    console.log(props);
  return (
    <motion.span
      initial={{ x: "-650px" }}
      animate={{ x: props.x }}
      transition={{ delay: props.timer}}
      className="p-5 w-4/5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 text-gray-500 font-semibold rounded-full tracking-wider"
    >
      {props.desc}
    </motion.span>
  );
};

export default About;
