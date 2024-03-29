const particleJson = {
  backgroundMask: {
    cover: {
      color: '#000',
    },
    enable: true,
  },
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 300,
        duration: 2,
        opacity: 1,
        size: 200,
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: {
        value: '#fff',
      },
      distance: 150,
      enable: true,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 30,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
}

export default particleJson
