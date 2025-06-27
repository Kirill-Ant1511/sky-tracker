import '../../../styles/FlightAction.scss'

interface Props {
  onRoute: () => void;
  onFollow: () => void;
  onShare: () => void;
  onMore: () => void;
}

export function FlightAction({onRoute, onFollow, onShare, onMore} : Props) {
  return <div className="button_block">
          <button onClick={onRoute}><img src="/Route.svg"/><span>Route</span></button>
          <button onClick={onFollow}><img src="/Follow.svg"/><span>Follow</span></button>
          <button onClick={onShare}><img src="/Share.svg"/><span>Share</span></button>
          <button onClick={onMore}><img src="/More.svg"/><span>More</span></button>
        </div>
}