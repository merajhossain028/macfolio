import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.textfile?.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="textfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="bg-white p-6 overflow-y-auto h-full">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
          />
        )}

        <h3 className="text-lg font-semibold text-center">{data.name}</h3>

        {data.subtitle && (
          <p className="text-sm text-gray-500 text-center mt-1">
            {data.subtitle}
          </p>
        )}

        {data.description && (
          <div className="mt-4 space-y-3">
            {data.description.map((paragraph, index) => (
              <p key={index} className="text-sm text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "textfile");
export default TextWindow;
