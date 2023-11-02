function ImageItem({item}) {
    
    return ( <div>
        <img className="ImageItemImg" src={item.urls.small} alt={item.alt_description} />
    </div> );
}

export default ImageItem;