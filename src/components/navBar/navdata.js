import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { CgCreditCard } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineCar } from "react-icons/ai";
import { SlNote } from "react-icons/sl";
import { BsHouse } from "react-icons/bs";
export const ADdata = [
  {
    name: "REGITERED # 1234567892",
    url: "#",
  },
  {
    name: "OPEN:9PM - 5PM",
    url: "#",
  },

  {
    name: "WE ARE CURRENTLY RUNNING A PROMO ",
    url: "#",
  },
  {
    name: "A TECHNICIAN ? JOIN US",
    url: "#",
  },
  {
    name: "SEARCH",
    url: "#",
  },
];

export const NavMenuUtilityList = [
  { icon: FiSearch, url: "/Blog" },
  { icon: FiHeart, url: "/WishList" },
  { icon: FiShoppingCart, url: "/Shoppingcart" },
];

export const navdatajson = [
  {
    title: { name: "SERVICES ", url: "/services" },
    icon: TfiWrite,
    childList: [
      {
        title: { name: "CROWN MOLDING", url: "/services" },
        childList: [
          {
            title: { name: "FREE CHECKING", url: "/services" },
            childList: [],
          },
          {
            title: {
              name: "CHECKING",
              url: "/services",
            },
            childList: [],
          },
          {
            title: {
              name: "ALL CHECKING",
              url: "/services",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "WAINSCOTING", url: "/SAVINGS" },
        childList: [
          {
            title: {
              name: "LIVING ROOM",
              url: "/services",
            },
            childList: [],
          },
          {
            title: { name: "OFFICE", url: "/services" },
            childList: [],
          },
          {
            title: {
              name: "BOARD ROOM",
              url: "/services",
            },
            childList: [],
          },
          {
            title: {
              name: "HOTEL",
              url: "/services",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "ENTERTAINMENT", url: "/CERTIFICATES" },
        childList: [
          {
            title: {
              name: "BUILT IN ENTERTAINMENT CENTERS",
              url: "/services",
            },
            childList: [],
          },
          {
            title: {
              name: "STUDIO",
              url: "/services",
            },
            childList: [],
          },
          {
            title: { name: "GAMES ROOM", url: "/services" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "FURNITURES", url: "/services" },
        childList: [
          {
            title: { name: "CENTER TABLE", url: "/services" },
            childList: [],
          },
          {
            title: { name: "BOARD ROOM TABLE", url: "/services" },
            childList: [],
          },
          {
            title: { name: "SOFA", url: "/services" },
            childList: [],
          },
          {
            title: { name: "CABINETS", url: "/services" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP" },
        childList: [
          {
            title: { name: "Contact Us", url: "/Contact_Us" },
            childList: [],
          },
          {
            title: { name: "FAQs", url: "/FAQs" },
            childList: [],
          },
          {
            title: { name: "Forms", url: "/services" },
            childList: [],
          },
          {
            title: { name: "Advice Center", url: "/Advice_Center" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2022/global-nav/2022.06_PF_PFOL-Checking-Tiles-R3_Checking_300x250-3.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },

  {
    title: { name: "GALLERY", url: "/gallery" },
    icon: CgCreditCard,
    childList: [
      {
        title: { name: "OUR PROJECTS", url: "/OUR_PROJECTS" },
        childList: [
          {
            title: {
              name: " PROJECTS OVERVIEW",
              url: "/PROJECTS_OVERVIEW",
            },
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP?" },
        childList: [
          {
            title: {
              name: "Contact Us",
              url: "/Contact_Us",
            },
            childList: [],
          },
          {
            title: {
              name: "FAQs",
              url: "/FAQs",
            },
            childList: [],
          },
          {
            title: {
              name: "Disclosures",
              url: "/Disclosures",
            },
            childList: [],
          },
          {
            title: {
              name: " Resource Center",
              url: "/Resource_Center",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2020/credit-cards/Gobal_Nav_Menu_Gold_3.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },
  {
    title: { name: "ABOUT", url: "/about" },
    icon: AiOutlineCar,
    childList: [
      {
        title: { name: "APPLICATION ", url: "/application" },
        childList: [
          {
            title: {
              name: "APPLICATION",
              url: "/APPLICATION",
            },
            childList: [],
          },
          {
            title: {
              name: "BUYING&SERVICING",
              url: "/BUYING_SERVICE",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP" },
        childList: [
          {
            title: { name: "Contact Us", url: "/Contact_Us" },
            childList: [],
          },
          {
            title: { name: "FAQs", url: "/FAQs" },
            childList: [],
          },
          {
            title: { name: "Forms", url: "/IRA_SAVINGS_ACCOUNT" },
            childList: [],
          },
          {
            title: { name: "Advice Center", url: "/Advice_Center" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2023/auto/auto-promo-website-images-r-2-300-x-250-universal-nav-bar-updated.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },
  {
    title: { name: "PRICING", url: "/pricing" },
    icon: AiOutlineCar,
    childList: [
      {
        title: { name: "QUICK JOBS", url: "/quick_jobs" },
        childList: [
          {
            title: {
              name: "Quick Jobs",
              url: "/quick_jobs",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "PREMIUM PLANS", url: "/premium_plans" },
        childList: [
          {
            title: {
              name: "Individual",
              url: "/Individual",
            },
            childList: [],
          },
          {
            title: {
              name: "Corporate",
              url: "/corporate",
            },
            childList: [],
          },
        ],
      },
      {
        title: { name: "HOW CAN WE HELP?", url: "/HOW_CAN_WE_HELP" },
        childList: [
          {
            title: { name: "Contact Us", url: "/Contact_Us" },
            childList: [],
          },
          {
            title: { name: "FAQs", url: "/FAQs" },
            childList: [],
          },
          {
            title: { name: "Forms", url: "/IRA_SAVINGS_ACCOUNT" },
            childList: [],
          },
          {
            title: { name: "Advice Center", url: "/Advice_Center" },
            childList: [],
          },
        ],
      },
      {
        title: { name: "", url: "/HOW_CAN_WE_HELP" },
        childList: [],
        url: {
          name: "https://www.penfed.org/content/dam/penfed/general/img/2018/globalnav/globalnav_promo_newstudentloanoption_300x250.jpg",
          url: "/Contact_Us",
        },
      },
    ],
  },
];
