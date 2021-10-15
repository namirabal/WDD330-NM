(() => {
    function Hike({ name, distance, difficulty, image, } = {}){
      this.name = name;
      this.distance = distance;
      this.difficulty = difficulty;
      this.image = image;
    }
  
    const renderHike = hike => {
      const list = document.querySelector('#hikes');
      const hikeEle = document.createElement('li');
      const template = document.querySelector('#hike-template');
  
      hikeEle.classList.add('hike');
      hikeEle.append(template.content.cloneNode(true));
      hikeEle.querySelector('.hike__name').innerHTML = hike.name;
      hikeEle.querySelector('.hike__difficulty').innerHTML = hike.difficulty;
      hikeEle.querySelector('.hike__distance').innerHTML = hike.distance;
  
      const hikeImg = hikeEle.querySelector('.hike__image');
      hikeImg.setAttribute('src', hike.image);
  
      list.appendChild(hikeEle);
    };
  
    const hikes = [
      { name: 'Bechler Falls', distance: 3, difficulty: 'Easy', image: 'https://www.americansouthwest.net/wyoming/photographs700/cave-falls2.jpg' },
      { name: 'Teton Canyon', distance: 3, difficulty: 'Easy', image: 'https://cdn.jacksonholewy.net/images/content/14443_1131_Teton_Canyon_Alaska_Basin_Trail_Wyoming_lg.jpg' },
      { name: 'Denanda Falls', distance: 7, difficulty: 'Moderate', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Tahquamenon_falls_upper.jpg' },
    ].map(h => new Hike(h)).forEach(renderHike);
  })();