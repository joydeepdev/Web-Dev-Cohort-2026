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
    <article style={{ background: `#${hex}` }} onClick={saveToClipboard}>
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
};
export default SingleColour;
