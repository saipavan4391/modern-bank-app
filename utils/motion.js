export const navVariants= {

    hover: {
        scale:1.2,   
    },

    hidden:{
        opacity:0,
        y:-50,
        transition:{
            type:"spring",
            stiffness:800,
            damping:100
        },
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            stiffness:300,
            damping:100
        },
    },


}