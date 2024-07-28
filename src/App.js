import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";
function App() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl:
      "games/react-unity-game-build/Build/react-unity-game-build.loader.js",
    dataUrl: "games/react-unity-game-build/Build/react-unity-game-build.data",
    frameworkUrl:
      "games/react-unity-game-build/Build/react-unity-game-build.framework.js",
    codeUrl: "games/react-unity-game-build/Build/react-unity-game-build.wasm",
  });

  return (
    <div className="game-container">
      {isLoaded ? (
        <h3 className="heading-text">Indie Racer</h3>
      ) : (
        <h3 className="heading-text">Please wait loading the game..</h3>
      )}
      <Unity
        style={{ height: 900, width: 1500 }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;
