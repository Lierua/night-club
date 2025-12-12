import TitleText from "../../utilityComponents/TitleText";
import Player from "./Player";

const MusicPlayer = () => {
  return (
    <div className="full-bleed content-padding bg-black h-[936px] w-full py-[90px]">
      <div className="w-fit mx-auto">
        <TitleText text="Night Club Track"></TitleText>
      </div>
      <Player />
    </div>
  );
};

export default MusicPlayer;
