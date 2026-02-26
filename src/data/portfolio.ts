const make = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const portfolioData = {
  realismo: {
    title: 'Realismo',
    images: ['1544717302-de2939b7ef71', '1552374196-c4e7ffc6e126', '1569407228235-66c0f9726b9b', '1585699324551-f6c309eedeca', '1602233158242-3ba0ac4d2167', '1630514969818-94aef6b5f5dd'].map(make),
  },
  fineline: {
    title: 'Fine line',
    images: ['1517423440428-a5a00ad493e8', '1492562080023-ab3db95bfbce', '1517248135467-4c7edcad34c4', '1539571696357-5a69c17a67c6', '1593882641125-8527e4dd72f2', '1616627457404-dc0b1597bc91'].map(make),
  },
  delicado: {
    title: 'Delicado',
    images: ['1487412912498-0447578fcca8', '1512496015851-a90fb38ba796', '1545239351-1141bd82e8a6', '1577368211130-4bbd0181ddf0', '1606760227091-3dd870d97f1d', '1621607512022-6aecc4fed814'].map(make),
  },
  pets: {
    title: 'Pets',
    images: ['1470259078422-826894b933aa', '1501196354995-cbb51c65aaea', '1526510747491-58f928ec870f', '1555685812-4b943f1cb0eb', '1590608897129-79da98d15969', '1626814026161-2237a95fc5a0'].map(make),
  },
  laser: {
    title: 'Remoção a Laser',
    images: ['1492288991661-058aa541ff43', '1525134479668-1bee5c7c6845', '1547157280-44c8b3def417', '1582719471384-894fbb16e074', '1607604276583-eef5d076aa5f', '1665686377064-fd0f2e7633ef'].map(make),
  },
};
