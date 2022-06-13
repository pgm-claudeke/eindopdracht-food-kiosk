export const containerMotion = {
  hidden: {
      opacity: 0,
  },
  show: {
      opacity: 1,
      transition: {
          type: 'tween',
          ease: "easeInOut",
          duration: 0.1,
          when: "beforeChildren"
      }
  }
}

export const pageSwitch = {
  hidden: {
      y: '100vh'
  },
  show: {
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
      }
  },
  exit: {
    y: '-100vh',
    transition: {
      delay: 0.5
    }
  }
}