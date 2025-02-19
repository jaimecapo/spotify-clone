export type Playlist = {
  id: number;
  name: string;
  author: string;
  isAlbum: boolean;
  img: string;
  songs: RelationSong[];
};

type RelationSong = {
  addedAt: Date;
  song: Song;
};
export type Song = {
  id: number;
  name: string;
  audio: string;
  duration: number;
  album?: { name: string; cover: string }; //En spotify se almacena en 3 tamaños, pero primero usaremos 1.
  artists: string[];
};

export const PLAYLISTS: Playlist[] = [
  {
    id: 1,
    name: "Canciones que te gustan",
    author: "jaime.cabaleiro",
    img: "https://misc.scdn.co/liked-songs/liked-songs-640.jpg",
    isAlbum: false,
    songs: [
      {
        addedAt: new Date(),
        song: {
          id: 1,
          audio: "",
          album: {
            name: "Party Never Ends, Pt. 1 (Deluxe Edition)",
            cover:
              "https://i.scdn.co/image/ab67616d00001e027ee1a9efdb2c8835ff9fdb79",
          },
          name: "More than Friends",
          artists: ["INNA", "Daddy Yankie"],
          duration: 237795,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 2,
          audio: "",
          album: {
            name: "SAN JORGE",
            cover:
              "https://i.scdn.co/image/ab67616d00001e02e74c27199179e71e0998da68",
          },
          name: "SINCERO",
          artists: ["Recycled J"],
          duration: 196240,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 3,
          audio: "",
          name: "CAFé CON RON",
          artists: ["Bad Bunny", "Los planeros de la cresta"],
          album: {
            name: "DeBÍ TiRAR MáS FOToS",
            cover:
              "https://i.scdn.co/image/ab67616d00001e02bbd45c8d36e0e045ef640411",
          },
          duration: 228836,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 4,
          name: "ISSEY MIYAKE",
          audio: "",
          album: {
            name: "VISIÓN TÚNEL",
            cover:
              "https://i.scdn.co/image/ab67616d00001e021aaada2ba7cfd29031862430",
          },
          artists: ["Cruz Cafuné"],
          duration: 250234,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 5,
          name: "Es Mejor",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 179078,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 6,
          name: "Buenos Genes",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 245190,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 8,
          name: "Lejos de Tí",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 194851,
        },
      },
    ],
  },
  {
    id: 2,
    name: "Flakk Daniel's L",
    author: "Rels B",
    img: "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
    isAlbum: true,
    songs: [
      {
        addedAt: new Date(),
        song: {
          id: 5,
          name: "Es Mejor",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 179078,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 6,
          name: "Buenos Genes",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 245190,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 7,
          name: "Flakk's Plan",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 182688,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 8,
          name: "Lejos de Tí",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 194851,
        },
      },
    ],
  },
  {
    id: 3,
    name: "Día de Pierna",
    author: "jaime.cabaleiro",
    img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c58a3a240e9b348843fe75fb9",
    isAlbum: false,
    songs: [
      {
        addedAt: new Date(),
        song: {
          id: 3,
          audio: "",
          name: "CAFé CON RON",
          artists: ["Bad Bunny", "Los planeros de la cresta"],
          album: {
            name: "DeBÍ TiRAR MáS FOToS",
            cover:
              "https://i.scdn.co/image/ab67616d00001e02bbd45c8d36e0e045ef640411",
          },
          duration: 228836,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 4,
          name: "ISSEY MIYAKE",
          audio: "",
          album: {
            name: "VISIÓN TÚNEL",
            cover:
              "https://i.scdn.co/image/ab67616d00001e021aaada2ba7cfd29031862430",
          },
          artists: ["Cruz Cafuné"],
          duration: 250234,
        },
      },
      {
        addedAt: new Date(),
        song: {
          id: 5,
          name: "Es Mejor",
          audio: "",
          album: {
            name: "Flakk Daniel's L",
            cover:
              "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
          },
          artists: ["Rels B"],
          duration: 179078,
        },
      },
    ],
  },
];

export const SONGS = [
  {
    id: 1,
    audio: "",
    album: {
      name: "Party Never Ends, Pt. 1 (Deluxe Edition)",
      cover: "https://i.scdn.co/image/ab67616d00001e027ee1a9efdb2c8835ff9fdb79",
    },
    name: "More than Friends",
    artists: ["INNA", "Daddy Yankie"],
    duration: 237795,
  },
  {
    id: 2,
    audio: "",
    album: {
      name: "SAN JORGE",
      cover: "https://i.scdn.co/image/ab67616d00001e02e74c27199179e71e0998da68",
    },
    name: "SINCERO",
    artists: ["Recycled J"],
    duration: 196240,
  },
  {
    id: 3,
    audio: "",
    name: "CAFé CON RON",
    artists: ["Bad Bunny", "Los planeros de la cresta"],
    album: {
      name: "DeBÍ TiRAR MáS FOToS",
      cover: "https://i.scdn.co/image/ab67616d00001e02bbd45c8d36e0e045ef640411",
    },
    duration: 228836,
  },
  {
    id: 4,
    name: "ISSEY MIYAKE",
    audio: "",
    album: {
      name: "VISIÓN TÚNEL",
      cover: "https://i.scdn.co/image/ab67616d00001e021aaada2ba7cfd29031862430",
    },
    artists: ["Cruz Cafuné"],
    duration: 250234,
  },
  {
    id: 5,
    name: "Es Mejor",
    audio: "",
    album: {
      name: "Flakk Daniel's L",
      cover: "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
    },
    artists: ["Rels B"],
    duration: 179078,
  },
  {
    id: 6,
    name: "Buenos Genes",
    audio: "",
    album: {
      name: "Flakk Daniel's L",
      cover: "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
    },
    artists: ["Rels B"],
    duration: 245190,
  },
  {
    id: 7,
    name: "Flakk's Plan",
    audio: "",
    album: {
      name: "Flakk Daniel's L",
      cover: "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
    },
    artists: ["Rels B"],
    duration: 182688,
  },
  {
    id: 8,
    name: "Lejos de Tí",
    audio: "",
    album: {
      name: "Flakk Daniel's L",
      cover: "https://i.scdn.co/image/ab67616d00001e020579a9f20ec52281f4447c73",
    },
    artists: ["Rels B"],
    duration: 194851,
  },
];
