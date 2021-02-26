export const slide = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: 'spring',
            staggerChildren: .25

        }
    }
}