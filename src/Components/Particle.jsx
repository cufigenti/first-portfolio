import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Particle() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={{
                "fullScreen": {
                    "enable": false,
                    "zIndex": 1
                },
                "style": {
                    "position": "absolute",
                    "height": "100%",
                    "top": "0",
                    "left": "0"
                },
                "fpsLimit": 120,
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": true
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "triangle"
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 3,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 13,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 20,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            
                            "parallax": {
                                "enable": true,
                                "smooth": 10,
                                "force": 60
                            }
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "triangle": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 0.8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 700
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 3
                        }
                    }
                },
                "retina_detect": true,
                "background": {
                    "color": "#00000",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}

        />
    )
}

export default Particle