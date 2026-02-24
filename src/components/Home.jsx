import { locations, dockApps } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import useIsMobile from "#hooks/useIsMobile";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Draggable } from "gsap/all";

const projects = locations.work.children ?? [];
const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const isMobile = useIsMobile();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  gsap.registerPlugin(Draggable);
  useGSAP(() => {
    if (isMobile) return;
    Draggable.create(".folder");
  }, [isMobile]);

  if (isMobile) {
    return (
      <section id="home" className="ios-home">
        <ul className="ios-app-grid">
          {dockApps
            .filter((app) => app.canOpen)
            .map(({ id, name, icon }) => (
              <li key={id} className="ios-app-icon" onClick={() => openWindow(id)}>
                <div className="ios-icon-wrapper">
                  <img src={`/images/${icon}`} alt={name} />
                </div>
                <p>{name}</p>
              </li>
            ))}
          {projects.map((project) => (
            <li
              key={project.id}
              className="ios-app-icon"
              onClick={() => handleOpenProjectFinder(project)}
            >
              <div className="ios-icon-wrapper">
                <img src="/images/folder.png" alt={project.name} />
              </div>
              <p>{project.name}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
