# react-native-scaled-img
react-native-scaled-img allow you to make an image responsive and scalable by defining only a local url source, a height or a width, and the dimensions of the screen.

## install

`yarn add react-native-scaled-img`

## import

`import ScaledImage from 'react-native-scaled-img'`

## define

`const imgToScaled = require('./assets/imgToScaled.png')`

## use
`<ScaledImage 
    source={imgToScaled}
    width={200}
    style={{ opacity: 0.5 }}
/>`
