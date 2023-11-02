import ImageItem from "./ImageItem";

function ImageList({imagesPlaceHolder}) {
    return ( <div className="ImageListImg">
        {imagesPlaceHolder.map((image,index)=>{
            return <ImageItem key={index} item={image}/>
        })}
    </div> );
}

export default ImageList;