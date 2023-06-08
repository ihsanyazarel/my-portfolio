import filmIzlemeListesi from './images/filmIzlemeListesi.png'
import alisverisSepeti from './images/alisverisSepeti.png'
import minnetGunlugu from './images/minnetGunlugu.png'

export const projectsDataTr = () => {
    return [
        {
            id: 1,
            img: alisverisSepeti,
            title: "Alışveriş Sepeti",
            description: "Dilediğin kitabı sepete ekleyebilirsin. Carts sekmesinden istediğin kitabın sayısını artırabilir veya azaltabilirsin, toplam fiyatı görebilirsin.",
            methodsofproject: ["react", "context API"],
            githubLink: "https://github.com/ihsanyazarel/fsweb-s11g1-shopping-cart",
            deployLink: "https://ihsanyazarel-shopping-cart.netlify.app/"
        },
        {
            id: 2,
            img: filmIzlemeListesi,
            title: "Film İzleme Listesi",
            description: "Filmler arasında sırayla gezebilirsin, en başa veya en sona gidebilirsin. Beğendiğin filmi favorilere ekleyebilirsin. Favoriler sekmesinden istediğin filmi favoriler listesinden çıkarabilirsin.",
            methodsofproject: ["react", "redux", "logger"],
            githubLink: "https://github.com/ihsanyazarel/fsweb-s10g3-redux-watchlist",
            deployLink: "https://movie-watchlist-ashen.vercel.app/"
        },
        {
            id: 3,
            img: minnetGunlugu,
            title: "Minnet Günlüğü",
            description: "Yeni not sekmesi üzerinden seni mutlu eden olayları not alabilirsin. Tüm Notlar sekmesinden bütün notlarını görebilirsin. İleri bir tarihte siteye giriş yaptığında eski notlarının tümünü görebilirsin.",
            methodsofproject: ["react", "redux thunk", "localStorage","toastify"],
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