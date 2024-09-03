const createApp = Vue.createApp


createApp({
    data() {
        return {
            message: 'This image goes hard, feel free to screenshot.',
            imageUrl: 'https://i.imgflip.com/6vhwnx.jpg'
        }
    }

}).mount('#displayer')


