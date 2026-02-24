import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-2xl mx-auto space-y-7">
        <div className="flex flex-col items-center">
          <img
            src="/images/meraj-1.jpeg"
            alt="Meraj Hossain"
            className="w-20 h-20 rounded-full object-cover mb-3"
          />
          <h3 className="text-xl font-semibold mb-1">Let's Connect!</h3>
          <p className="text-gray-600 text-center mb-4">
            Got an idea? A bug to solve? Or just wanna hire me? I'm all ears!
          </p>
          <p>meraj.hossain028@gmail.com</p>
        </div>
        <ul className="flex items-center gap-3 justify-center">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              className="rounded-lg p-3 w-60 hover:-translate-y-0.5 hover:scale-105 origin-center transition-all duration-300"
              style={{ backgroundColor: bg }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex flex-col items-center space-y-2"
              >
                <img src={icon} alt={text} className="size-8 mb-1" />
                <p className="font-semibold text-sm text-white">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
