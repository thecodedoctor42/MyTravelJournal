import fiji from "./assets/turtle-island.webp"
import redSea from "./assets/red-sea-diving.jpg"
import yosemite from "./assets/yosemite-park.webp"

export default [
    {
        id: 1,
        title: "Yosemite Park",
        location: "CALIFORNIA, USA",
        googleMapsUrl: "https://www.google.com/maps?rlz=1C1ONGR_enGB1054&q=yosemite+park&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiG9K647Nj-AhUGS8AKHVmLDUAQ_AUoAXoECAEQAw",
        startDate: "3 Aug, 2020",
        endDate: "27 Aug, 2020",
        description: "Yosemite national park offers an array of activities such as hiking among mighty redwoods & rafting along tranquil rivers.",
        image: yosemite
    },
    {
        id: 2,
        title: "Red Sea Diving",
        location: "EGYPT",
        googleMapsUrl: "https://www.google.com/maps/place/Red+Sea/@24.2613263,30.8834009,6z/data=!4m6!3m5!1s0x15b91b7a37f530e5:0xbab428a1529071c7!8m2!3d20.280232!4d38.512573!16zL20vMDZqZmQ",
        startDate: "18 Mar, 2021",
        endDate: "5 Apr, 2021",
        description: "The Red Sea offers a truly unforgettable experience above and below water. Thousands of visitors a year are seduced by this area’s unique combination of spectacular marine life, welcoming climate and stunning scenery.",
        image: redSea
    },
    {
        id: 3,
        title: "Turtle Island",
        location: "FIJI",
        googleMapsUrl: "https://www.google.com/maps/place/Turtle+Island+Fiji/@-16.9654468,177.3685481,17z/data=!3m1!4b1!4m9!3m8!1s0x6e179272beb4713d:0xd2f7ebd21a16567e!5m2!4m1!1i2!8m2!3d-16.9654468!4d177.3707368!16s%2Fg%2F1tk4rbqm",
        startDate: "3 Jan, 2023",
        endDate: "1 Feb, 2023",
        description: "Turtle Island is a 500-acre private island retreat located in Fiji’s Yasawa Islands. Turtle Island offers a sustainable and authentic experience that celebrates the Fijian way of life.",
        image: fiji
    },
]