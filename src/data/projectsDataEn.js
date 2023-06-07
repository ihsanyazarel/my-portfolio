import filmIzlemeListesi from './images/filmIzlemeListesi.png'
import alisverisSepeti from './images/alisverisSepeti.png'
import minnetGunlugu from './images/minnetGunlugu.png'

export const projectsDataEn = () => {
    return [
        {
            id: 1,
            img: alisverisSepeti,
            title: "Shopping Cart",
            description: "You can add any book you want to the cart. You can increase or decrease the number of books you want from the Carts tab, and you can see the total price.",
            methodsofproject: ["react", "context API"],
            githubLink: "https://github.com/ihsanyazarel/fsweb-s11g1-shopping-cart",
            deployLink: "https://ihsanyazarel-shopping-cart.netlify.app/"
        },
        {
            id: 2,
            img: filmIzlemeListesi,
            title: "Movie Watch List",
            description: "You can scroll through the movies in order, you can go to the beginning or to the very end. You can add the movie you like to your favourites. You can remove the movie you want from the favorites list from the Favorites tab.",
            methodsofproject: ["react", "redux", "logger"],
            githubLink: "https://github.com/ihsanyazarel/fsweb-s10g3-redux-watchlist",
            deployLink: "https://movie-watchlist-ashen.vercel.app/"
        },
        {
            id: 3,
            img: minnetGunlugu,
            title: "Gratitude Diary",
            description: "You can take note of the events that make you happy through the new note tab. You can see all your notes in the All Notes tab. When you log in to the site at a later date, you can see all of your old notes.",
            methodsofproject: ["react", "redux thunk", "localStorage"],
            githubLink: "https://github.com/ihsanyazarel/fsweb-s10-challenge",
            deployLink: "https://grateful-diary-ten.vercel.app/notlar"
        },
        // {
        //     id: 4,
        //     img: project4,
        //     title: "Project 4",
        //     description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        //     methodsofproject: ["react", "redux", "netlify"],
        //     githubLink: "https://www.google.com/",
        //     deployLink: "https://www.google.com/"
        // },
        // {
        //     id: 5,
        //     img: project5,
        //     title: "Project 5",
        //     description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        //     methodsofproject: ["react", "redux", "netlify"],
        //     githubLink: "https://www.google.com/",
        //     deployLink: "https://www.google.com/"
        // },
        // {
        //     id: 6,
        //     img: project6,
        //     title: "Project 6",
        //     description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        //     methodsofproject: ["react", "redux", "netlify"],
        //     githubLink: "https://www.google.com/",
        //     deployLink: "https://www.google.com/"
        // },
    ]
}