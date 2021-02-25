import './App.css';

import engi from './img/engi.svg';

function App() {

  const fetchdata = () => {
    fetch('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
    .then(response => response.json())
    
  } 


  return (
    <div className="App">
      <div className="Rectangle">
        <img className="engi" src={engi}></img>
        <div className="faculty">
          <div className="topic">
            คณะวิศวกรรมศาสตร์
          </div>
          <div className="subtopic">
            สาขาวิศวกรรมทั่วไป
          </div>
          <div className="university">
            จุฬาลงกรณ์มหาวิทยาลัย
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className="open">รอบที่เปิด</div>
        <div className="round">
          รอบที่ 4: Addmission
        </div>
        <br></br>
        <hr></hr>
        <div className="sub"></div>
        <div className="score">
          ดูสัดส่วนคะแนน
        </div>
        <br></br>
        <hr></hr>
        <div className="interest">
          10 คนที่สนใจ
          </div>
      </div>
    </div>
  );
}

export default App;
