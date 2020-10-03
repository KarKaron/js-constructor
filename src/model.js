import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks' 
import image from './assets/270366.jpg'

export const model = [
  new TitleBlock(
    "Конструктор сайтов на JavaScript Native",
    {
      tag: "h1",
      styles: {},
      classes: "text-white text-center bg-primary py-4"
    }
  ),  
  new TextBlock(
    "Приложение по созданию сайтов на чистом JavaScript",
    {
      tag: "h5",
      styles: {},
      classes: "text-white text-center bg-secondary py-3"
    }
  ),
  new ColumnsBlock(
    [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Реализованы принципы SOLID и ООП в JavaScript",
      "UI создана своими руками"
    ],
    {
      styles: {},
      classes: "card text-white text-center bg-info m-3 p-3"
    }
  ),
  new ImageBlock(
    image,
    {
      styles: {},
      classes: "d-flex justify-content-center px-3",
      styleImg: {
        width: '90%',
        height: 'auto',
        'border-radius': '7px'
      },
      alt: "Это картинка"
    }
  )
]