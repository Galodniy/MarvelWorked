import { Link } from 'react-router-dom';

import './singleComicLayout.scss';

const SingleComicLayout = ({data}) => {
    const{ title,description,price,thumbnail,pageCount,language} = data;
    return(
    <div className = "single-comic">
            <img src={thumbnail} alt={title} className="single-comic__char-img"/>
        <div className='single-comic__info'>
            <h2 className='single-comic__name'>{title}</h2>
            <p className='single-comic__descr'>{description}</p>
            <p className='single-comic__descr'>{pageCount}</p>
            <p className='single-comic__descr'>language:{language}</p>
            <h2 className='single-comic__price'>{price}</h2>
        </div>
        <Link to="/comics" className='single-comic__back'>Back to all</Link>
    </div>
    )
}

export default SingleComicLayout;