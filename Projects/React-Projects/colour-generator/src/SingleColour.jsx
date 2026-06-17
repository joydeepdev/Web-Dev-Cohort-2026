import { toast } from 'react-toastify';

const SingleColour = ({ index, colour }) => {
  const { hex, weight } = colour;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Colour copied to clipboard');
      } catch {
        toast.error('Failed to copy colour to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };

  return (
    <article
      onClick={saveToClipboard}
      style={{
        backgroundColor: `#${hex}`,
      }}
      className={`
        h-40 rounded-2xl cursor-pointer
        flex flex-col justify-center items-center
        shadow-md hover:shadow-xl
        hover:scale-105
        transition-all duration-300
        ${index > 10 ? 'text-white' : 'text-black'}
      `}
    >
      <p className="text-lg font-bold">{weight}%</p>

      <p className="font-mono text-sm tracking-wider">#{hex}</p>

      <p className="mt-3 text-xs opacity-80">Click to Copy</p>
    </article>
  );
};

export default SingleColour;
