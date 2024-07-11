import AnchorButton from "components/AnchorButton";
import PlayIcon from 'public/assets/svgs/icons/play.svg';

const Play = ({ href }) => (
  <>
    {href && (
      <AnchorButton
        anchorProps={{
          href,
          // target: "_blank",
          rel: "noopener noreferrer",
        }}
        buttonProps={{
          title: "Play",
          endIcon: <PlayIcon fill="currentColor" width="1em" />,
        }}
      />
    )}
  </>
);


export default Play;
