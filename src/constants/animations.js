export const containerMotion = {
  hidden: {
      opacity: 0,
  },
  show: {
      opacity: 1,
      transition: {
          type: 'spring',
          mass: 0.4,
          when: "beforeChildren"
      }
  }
}

export const boxMotion = {
  hidden: {
      scale: 0
  },
  show: {
      scale: 1,
      transition: {
          delay: 0.2
      }
  }
}