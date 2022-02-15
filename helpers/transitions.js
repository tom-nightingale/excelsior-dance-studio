export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: .75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: .75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const fadeInUp = {
  initial: {
    translateY: 10,
    opacity: 0
  },
  enter: { 
    translateY: 0,
    opacity: 1,
    transition: { duration: .75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    translateY: 10,
    opacity: 0,
		transition: { duration: .75, ease: [0.83, 0, 0.17, 1] }
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

export const listTabs = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      delayChildren: .25,
      staggerChildren: 0.2
    },
  },
  exit: {
    opacity: 0,
  }
}

export const staggerTabs = {
  initial: {
    opacity: 0,
    y: 30
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 30,
  }
}

export const listTeachers = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: .25,
      delayChildren: .25,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      delay: .25,
      delayChildren: .25,
      staggerChildren: 0.2,
    },
  }
}