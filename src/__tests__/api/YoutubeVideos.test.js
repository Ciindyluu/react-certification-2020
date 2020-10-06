import {
  fetchVideos,
  fetchedVideos,
  selectVideo,
  setCurrentVideo,
  setSearchTerm,
  addToFavorites,
  removeFromFavorites,
} from '../../providers/Video/videoActions';
import { VideoProvider } from '../../providers/Video/Video.provider';
import { videoReducer } from '../../providers/Video/videoReducer';

describe('fetchVideos', () => {
  it('retrieves fetched videos from the API', async () => {
    const result = fetchVideos();
    expect(result).toBeInstanceOf(Object);
  });
});

describe('fetchedVideos', () => {
  it('retrieves fetched videos from the API', async () => {
    const result = fetchedVideos();
    expect(result).toBeInstanceOf(Object);
  });
});

describe('selectVideo', () => {
  it('retrieves selected video from the UI', async () => {
    const result = selectVideo();
    expect(result).toBeInstanceOf(Object);
  });
});

describe('setSearchTerm', () => {
  it('retrieves the input from user to make a search ', async () => {
    const result = setSearchTerm();
    expect(result).toBeInstanceOf(Object);
  });
});

describe('addToFavorites', () => {
  it('retrieves the video selected to add to favorites', async () => {
    const result = addToFavorites();
    expect(result).toBeInstanceOf(Object);
  });
});

describe('removeFromFavorites', () => {
  it('retrieves the video selected to delete from favorites', async () => {
    const result = removeFromFavorites();
    expect(result).toBeInstanceOf(Object);
  });
});

const videos = [
  {
    id: 'nmXMgqjQzls',
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    description:
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
    img: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
  },
  {
    id: 'HYyRZiwBWc8',
    title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
    description:
      'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
    img: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
  },
  {
    id: 'Po3VwR_NNGk',
    title: 'Wizeline hace sentir a empleados como en casa',
    description:
      'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
    img: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
  },
  {
    id: 'CHzlSGRvWPs',
    title: 'Wizeline',
    description:
      'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos ...',
    img: 'https://i.ytimg.com/vi/CHzlSGRvWPs/mqdefault.jpg',
  },
  {
    id: 'cjO2fJy8asM',
    title: 'A Day in the Life of an Engineering Manager at Wizeline',
    description:
      "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
    img: 'https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg',
  },
];

const favoritesVideos = [
  {
    id: 'nmXMgqjQzls',
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    description:
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
    img: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
  },
  {
    id: 'HYyRZiwBWc8',
    title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
    description:
      'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
    img: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
  },
];

const state = {
  videos: videos,
  favoritesVideos: favoritesVideos,
  currentVideo: null,
  searchTerm: 'wizeline',
};

describe('getFetchedVideosLength', () => {
  it('retrieves the length of the fetched videos array', async () => {
    const result = videoReducer(state, 'FETCHED_VIDEOS');
    expect(result.videos.length).toBe(5);
  });
});

describe('getVideoProperties', () => {
  it('has the expected structure', () => {
    expect(videos[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      img: expect.any(String),
      description: expect.any(String),
    });
  });
});
