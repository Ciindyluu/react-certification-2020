/*

import axios from 'axios';

const returnCall=(dispatch)=>{
    axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 12,
            //key: 'AIzaSyDeJouzp-DiPx2wO0YfgynKCwyw0L06jSs'
        }
    }).get('/search', { params: {
            q: 'wizeline'
        }
    }).then(res => res.data.items)
    .then(videos=>videos.filter(video=>video.id.kind==='youtube#video'))
    .then(videos=>dispatch(fetchedVideos(videos)))
}
*/

export const fetchVideos = (dispatch)=>() => {
    setTimeout(function(){
        const videoList=[
            {
              "kind": "youtube#searchResult",
              "etag": "8BmkNXYwL9eD0e5Q86KgW_r01GM",
              "id": {
                "kind": "youtube#video",
                "videoId": "9qnfWccDqoY"
              },
              "snippet": {
                "publishedAt": "2020-09-28T18:46:08Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Nelly Gonzalez | Women in Leadership at Wizeline",
                "description": "Nelly Gonzalez has always wanted to be an engineer and she has been continually challenged during her career at Wizeline.",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/9qnfWccDqoY/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/9qnfWccDqoY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/9qnfWccDqoY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2020-09-28T18:46:08Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "Jiak50jVoJ9_Uscl6Dwcb7VySqI",
              "id": {
                "kind": "youtube#video",
                "videoId": "nmXMgqjQzls"
              },
              "snippet": {
                "publishedAt": "2019-09-30T23:54:32Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Video Tour | Welcome to Wizeline Guadalajara",
                "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2019-09-30T23:54:32Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "0Yrs6aTmQBUVQ7UajRtJfcx2wuQ",
              "id": {
                "kind": "youtube#video",
                "videoId": "HYyRZiwBWc8"
              },
              "snippet": {
                "publishedAt": "2019-04-18T18:48:04Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Wizeline Guadalajara | Bringing Silicon Valley to Mexico",
                "description": "Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2019-04-18T18:48:04Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "okUoPJk53189maAhh-WjNrOWQOQ",
              "id": {
                "kind": "youtube#video",
                "videoId": "Po3VwR_NNGk"
              },
              "snippet": {
                "publishedAt": "2019-03-05T03:52:55Z",
                "channelId": "UCXmAOGwFYxIq5qrScJeeV4g",
                "title": "Wizeline hace sentir a empleados como en casa",
                "description": "En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "El Economista TV",
                "liveBroadcastContent": "none",
                "publishTime": "2019-03-05T03:52:55Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "a2ExHLTDnNLRPLgMY8KOQkPhIdc",
              "id": {
                "kind": "youtube#video",
                "videoId": "aKuPmY2m1Ro"
              },
              "snippet": {
                "publishedAt": "2019-12-27T20:47:29Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Wizeline&#39;s 2019 Year in Review",
                "description": "",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/aKuPmY2m1Ro/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/aKuPmY2m1Ro/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/aKuPmY2m1Ro/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2019-12-27T20:47:29Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "4lmSnJ7SFZVf6HkqQJ9a6heTjSk",
              "id": {
                "kind": "youtube#video",
                "videoId": "cjO2fJy8asM"
              },
              "snippet": {
                "publishedAt": "2018-09-25T17:45:19Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "A Day in the Life of an Engineering Manager at Wizeline",
                "description": "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2018-09-25T17:45:19Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "wysdfEjSt1pSNriP5j0Q2RpAOTU",
              "id": {
                "kind": "youtube#video",
                "videoId": "772_6g1rMN8"
              },
              "snippet": {
                "publishedAt": "2016-09-01T18:23:39Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Spotlight: Meet the Wizeline Mexico Team (We&#39;re Hiring!)",
                "description": "Meet a few people from our awesome Wizeline Mexico Team: Dafne, Isabel, Fernando, Alejandro, Vivi, Alejandra, Liusha and Vidal.",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/772_6g1rMN8/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/772_6g1rMN8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/772_6g1rMN8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2016-09-01T18:23:39Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "MHD0J6Fyumdl5OSqSqmDfnDX1cg",
              "id": {
                "kind": "youtube#video",
                "videoId": "PrZHBTv3fjw"
              },
              "snippet": {
                "publishedAt": "2019-10-30T20:56:02Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Wizeline&#39;s Got Talent 2019 | Life at Wizeline",
                "description": "This year we hosted the 2nd annual Wizeline's Got Talent to give our team the chance to show off their after-hours skills and passions. If you want to work at a ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/PrZHBTv3fjw/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/PrZHBTv3fjw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/PrZHBTv3fjw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2019-10-30T20:56:02Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "zDgLn9M9Wz2vEopeDRQIejF1Vb0",
              "id": {
                "kind": "youtube#video",
                "videoId": "gn594mcnyuE"
              },
              "snippet": {
                "publishedAt": "2019-03-29T01:30:00Z",
                "channelId": "UC0oDCiIQRlzucicCWZqhFyA",
                "title": "Así es como Wizeline genera talento estilo &#39;Silicon Valley&#39; en Jalisco",
                "description": "Guadalajara se ha convertido en un semillero de talento en tecnología gracias a empresas como Wizeline, que apostaron por abrir oficinas en el \"Silicon Valley ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/gn594mcnyuE/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/gn594mcnyuE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/gn594mcnyuE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Entrepreneur en Español",
                "liveBroadcastContent": "none",
                "publishTime": "2019-03-29T01:30:00Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "i1ZSt88rIUlEybpRNhxeeOZF0LY",
              "id": {
                "kind": "youtube#video",
                "videoId": "CHzlSGRvWPs"
              },
              "snippet": {
                "publishedAt": "2017-03-08T22:41:43Z",
                "channelId": "UCUsm-fannqOY02PNN67C0KA",
                "title": "Wizeline",
                "description": "El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos ...",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/CHzlSGRvWPs/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/CHzlSGRvWPs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/CHzlSGRvWPs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Noticieros Televisa",
                "liveBroadcastContent": "none",
                "publishTime": "2017-03-08T22:41:43Z"
              }
            },
            {
              "kind": "youtube#searchResult",
              "etag": "_rPgXi8-dTFID2YT_omyg8y4730",
              "id": {
                "kind": "youtube#video",
                "videoId": "UTsBkhu-UGw"
              },
              "snippet": {
                "publishedAt": "2018-11-16T17:40:24Z",
                "channelId": "UCvaUAVzIIGsRNlUDWkQFCeA",
                "title": "AWS Wizeline Founders Campaign - Capítulo 1 - Emprendedor",
                "description": "https://aws.amazon.com/es/campaigns/founders/ Quieres saber más? Contáctenos: https://bit.ly/2G3ZbTE.",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/UTsBkhu-UGw/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/UTsBkhu-UGw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/UTsBkhu-UGw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Amazon Web Services Latin America",
                "liveBroadcastContent": "none",
                "publishTime": "2018-11-16T17:40:24Z"
              }
            }
        ];
    
        const videoss=videoList.map(video => {
            const container={}
            container.id=video.id.videoId;
            container.title= video.snippet.title;
            container.description= video.snippet.description;
            container.img= video.snippet.thumbnails.medium.url;
            return container
        });
        dispatch(fetchedVideos(videoss))
    },1000)
    return {
        type: 'FETCH_VIDEOS'
    }
};

const fetchedVideos = (videos) => {
    return {
        type: 'FETCHED_VIDEOS',
        videos
    }
};

export const selectVideo=(dispatch)=>(id)=> {
  dispatch(setCurrentVideo(id))
return {
  type:'SET_VIDEO',
}
};

const setCurrentVideo=(id)=> {
return {
  type:'SET_CURRENT_VIDEO',
  id
}
};