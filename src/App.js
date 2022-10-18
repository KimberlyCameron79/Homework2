import AverageRating from './components/AverageRating';
import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <div class="container">
  <div id="content1">
      <h1>MENU</h1>
    
      <div> Dashboard</div>

      <div> Widget</div>

      <div>Reviews</div>

      <div>Customers</div>
          
      <div>Online Analysis</div>
      
      <div>Settings</div>
    

    {/* <div id="nested1"></div>
    <div id="nested2"></div>
    <div id="nested3"></div>
    <div id="nested4"></div> */}
  </div>
  <div id="content2">
  <h1>Reviews</h1>
  <p><bold>1,281</bold></p>

  </div>
  <div id="content3">
  <h1>Average Rating</h1>
  <p>4.6</p>
  </div>
  <div id="content4"><h1>Sentiment Analysis</h1>
  <p>960</p>
  <p>122</p>
  <p>321</p>
  </div>
  <div id="content5">
  <h1>Website Visitors</h1>
  <p>821</p>
  </div>
  <div id="content6"></div>
</div>
</>
        
            
      
    
  );
};

export default App;
