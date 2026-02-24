import useWindowStore from '#store/window';
import useIsMobile from '#hooks/useIsMobile';
import { ChevronLeft } from 'lucide-react';

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <button
        className="ios-back-btn"
        onClick={() => closeWindow(target)}
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
        <span>Back</span>
      </button>
    );
  }

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls