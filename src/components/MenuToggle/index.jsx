import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="square"
    {...props}
  />
);

const menuVariants = {
  open: {
    x: -20,
    y: 25,
    width: '70vW',
    height: '100vh',
    borderRadius: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

export const MenuToggle = ({ toggle }) => (
  <>
    <motion.div className="circle" variants={menuVariants}></motion.div>
    <button onClick={toggle} className="hamburger-button">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  </>
);
