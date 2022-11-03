import "./App.css";
import Header from "./layout/Header/Header";
import Theme from "./theme/Theme";

function App() {
  return (
    <div className="center">
      <Theme>
        <Header />
      </Theme>
    </div>
  );
}

export default App;
