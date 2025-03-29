const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}
/* Refactored for performance */
// Fixed alignment issue
// review socket timeout
// update logic
// TODO: enhance validation
// Socket.io event listener
// TODO: enhance validation
// optimized rendering
// debugging log
// TODO: enhance validation