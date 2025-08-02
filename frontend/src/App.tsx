import './App.css';

import { Button } from './components/shadcn-ui/button';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        Wrapper
      </div>

      <Button
        variant="secondary"
        onClick={() => console.log('onClick()')}
      >
        Click me!
      </Button>
    </div>
  );
}

export default App;
