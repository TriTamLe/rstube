import Agro from '../../util/algorithm';
import { api } from '../../config/server/api.server';

class ContentController {
  loadContent = (props, setContent) => {
    const contentID = props.getContentID;
    console.log('channelId', contentID);
    fetch(api.link + contentID, api.response)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xlm = parser.parseFromString(data, 'application/xml');
        const jsonObject = Agro.xmlToJson(xlm);
        return jsonObject;
      })
      .then(jsonObj => {
        console.log(jsonObj);
        const entries = jsonObj.feed.entry;
        if (entries !== undefined) {
          const _articals = jsonObj.feed.entry.map(entr => {
            const _artical = {
              channelId: entr.id['#text'],
              title: entr.title['#text'],
              link: entr.link['@attributes'].href,
              author: entr.author.name['#text'],
              views:
                entr['media:group']['media:community']['media:statistics'][
                  '@attributes'
                ]['views'],
              updateAt: entr.published['#text'],
              thumbnail:
                entr['media:group']['media:thumbnail']['@attributes'].url,
              discription: entr['media:group']['media:description']['#text'],
            };
            return _artical;
          });
          const contentObject = {
            channelId: props.getContentID,
            author: jsonObj.feed.author.name['#text'],
            articals: _articals,
          };

          setContent(prev => contentObject);
        } else {
          const contentNull = {
            channelId: props.getContentID,
            author: jsonObj.feed.author.name['#text'],
            articals: [],
          };
          setContent(prev => contentNull);
        }
      })
      .catch(err => {
        console.log('ERROR');
        console.log(err);
      });
  };
}

export default new ContentController();
