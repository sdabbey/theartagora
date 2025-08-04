import { useNavigate, useLocation } from 'react-router-dom';

import ArtistSignup from './ArtistSignup';
import ExplorerSignup from './ExplorerSignup';

export default function ChooseAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const modalType = new URLSearchParams(location.search).get('type');
  return (
    <div className="join-us-page">
      <h1>Join <br></br> The Art Agora</h1>
      <p>
        Are you here to share your art or explore the community? Choose how you want to get started.
      </p>

      <div className="option-buttons">
        <button onClick={() => navigate('?type=artist')} className="artist-button">
          <h2>🎨 I’m an Artist</h2>
          <span>
            Share your work with the world, sell prints and merchandise, and join a global community of underrepresented artists.
          </span>
        </button>

        <button onClick={() => navigate('?type=explorer')} className="explorer-button">
          <h2>🛍️ I’m an Explorer</h2>
          <span>
            Discover powerful art, shop exclusive prints & fashion, and support your favorite artists.
          </span>
        </button>
      </div>

      {modalType === 'artist' && <ArtistSignup onClose={() => navigate('/join-the-movement')} />}
      {modalType === 'explorer' && <ExplorerSignup onClose={() => navigate('/join-the-movement')} />}
    </div>
  );
}
