const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://cdn.wallpapersafari.com/88/11/Mrbj1w.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://static2.bigstockphoto.com/0/5/1/large1500/150406364.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rDtN98Qoishumwih/graphicstock-pair-of-red-sneakers-on-a-floor-studio-shot-on-a-wooden-background_B0ZSSQ6W-_SB_PM.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://www.cowboydatingexpert.com/wp-content/uploads/2019/09/Retro-cowgirl-in-jeans-jacket-in-countryside.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2014/04/Different-Types-of-Shots-Cowboy-Shot-Header.jpeg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
