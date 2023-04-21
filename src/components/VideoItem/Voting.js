import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { VOTE } from "@/constants";
import { useVoting } from "@/hooks";
import { useAuth } from "@/contexts";

const Voting = ({ vote, videoId }) => {
  const { doVoting } = useVoting(videoId);
  const { isLogged } = useAuth();

  if (!isLogged) return null;

  if (!vote)
    return (
      <div className="flex">
        <div className="mr-4 cursor-pointer" onClick={() => doVoting(true)}>
          <AiOutlineLike size={25} />
        </div>
        <div className="cursor-pointer">
          <AiOutlineDislike size={25} onClick={() => doVoting(false)} />
        </div>
      </div>
    );

  return (
    <div>
      {vote === VOTE.LIKE && <AiFillLike size={25} />}
      {vote === VOTE.DISLIKE && <AiFillDislike size={25} />}
    </div>
  );
};

export default Voting;
