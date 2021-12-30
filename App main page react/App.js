//app.js

import logo from './logo.svg';
import './App.css';
import Zheader from './components/Zheader';
function App() {
  return (
    
    <div class="flex flex-col h-screen">
  <div class="flex bg-red-100">Header</div>
  <Zheader />
  
  
  <div class="flex flex-1 bg-gray-100">Body</div>
  <div class="flex bg-blue-100">Footer</div>
</div>

  );
}

export default App;
