import '../../css/Content/Artical.css';

function Artical(props) {
  const artical = props.artical;
  const uploadedTime = iso => {
    const date = new Date(iso);
    const h = date.getHours();
    const m = date.getMinutes();
    const d = date.getDate();
    const mth = date.getMonth() === 12 ? 1 : date.getMonth() + 1;
    const y = date.getFullYear();

    const update = h + ':' + m + ' on ' + d + '/' + mth + '/' + y;
    return update;
  };
  return (
    <a href={artical.link} id={props.id}>
      <div className='_artical'>
        <div className='thumbnail'>
          <img
            src={artical.thumbnail}
            alt={artical.title}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className='the-content'>
          <div className='title'>
            <p>{artical.title}</p>
          </div>
          <div className='shortInfo'>
            <p>
              {'by ' +
                artical.author +
                '  /  views: ' +
                artical.views +
                '  /  uploaded at ' +
                uploadedTime(artical.updateAt)}
            </p>
          </div>
          <div className='discription'>
            <p>{artical.discription}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Artical;
