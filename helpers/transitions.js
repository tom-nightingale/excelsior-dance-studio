export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: .2, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.2, ease: [0.83, 0, 0.17, 1] }
	}
}

export const heroHeading = {
  initial: {
    translateY: 100
  },
  enter: { 
    translateY: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    translateY: 100,
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const heroSubheading = {
  initial: {
    translateY: -100 
  },
  enter: { 
    translateY: 0,
    transition: { duration: 1,  ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    translateY: -100,
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const heroButton = {
  initial: {
    opacity: 0
  },
  enter: { 
    opacity: 1,
    transition: { duration: .75, delay: .75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: .5, ease: [0.83, 0, 0.17, 1] }
	}
}