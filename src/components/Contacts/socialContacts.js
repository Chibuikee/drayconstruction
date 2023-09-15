import {
  BsTwitter,
  BsFacebook,
  BsPinterest,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
export const NavMenuList = {
  title: { name: "PRODUCT", url: "/Shop" },
  childList: [
    { name: "Home", url: "Hero" },
    { name: "About", url: "Intro" },
    { name: "Services", url: "Services" },
    { name: "Works", url: "Works" },
    { name: "Clients", url: "Clients" },
    { name: "Contact", url: "Contact" },
  ],
  text: "Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.",
};
export const links = [
  {
    title: BsFacebook,
  },
  {
    title: BsTwitter,
  },
  {
    title: BsPinterest,
  },
  {
    title: BsGithub,
  },
  {
    title: BsLinkedin,
  },
];
export const personalContact = [
  [BsFacebook, "+234 9032125576"],
  [BsFacebook, "Mon-Sat:10AM - 6PM"],
  [BsFacebook, "drayconstruction@gmail.com"],
];
function Footer() {
  return (
    <footer className="text-center py-[90px] m:py-[120px]">
      <div>
        <p className="text-[0.875rem] text-[#898989] font-light tracking-[0.03em] leading-[1.25rem]">
          &copy; 2023 CR8VIBE MEDIA. ALL RIGHTS RESERVED.
        </p>
        <ul className="mt-[10px] md:w-[70%] mx-auto">
          {links.map((item) => (
            <li
              key={item.title}
              className="inline-block w-[36px] mx-[6px] h-[36px] "
            >
              <a
                href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                className=""
              >
                <item.title size={18} className="text-[#898989]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
