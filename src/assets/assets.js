import logo from './logo.jpg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}
export const artistCategories = [
  "DJ",
  "Singer",
  "Stand-up Comedian",
  "Live Band",
  "Magician",
  "Dancer",
  "Anchor/Host"
];

export const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune"
];


// Artist Booking Platform Dummy Data (Modified from Hotel System)

// User Dummy Data (could be event manager or platform user)
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Event Organizer",
    "email": "event.organizer@example.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "eventOrganizer",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": ["Mumbai"]
}

// Artist Dummy Data (replacing hotel)
export const artistDummyData = {
    "_id": "artist_67f76393197ac559e4089b72",
    "name": "DJ Rhythm Blaze",
    "genre": "Electronic Dance Music",
    "contact": "+919876543210",
    "owner": userDummyData,
    "city": "Mumbai",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Artist Performances Dummy Data (replacing rooms)
export const performancesDummyData = [
    {
        "_id": "perf_67f7647c197ac559e4089b96",
        "artist": artistDummyData,
        "eventType": "Wedding",
        "pricePerHour": 20000,
        "amenities": ["Sound System", "Lighting", "Travel Included"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "perf_67f76452197ac559e4089b8e",
        "artist": artistDummyData,
        "eventType": "Corporate Event",
        "pricePerHour": 18000,
        "amenities": ["Sound System", "Stage Setup", "Travel Included"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "perf_67f76406197ac559e4089b82",
        "artist": artistDummyData,
        "eventType": "Club Night",
        "pricePerHour": 15000,
        "amenities": ["Free Drinks", "Live DJ", "Sound System"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "perf_67f763d8197ac559e4089b7a",
        "artist": artistDummyData,
        "eventType": "Private Party",
        "pricePerHour": 12000,
        "amenities": ["Live Setup", "Stage Lighting"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]

// Artist Bookings Dummy Data
export const artistBookingsDummyData = [
    {
        "_id": "book_67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "performance": performancesDummyData[1],
        "artist": artistDummyData,
        "eventDate": "2025-04-30T00:00:00.000Z",
        "durationHours": 2,
        "totalPrice": 36000,
        "venue": "The Grand Mumbai",
        "status": "confirmed",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-15T10:00:00.000Z"
    }
];
