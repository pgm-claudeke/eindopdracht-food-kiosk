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

export const boxMotion = {
  hidden: {
      scale: 0
  },
  show: {
      scale: 1,
      transition: {
          type: "spring",
          bounce: 0.35,
          duration: 0.4
      }
  }
}