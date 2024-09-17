import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title className={"text-[30px]"} title="Contact Us" />
            <div className="flex flex-col gap-y-2 mt-3">
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Location</span>
              </a>
              <a href={""}>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Call +90-123-456-7890</span>
              </a>
              <a href="">
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">demo@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title className={"text-[38px]"} title="Feane " />
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate repellendus explicabo eum vitae reprehenderit! Sed
              rerum illum distinctio accusantium consectetur esse iusto, ab nemo
              voluptas vel, corporis quas incidunt repellendus.
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              {/* {footer?.socialMedia?.map((item) => (
                <a
                  href={item?.link}
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all"
                  key={item._id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              ))} */}
            </div>
          </div>
          <div className="md:flex-1">
            <Title className={"text-[30px]"} title="Opening Hours" />
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">10.00 AM</span>
              </div>
              <div>
                <span className="inline-block ml-2">19.00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
