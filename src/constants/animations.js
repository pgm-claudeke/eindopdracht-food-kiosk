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