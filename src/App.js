import logo from './logo.svg';
import './App.css';
import image_1 from './images/image_1.webp';
import image_2 from './images/image_2.webp';
import image_3 from './images/image_3.jpg';
import image_4 from './images/image_4.png';
import image_5 from './images/image_5.png';
import image_6 from './images/image_6.jpg';
import image_7 from './images/image_7.jpg';
import image_8 from './images/image_8.jpg';
import image_9 from './images/image_9.webp';
import image_10 from './images/image_10.jpg';
import image_11 from './images/image_11.jpg';
import image_12 from './images/image_12.jpg';


function App() {
  return (
    <div className="App">
     <h1><center>Artistravin- online art portfolio of Ravin Kumar</center></h1><br/>
      <table align="center">
      <tr>
      <td className="image_class"><img src={image_1} className="image_internal_class" alt="image" /></td>
      <td className="image_class"><h3>The two sides</h3>Ones ambitions often became source of disaster for others.</td>
      </tr>
      <tr>
      <td className="image_class"><h3>Krishna</h3>The divine is everywhere.</td>
      <td className="image_class"><img src={image_2} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_3} className="image_internal_class" alt="image" /></td>
      <td className="image_class"><h3>Time and Move</h3>It's always the move.</td>
      </tr>
      <tr>
      <td className="image_class"><h3>Mysterious People</h3>Every being is a mystery.</td>
      <td className="image_class"><img src={image_4} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_5} className="image_internal_class" alt="image" /></td>
      <td className="image_class"><h3>Warrior within Us</h3>It's time to be fearless, it's time the warrior within us wake up!</td>
      </tr>
      <tr>
      <td className="image_class"><h3>Raise against the darkness</h3>Everyone has to stand for something sometimes. Time make people stand in darkness, to let them rise.</td>
      <td className="image_class"><img src={image_6} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_7} className="image_internal_class" alt="image" /></td>
      <td className="image_class"><h3>Mysterious Eyes</h3>Mysterious Eyes makes me wonder, it's telling me something by not telling something.</td>
      </tr>
      <tr>
      <td className="image_class"><h3>Life and Roads</h3>Sometims the only road one has is not exactly a road, but a path full of hurdles.</td>
      <td className="image_class"><img src={image_8} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_9} className="image_internal_class" alt="image" /></td>
      <td className="image_class"><h3>Locks</h3>A lock to keep another lock a secret.</td>
      </tr>
      <tr>
      <td className="image_class"><h3>Ugly Faces</h3>We can always create something beautiful from anything. It's just the way of looking towards it.</td>
      <td className="image_class"><img src={image_10} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_11} className="image_internal_class" alt="image" /></td>
      <td className="image_class"><h3>Faces and the Darkness</h3>Sometimes darkness hide and individual when he want to show up, and sometimes light reveals the face when the person want to hide.</td>
      </tr>
      <tr>
      <td className="image_class"><h3>The Two Faces</h3>Do you really know people, have you seen their second face that they hide from everyone?</td>
      <td className="image_class"><img src={image_12} className="image_internal_class" alt="image" /></td>
      </tr>
      </table>
    </div>
  );
}

export default App;
