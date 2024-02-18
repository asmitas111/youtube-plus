import LifeCycleDemo from '../../containers/LifeCycleDemo/LifeCycleDemo';
import MyProfile from '../../containers/MyProfile/MyProfile';
import RecommendedVideoList from '../../containers/RecommendedVideoList/RecommendedVideoList';
import TrendingVideoList from '../../containers/TrendingVideoList/TrendingVideoList';
import Gallery from './GalleryDemo/Gallery';
import Jumbotron from './Jumbotron/Jumbotron';
import LatestVideo from './LatestVideo/LatestVideo';
import StyleComponent from './StyleComponent/StyleComponent';
import Subscription from './Subscription/Subscription';

const HomePage = () => {
  return (
   <div>
      <Jumbotron />
      <h2>Latest Videos | Props</h2>
      <div className="row">
        <div className="col-md-3">
          <LatestVideo
            id="retryeywt575788"
            title="Greatest final ever? | Ind V Pak | Cricket World Cup"
            thumbnailUrl="https://via.placeholder.com/250x200/ffff00/000000?text=IndVsPakistan"
            channel="MatchUpdates"
            views="2.3M"
            publishedDate="2 days ago">
            Watch highlights of this awaited match between India and Pakistan.
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            id="retryeywt575788"
            title="Kesariya song | Bramhastra Movie | Arijit singh"
            thumbnailUrl="https://via.placeholder.com/250x200/ff0000/ffffff?text=Kesariya"
            channel="MusicAdda"
            views="3M"
            publishedDate="6 days ago"></LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            id="retryeywt575788"
            title="TedX IIT Delhi | cognitive Mind at Work | Dr.Murthy"
            thumbnailUrl="https://via.placeholder.com/250x200/000000/ffffff?text=TedX"
            channel="TedX"
            views="4.6M"
            publishedDate="18 days ago"></LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            id="retryeywt575788"
            title="Horror Scenes | BhoolBhulaiya 2 | Kartik and Kiara"
            thumbnailUrl="https://via.placeholder.com/250x200/0000ff/808080?text=HorrorScenes"
            channel="Filmy"
            views="2.3M"
            publishedDate="8 days ago"></LatestVideo>
        </div>
      </div>

      <hr />
      <h2>Trending Videos | Class Comp, States, Events, Props demo</h2>
      <TrendingVideoList />

      <h2>
        Recommended Videos | Class Comp, States, Events, Conditional Rendering,
        Lists & Keys, Updating State Immutably Demo
      </h2>
      <RecommendedVideoList />

      <hr />
      <h2>Life Cycle Hooks Demo | Available to Class Comp Only</h2>
      <LifeCycleDemo />

      <hr />
      <MyProfile />
     
      <hr />
      <h2>Subscription</h2>
      <Subscription />

      <hr />
      <h2>Styled Component Demo</h2>
      <StyleComponent />

      <hr />
      <h2>Gallery</h2>
      <Gallery />

      </div>
  );
};

export default HomePage;