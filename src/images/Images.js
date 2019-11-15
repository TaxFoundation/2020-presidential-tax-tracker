import bennet from './bennet.jpg';
import beto from './beto.jpg';
import biden from './biden.jpg';
import bloomberg from './bloomberg.jpg';
import booker from './booker.jpg';
import bullock from './bullock.jpg';
import buttigieg from './buttigieg.jpg';
import castro from './castro.jpg';
import blasio from './blasio.jpg';
import delaney from './delaney.jpg';
import patrick from './patrick.jpg';
import gabbard from './gabbard.jpg';
import gillibrand from './gillibrand.jpg';
import harris from './harris.jpg';
import hickenlooper from './hickenlooper.jpg';
import klobuchar from './klobuchar.jpg';
import inslee from './inslee.jpg';
import messam from './messam.jpg';
import moulton from './moulton.jpg';
import ojeda from './ojeda.jpg';
import ryan from './ryan.jpg';
import sanders from './sanders.jpg';
import sanford from './sanford.jpg';
import sestak from './sestak.jpg';
import steyer from './steyer.jpg';
import swalwell from './swalwell.jpg';
import trump from './trump.jpg';
import walsh from './walsh.jpg';
import warren from './warren.jpg';
import weld from './weld.jpg';
import williamson from './williamson.jpg';
import yang from './yang.jpg';

const Images = [
  {
    id: 'bennet',
    image: bennet,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Michael_Bennet_%2848641554612%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'biden',
    image: biden,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Joe_Biden_%2848651036981%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'bloomberg',
    image: bloomberg,
    url: 'https://www.flickr.com/photos/bloombergphilanthropies/29828795984/',
    attribution: 'Public Domain',
  },
  {
    id: 'booker',
    image: booker,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/Cory_Booker_February_2019.jpg',
    attribution:
      'AFGE [CC BY 2.0 (https://creativecommons.org/licenses/by/2.0)]',
  },
  {
    id: 'bullock',
    image: bullock,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/1/13/Steve_Bullock_%2848639086713%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'buttigieg',
    image: buttigieg,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Pete_Buttigieg_%2848646119033%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'castro',
    image: castro,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/8/8d/Julian_Castro_%2848644712958%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'blasio',
    image: blasio,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Bill_de_Blasio_%2848609755927%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'delaney',
    image: delaney,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/John_Delaney_%2848644734173%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'patrick',
    image: patrick,
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Deval_2.jpg',
    attribution:
      'Scott LaPierre [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'gabbard',
    image: gabbard,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Tulsi_Gabbard_%2848011630723%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'gillibrand',
    image: gillibrand,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kirsten_Gillibrand_%2848011267582%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'harris',
    image: harris,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Kamala_Harris_%2848609224792%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'hickenlooper',
    image: hickenlooper,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/John_Hickenlooper_%2846831593435%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'inslee',
    image: inslee,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jay_Inslee_%2848609608871%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'klobuchar',
    image: klobuchar,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/8/8a/Amy_Klobuchar_by_Lorie_Shaull_04.jpg',
    attribution:
      'Lorie Shaull [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
  },
  {
    id: 'messam',
    image: messam,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/9/97/Wayne_Messam_%2847904682751%29.jpg',
    attribution:
      'Marc Nozell from Merrimack, New Hampshire, USA [CC BY 2.0 (https://creativecommons.org/licenses/by/2.0)]',
  },
  {
    id: 'moulton',
    image: moulton,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/Seth_Moulton_%2848628260973%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'ojeda',
    image: ojeda,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/MAJ_Richard_Ojeda.jpg',
    attribution: 'Public Domain',
  },
  {
    id: 'beto',
    image: beto,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Beto_O%27Rourke_%2848641398301%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'ryan',
    image: ryan,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Tim_Ryan_%2848639629097%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'sanders',
    image: sanders,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bernie_Sanders_%2848646650808%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'sanford',
    image: sanford,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Mark_Sanford_%2815317823322%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'sestak',
    image: sestak,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Joe_Sestak_%2848641065668%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'steyer',
    image: steyer,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/f/f8/Tom_Steyer_%2848011201546%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'swalwell',
    image: swalwell,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Eric_Swalwell_%2848016288116%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'trump',
    image: trump,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Donald_Trump_%2829273256122%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'walsh',
    image: walsh,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Joe_Walsh_%285452299087%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'warren',
    image: warren,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/5/5d/Elizabeth_Warren_%2848650427261%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'weld',
    image: weld,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/1/1f/Bill_Weld_on_4th_day_of_2016_Libertarian_Convention_%281%29.jpg',
    attribution:
      'Redandready [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
  },
  {
    id: 'williamson',
    image: williamson,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Marianne_Williamson_%2848563760542%29.jpg',
    attribution:
      'Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]',
  },
  {
    id: 'yang',
    image: yang,
    url:
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Andrew_Yang_talking_about_urban_entrepreneurship_at_Techonomy_Conference_2015_in_Detroit%2C_MI.jpg',
    attribution:
      'Asa Mathat for Techonomy [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
  },
];

export default Images;
